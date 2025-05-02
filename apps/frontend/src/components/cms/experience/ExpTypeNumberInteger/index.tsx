import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeNumberIntegerDataFragmentDoc, type ExpTypeNumberIntegerDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType NumberInteger
 * ExpType NumberInteger
 */
export const ExpTypeNumberIntegerExperience : CmsComponent<ExpTypeNumberIntegerDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeNumberIntegerExperience.displayName = "ExpType NumberInteger (Experience/ExpTypeNumberInteger)"
ExpTypeNumberIntegerExperience.getDataFragment = () => ['ExpTypeNumberIntegerData', ExpTypeNumberIntegerDataFragmentDoc]
ExpTypeNumberIntegerExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeNumberIntegerExperience
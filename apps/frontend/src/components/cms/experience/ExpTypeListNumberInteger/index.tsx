import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListNumberIntegerDataFragmentDoc, type ExpTypeListNumberIntegerDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListNumberInteger
 * ExpType ListNumberInteger
 */
export const ExpTypeListNumberIntegerExperience : CmsComponent<ExpTypeListNumberIntegerDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListNumberIntegerExperience.displayName = "ExpType ListNumberInteger (Experience/ExpTypeListNumberInteger)"
ExpTypeListNumberIntegerExperience.getDataFragment = () => ['ExpTypeListNumberIntegerData', ExpTypeListNumberIntegerDataFragmentDoc]
ExpTypeListNumberIntegerExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListNumberIntegerExperience
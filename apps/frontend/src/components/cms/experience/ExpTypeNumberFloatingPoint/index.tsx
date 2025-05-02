import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeNumberFloatingPointDataFragmentDoc, type ExpTypeNumberFloatingPointDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType NumberFloatingPoint
 * ExpType NumberFloatingPoint
 */
export const ExpTypeNumberFloatingPointExperience : CmsComponent<ExpTypeNumberFloatingPointDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeNumberFloatingPointExperience.displayName = "ExpType NumberFloatingPoint (Experience/ExpTypeNumberFloatingPoint)"
ExpTypeNumberFloatingPointExperience.getDataFragment = () => ['ExpTypeNumberFloatingPointData', ExpTypeNumberFloatingPointDataFragmentDoc]
ExpTypeNumberFloatingPointExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeNumberFloatingPointExperience
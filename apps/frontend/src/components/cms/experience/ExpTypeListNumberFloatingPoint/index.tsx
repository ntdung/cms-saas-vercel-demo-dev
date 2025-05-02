import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListNumberFloatingPointDataFragmentDoc, type ExpTypeListNumberFloatingPointDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListNumberFloatingPoint
 * ExpType ListNumberFloatingPoint
 */
export const ExpTypeListNumberFloatingPointExperience : CmsComponent<ExpTypeListNumberFloatingPointDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListNumberFloatingPointExperience.displayName = "ExpType ListNumberFloatingPoint (Experience/ExpTypeListNumberFloatingPoint)"
ExpTypeListNumberFloatingPointExperience.getDataFragment = () => ['ExpTypeListNumberFloatingPointData', ExpTypeListNumberFloatingPointDataFragmentDoc]
ExpTypeListNumberFloatingPointExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListNumberFloatingPointExperience
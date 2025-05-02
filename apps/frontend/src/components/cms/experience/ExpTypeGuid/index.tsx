import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeGuidDataFragmentDoc, type ExpTypeGuidDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType Guid
 * ExpType Guid
 */
export const ExpTypeGuidExperience : CmsComponent<ExpTypeGuidDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeGuidExperience.displayName = "ExpType Guid (Experience/ExpTypeGuid)"
ExpTypeGuidExperience.getDataFragment = () => ['ExpTypeGuidData', ExpTypeGuidDataFragmentDoc]
ExpTypeGuidExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeGuidExperience
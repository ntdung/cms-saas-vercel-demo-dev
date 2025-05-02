import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeContentContentAreaDataFragmentDoc, type ExpTypeContentContentAreaDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ContentContentArea
 * ExpType ContentContentArea
 */
export const ExpTypeContentContentAreaExperience : CmsComponent<ExpTypeContentContentAreaDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeContentContentAreaExperience.displayName = "ExpType ContentContentArea (Experience/ExpTypeContentContentArea)"
ExpTypeContentContentAreaExperience.getDataFragment = () => ['ExpTypeContentContentAreaData', ExpTypeContentContentAreaDataFragmentDoc]
ExpTypeContentContentAreaExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeContentContentAreaExperience
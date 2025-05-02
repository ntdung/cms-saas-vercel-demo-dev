import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc, type ExpTypeListChoiceSelectedNotSelectedDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListChoiceSelectedNotSelected
 * ExpType ListChoiceSelectedNotSelected
 */
export const ExpTypeListChoiceSelectedNotSelectedExperience : CmsComponent<ExpTypeListChoiceSelectedNotSelectedDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListChoiceSelectedNotSelectedExperience.displayName = "ExpType ListChoiceSelectedNotSelected (Experience/ExpTypeListChoiceSelectedNotSelected)"
ExpTypeListChoiceSelectedNotSelectedExperience.getDataFragment = () => ['ExpTypeListChoiceSelectedNotSelectedData', ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc]
ExpTypeListChoiceSelectedNotSelectedExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListChoiceSelectedNotSelectedExperience
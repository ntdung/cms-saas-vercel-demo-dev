import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeChoiceSelectedNotSelectedDataFragmentDoc, type ExpTypeChoiceSelectedNotSelectedDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ChoiceSelectedNotSelected
 * ExpType ChoiceSelectedNotSelected
 */
export const ExpTypeChoiceSelectedNotSelectedExperience : CmsComponent<ExpTypeChoiceSelectedNotSelectedDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeChoiceSelectedNotSelectedExperience.displayName = "ExpType ChoiceSelectedNotSelected (Experience/ExpTypeChoiceSelectedNotSelected)"
ExpTypeChoiceSelectedNotSelectedExperience.getDataFragment = () => ['ExpTypeChoiceSelectedNotSelectedData', ExpTypeChoiceSelectedNotSelectedDataFragmentDoc]
ExpTypeChoiceSelectedNotSelectedExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeChoiceSelectedNotSelectedExperience
import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeChoiceSelectListDataFragmentDoc, type ExpTypeChoiceSelectListDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ChoiceSelectList
 * ExpType ChoiceSelectList
 */
export const ExpTypeChoiceSelectListExperience : CmsComponent<ExpTypeChoiceSelectListDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeChoiceSelectListExperience.displayName = "ExpType ChoiceSelectList (Experience/ExpTypeChoiceSelectList)"
ExpTypeChoiceSelectListExperience.getDataFragment = () => ['ExpTypeChoiceSelectListData', ExpTypeChoiceSelectListDataFragmentDoc]
ExpTypeChoiceSelectListExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeChoiceSelectListExperience
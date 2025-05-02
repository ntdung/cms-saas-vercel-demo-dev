import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeChoiceDropDownListDataFragmentDoc, type ExpTypeChoiceDropDownListDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ChoiceDropDownList
 * ExpType ChoiceDropDownList
 */
export const ExpTypeChoiceDropDownListExperience : CmsComponent<ExpTypeChoiceDropDownListDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeChoiceDropDownListExperience.displayName = "ExpType ChoiceDropDownList (Experience/ExpTypeChoiceDropDownList)"
ExpTypeChoiceDropDownListExperience.getDataFragment = () => ['ExpTypeChoiceDropDownListData', ExpTypeChoiceDropDownListDataFragmentDoc]
ExpTypeChoiceDropDownListExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeChoiceDropDownListExperience
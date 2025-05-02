import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeContentContentAreaItemDataFragmentDoc, type ExpTypeContentContentAreaItemDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ContentContentAreaItem
 * ExpType ContentContentAreaItem
 */
export const ExpTypeContentContentAreaItemExperience : CmsComponent<ExpTypeContentContentAreaItemDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeContentContentAreaItemExperience.displayName = "ExpType ContentContentAreaItem (Experience/ExpTypeContentContentAreaItem)"
ExpTypeContentContentAreaItemExperience.getDataFragment = () => ['ExpTypeContentContentAreaItemData', ExpTypeContentContentAreaItemDataFragmentDoc]
ExpTypeContentContentAreaItemExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeContentContentAreaItemExperience
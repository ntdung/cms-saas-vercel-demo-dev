import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeTextXHtmlStringDataFragmentDoc, type ExpTypeTextXHtmlStringDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType TextXHtmlString
 * ExpType TextXHtmlString
 */
export const ExpTypeTextXHtmlStringExperience : CmsComponent<ExpTypeTextXHtmlStringDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeTextXHtmlStringExperience.displayName = "ExpType TextXHtmlString (Experience/ExpTypeTextXHtmlString)"
ExpTypeTextXHtmlStringExperience.getDataFragment = () => ['ExpTypeTextXHtmlStringData', ExpTypeTextXHtmlStringDataFragmentDoc]
ExpTypeTextXHtmlStringExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeTextXHtmlStringExperience
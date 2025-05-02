import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListTextXHtmlStringDataFragmentDoc, type ExpTypeListTextXHtmlStringDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListTextXHtmlString
 * ExpType ListTextXHtmlString
 */
export const ExpTypeListTextXHtmlStringExperience : CmsComponent<ExpTypeListTextXHtmlStringDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListTextXHtmlStringExperience.displayName = "ExpType ListTextXHtmlString (Experience/ExpTypeListTextXHtmlString)"
ExpTypeListTextXHtmlStringExperience.getDataFragment = () => ['ExpTypeListTextXHtmlStringData', ExpTypeListTextXHtmlStringDataFragmentDoc]
ExpTypeListTextXHtmlStringExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListTextXHtmlStringExperience
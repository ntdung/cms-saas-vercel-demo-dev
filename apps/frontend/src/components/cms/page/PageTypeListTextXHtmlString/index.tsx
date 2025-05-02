import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { PageTypeListTextXHtmlStringDataFragmentDoc, type PageTypeListTextXHtmlStringDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * PageType ListTextXHtmlString
 * PageType ListTextXHtmlString
 */
export const PageTypeListTextXHtmlStringPage : CmsComponent<PageTypeListTextXHtmlStringDataFragment> = ({ data, children }) => {
    const componentName = 'PageType ListTextXHtmlString'
    const componentInfo = 'PageType ListTextXHtmlString'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
PageTypeListTextXHtmlStringPage.displayName = "PageType ListTextXHtmlString (Page/PageTypeListTextXHtmlString)"
PageTypeListTextXHtmlStringPage.getDataFragment = () => ['PageTypeListTextXHtmlStringData', PageTypeListTextXHtmlStringDataFragmentDoc]
PageTypeListTextXHtmlStringPage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default PageTypeListTextXHtmlStringPage
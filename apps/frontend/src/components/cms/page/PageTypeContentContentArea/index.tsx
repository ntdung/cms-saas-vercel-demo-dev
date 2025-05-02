import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { PageTypeContentContentAreaDataFragmentDoc, type PageTypeContentContentAreaDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * PageType ContentContentArea
 * PageType ContentContentArea
 */
export const PageTypeContentContentAreaPage : CmsComponent<PageTypeContentContentAreaDataFragment> = ({ data, children }) => {
    const componentName = 'PageType ContentContentArea'
    const componentInfo = 'PageType ContentContentArea'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
PageTypeContentContentAreaPage.displayName = "PageType ContentContentArea (Page/PageTypeContentContentArea)"
PageTypeContentContentAreaPage.getDataFragment = () => ['PageTypeContentContentAreaData', PageTypeContentContentAreaDataFragmentDoc]
PageTypeContentContentAreaPage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default PageTypeContentContentAreaPage
import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlockTypeContentContentAreaDataFragmentDoc, type BlockTypeContentContentAreaDataFragment } from "@/gql/graphql";

/**
 * BlockType ContentContentArea
 * BlockType ContentContentArea
 */
export const BlockTypeContentContentAreaComponent : CmsComponent<BlockTypeContentContentAreaDataFragment> = ({ data, children }) => {
    const componentName = 'BlockType ContentContentArea'
    const componentInfo = 'BlockType ContentContentArea'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
BlockTypeContentContentAreaComponent.displayName = "BlockType ContentContentArea (Component/BlockTypeContentContentArea)"
BlockTypeContentContentAreaComponent.getDataFragment = () => ['BlockTypeContentContentAreaData', BlockTypeContentContentAreaDataFragmentDoc]

export default BlockTypeContentContentAreaComponent
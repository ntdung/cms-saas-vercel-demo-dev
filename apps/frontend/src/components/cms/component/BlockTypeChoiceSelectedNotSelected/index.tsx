import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlockTypeChoiceSelectedNotSelectedDataFragmentDoc, type BlockTypeChoiceSelectedNotSelectedDataFragment } from "@/gql/graphql";

/**
 * BlockType ChoiceSelectedNotSelected
 * BlockType ChoiceSelectedNotSelected
 */
export const BlockTypeChoiceSelectedNotSelectedComponent : CmsComponent<BlockTypeChoiceSelectedNotSelectedDataFragment> = ({ data, children }) => {
    const componentName = 'BlockType ChoiceSelectedNotSelected'
    const componentInfo = 'BlockType ChoiceSelectedNotSelected'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
BlockTypeChoiceSelectedNotSelectedComponent.displayName = "BlockType ChoiceSelectedNotSelected (Component/BlockTypeChoiceSelectedNotSelected)"
BlockTypeChoiceSelectedNotSelectedComponent.getDataFragment = () => ['BlockTypeChoiceSelectedNotSelectedData', BlockTypeChoiceSelectedNotSelectedDataFragmentDoc]

export default BlockTypeChoiceSelectedNotSelectedComponent
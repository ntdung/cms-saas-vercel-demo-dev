import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeBlockSimpleBlockDataFragmentDoc, type ExpTypeBlockSimpleBlockDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType BlockSimpleBlock
 * ExpType BlockSimpleBlock
 */
export const ExpTypeBlockSimpleBlockExperience : CmsComponent<ExpTypeBlockSimpleBlockDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeBlockSimpleBlockExperience.displayName = "ExpType BlockSimpleBlock (Experience/ExpTypeBlockSimpleBlock)"
ExpTypeBlockSimpleBlockExperience.getDataFragment = () => ['ExpTypeBlockSimpleBlockData', ExpTypeBlockSimpleBlockDataFragmentDoc]
ExpTypeBlockSimpleBlockExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeBlockSimpleBlockExperience
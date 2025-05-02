import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeLinkUrlToImageDataFragmentDoc, type ExpTypeLinkUrlToImageDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType LinkUrlToImage
 * ExpType LinkUrlToImage
 */
export const ExpTypeLinkUrlToImageExperience : CmsComponent<ExpTypeLinkUrlToImageDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeLinkUrlToImageExperience.displayName = "ExpType LinkUrlToImage (Experience/ExpTypeLinkUrlToImage)"
ExpTypeLinkUrlToImageExperience.getDataFragment = () => ['ExpTypeLinkUrlToImageData', ExpTypeLinkUrlToImageDataFragmentDoc]
ExpTypeLinkUrlToImageExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeLinkUrlToImageExperience
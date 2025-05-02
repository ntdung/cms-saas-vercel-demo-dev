import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListLinkUrlToImageDataFragmentDoc, type ExpTypeListLinkUrlToImageDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListLinkUrlToImage
 * ExpType ListLinkUrlToImage
 */
export const ExpTypeListLinkUrlToImageExperience : CmsComponent<ExpTypeListLinkUrlToImageDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListLinkUrlToImageExperience.displayName = "ExpType ListLinkUrlToImage (Experience/ExpTypeListLinkUrlToImage)"
ExpTypeListLinkUrlToImageExperience.getDataFragment = () => ['ExpTypeListLinkUrlToImageData', ExpTypeListLinkUrlToImageDataFragmentDoc]
ExpTypeListLinkUrlToImageExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListLinkUrlToImageExperience
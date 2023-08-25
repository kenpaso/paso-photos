import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Carousel from '../../components/Carousel'
import getResults from '../../utils/cachedImages'
import cloudinary from '../../utils/cloudinary'
import getBase64ImageUrl from '../../utils/generateBlurPlaceholder'
import type { ImageProps } from '../../utils/types'


const folder = "start"
const Home: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
  const router = useRouter()
  const { photoId } = router.query
  let index = Number(photoId)

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`

  return (
    <>
      <Head>
        <title>kenpaso.com</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} folder={folder}/>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const results =await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${folder}*`)
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();

    if (results) {
      // ... processing code
      let reducedResults: ImageProps[] = []
    reducedResults = results.resources.map((result, index) => {
      if (result.public_id) {
        return {
          id: index,
          height: result.height,
          width: result.width,
          public_id: result.public_id,
          format: result.format,
        };
      } else {
        // Handle the case where public_id is undefined
        return null; // or some default value
      }
    }).filter(result => result !== null);
    const currentPhoto = reducedResults.find(
      (img) => img.id === Number(context.params.photoId)
    )
      currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

      return {
        props: {
          currentPhoto: currentPhoto,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error appropriately
    return {
      props: {
        currentPhoto: null, // or some default value
      },
    };
  }
  
}

export async function getStaticPaths() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${folder}*`)
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute()

  let fullPaths = []
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } })
  }

  return {
    paths: fullPaths,
    fallback: false,
  }
}

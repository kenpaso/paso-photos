import cloudinary from './cloudinary'

let cachedResults

export default async function getResults(folder:string) {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${folder}/*`)
      .sort_by('created_at', 'desc')
      .max_results(400)
      .execute()

    cachedResults = fetchedResults
  }
  console.log("------------cachhes")
  console.log(cachedResults)
  console.log("------------cachhesend")
  return cachedResults
}

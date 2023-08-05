import cloudinary from './cloudinary'

let cachedResults

export default async function getResults(folder:string) {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${folder}/*`)
      .sort_by('created_at', 'desc')
      .max_results(400)
      .execute()

    cachedResults = fetchedResults
  }
  console.log(cachedResults)
  return cachedResults
}

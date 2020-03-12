// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'gt46900z', 
  dataset: 'production', 
  useCdn: true // `false` if you want to ensure fresh data
})
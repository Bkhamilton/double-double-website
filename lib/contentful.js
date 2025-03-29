import contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  // environment: 'master', // optional, defaults to 'master'
})

export default client
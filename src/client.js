import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: '1z8jqj7i',
  dataset: 'production',
  apiVersion: '2020-02-01',
  useCdn: true,
  token:
    'skKtBh6cTc5SZnD798ybkVK4gnpWIq6Tn6yHszYwn315mKo690UgX7P6MdbAXDcK8JM7sYoYBPqHgwvkFQxBikm9iwmyhM5bxl0IypsumP6k6yPkijg2YjV3hoLhi1OXFzH78Alc9P80dTZcns5Imu38LnMDOtN68J0cfmHOiYGuPCdjhmOu'
})

const builder = imageUrlBuilder(client)
export const urlFor = source => builder.image(source)

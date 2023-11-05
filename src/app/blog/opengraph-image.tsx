import { ImageResponse } from 'next/server'
import { MetadataImage } from '@/components/metadata-images/MetadataImage'

export const alt = 'My place for thoughts, reflections & everything in between. Have a good read'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ogImage() {
  return new ImageResponse(
    (
      <MetadataImage
        title="My place for thoughts, reflections & everything in between. Have a good read"
        pathname="/blog"
      />
    ),
    {
      ...size,
      debug: false,
    }
  )
}

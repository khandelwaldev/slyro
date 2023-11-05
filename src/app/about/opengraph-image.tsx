import { ImageResponse } from 'next/server'
import { MetadataImage } from '@/components/metadata-images/MetadataImage'

export const alt = 'About Dev'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ogImage() {
  return new ImageResponse(
    <MetadataImage title="About Dev" pathname="/about" />,
    {
      ...size,
      debug: false,
    }
  )
}

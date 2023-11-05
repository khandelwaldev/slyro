import { BlogPostList } from '@/components/blog-posts/BlogPostList'
import { Prose } from '@/components/Prose'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

const title = 'Blog'
const description = 'My place for thoughts, reflections & everything in between. Have a good read'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/blog',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@i_slyro',
  },
}

export default function Blog() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>My place for thoughts, reflections & everything in between. Have a good read</Title>

        <Prose className="mt-6">
          <p>
            Follow my blog for a glimpse into my experiences with technology,
            covering topics such as front-end development, engaging projects,
            and the latest tech trends.
          </p>
        </Prose>

        <BlogPostList className="mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}

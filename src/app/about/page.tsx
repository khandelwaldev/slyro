import { Prose } from '@/components/Prose'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import Link from 'next/link'

const title = 'About'
const description = 'Most of the things you (maybe) want to know about me'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/about',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@i_slyro',
  },
}

export default function About() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>Most of the things you (maybe) want to know about me</Title>

        <Prose className="mt-6">
          <p>
            I&apos;m Dev, a 19-year-old student belonging to the Homo Sapiens species. I&apos;m a brother, a son, a friend, a self-taught web developer and programmer, an open-source enthusiast, and an extreme melophile.
          </p>
          <p>
          As my age suggests, I&apos;m a high school graduate and a college undergrad pursuing B.Tech (soon). I had already started programming back when I was in 11th standard as we had C++ in our school curriculum. I started web development a year later, and I enjoy working on the web, particularly on the frontend. If you&apos;re curious about the programming languages I know, they include JavaScript, TypeScript, HTML, CSS, and a bit of Kotlin and Python.
          </p>
          <p>
            I&apos;m also into technical writing and blogging. I write mostly on Dev.to and Medium.com.
          </p>
          <p>
           Things I do other than dev and programming? Not much, but I do play football (touching grass is important). I also just like to go on the terrace with soft music and watch clouds pass by 😳. I&apos;ve also started gaming recently (only VALORANT).Apart from these, I don&apos;t have much to do other than overthinking and staring at other pepole and judging them(i know it&apos;s bad).
          </p>
          <p>
           I don&apos;t talk much on any platform, but I enjoy making friends, whether online or in real life, though I&apos;m somewhat introverted. So, if you want to talk about anything, just hit me up, and I&apos;ll get back to you once I&apos;m active online. All my social links are listed here.
          </p>
          <p>
            That&apos;s pretty much everything I know about me yet. In case you know something about me that I still don&apos;t, please let me know - I&apos;ll add it here.
          </p>
        </Prose>
      </div>
    </div>
  )
}

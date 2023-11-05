import { Prose } from '@/components/Prose'
import { Title } from '@/components/Title'
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  SocialIconProps,
  TwitterIcon,
} from '@/components/social-icons'
import { Metadata } from 'next'

const title = 'Contact'
const description = 'DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/contact',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@i_slyro',
  },
}

const contactLinks: ContactLinkProps[] = [
  {
    href: 'mailto:i.slyro17@gmail.com',
    label: 'Send an email',
    icon: EmailIcon,
  },
  {
    href: 'https://github.com/khandelwaldev',
    label: 'Follow on GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/devkhandelwal',
    label: 'Connect on LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://twitter.com/i_slyro',
    label: 'Follow on Twitter',
    icon: TwitterIcon,
  },
]

export default function Contact() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</Title>

        <Prose className="mt-6">
          <p>
            You can reach me on your preferred platform below. I’m open to
            hearing about exciting opportunities and interesting projects. Send
            me a message and I’ll get back to you soon.
          </p>
        </Prose>

        <ul className="mt-16 grid gap-4 md:grid-cols-2">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <ContactLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface ContactLinkProps {
  href: string
  label: string
  icon: React.ComponentType<SocialIconProps>
}

function ContactLink({ href, label, icon: Icon }: ContactLinkProps) {
  return (
    <a
      className="flex justify-between gap-4 rounded-xl border border-gray-200 px-4 py-5 text-base font-medium text-gray-700 transition-colors hover:border-primary-600/50 hover:bg-primary-500/10 hover:text-primary-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary-500/20 dark:hover:bg-primary-950/30 dark:hover:text-primary-500"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-4">
        <Icon width={24} height={24} />
        <span>{label}</span>
      </span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

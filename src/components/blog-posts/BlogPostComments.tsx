// src/components/blog-post/BlogPostComments.tsx

'use client'
import Giscus from '@giscus/react'
import { BlogPost } from 'contentlayer/generated'
import { useMedia } from 'react-use'

export interface BlogPostCommentsProps {
  className?: string
  post: BlogPost
}

export function BlogPostComments({ className, post }: BlogPostCommentsProps) {
  const isDarkTheme = useMedia('(prefers-color-scheme: dark)', false)
  const theme = isDarkTheme ? 'transparent_dark' : 'light'

  return (
    <div className={className}>
      <Giscus
        id="comments"
        repo="khandelwaldev/slyro"
        repoId="R_kgDOKpex2w"
        category="General"
        categoryId="DIC_kwDOKpex284CaspC"
        mapping="specific"
        term={post.url}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}

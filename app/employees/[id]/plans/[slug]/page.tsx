import { Mdx } from "@/components/MDX"
import { getDocument } from "@/lib/utils"
import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    id: string,
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => getDocument(post.slugAsParams) === slug)

  if (!post) notFound()

  return post
}

const page = async ({params}: PageProps) => {
  const post = await getPostFromParams(params.slug)
  return (
    <div><Mdx code={post.body.code} /></div>
  )
}

export default page
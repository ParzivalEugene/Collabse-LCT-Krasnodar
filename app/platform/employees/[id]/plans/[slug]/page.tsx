import { Mdx } from "@/components/MDX";
import { TableOfContext } from "@/components/plans";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
    slug: string;
  };
}

async function getPostFromParams({ slug, id }: { slug: string; id: string }) {
  const path = id + "-_-" + slug;
  const post = allPosts.find((post) => post.slugAsParams === path);

  if (!post) notFound();

  return post;
}

const page = async ({ params }: PageProps) => {
  const post = await getPostFromParams(params);
  return (
    <div className="flex w-full p-6 relative">
      <div>
        <h1 className="font-medium mb-6">{post.title}</h1>
        <Mdx code={post.body.code} />
      </div>
      <TableOfContext />
    </div>
  );
};

export default page;

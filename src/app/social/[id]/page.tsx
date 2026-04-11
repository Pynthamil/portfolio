import { notFound } from "next/navigation";
import { socialPosts } from "@/data/socialAssets";
import SocialPostLayout from "@/components/SocialPostLayout";

export default async function SocialPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = socialPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <SocialPostLayout post={post} />;
}

export async function generateStaticParams() {
  return socialPosts.map((post) => ({
    id: post.id,
  }));
}

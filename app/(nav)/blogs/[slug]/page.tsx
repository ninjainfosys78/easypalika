import type { Metadata } from 'next';
import BlogDetailPageContent from './BlogDetailPageContent';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news and articles from Easy Palika.',
};

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogDetailPageContent slug={slug} />;
}

import type { Metadata } from 'next';
import BlogsPageContent from './BlogsPageContent';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'News, updates and articles about Easy Palika and digital transformation of local bodies in Nepal.',
};

export default function BlogsPage() {
  return <BlogsPageContent />;
}

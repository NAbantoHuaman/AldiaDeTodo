import { redirect } from 'next/navigation';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// Redirect all individual news pages to the homepage
// News content was scraped/curated and violates AdSense "low-value content" policies
export default function NewsDetailPage() {
  redirect('/');
}

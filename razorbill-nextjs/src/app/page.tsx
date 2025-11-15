import { Metadata } from 'next';
import HomeClient from './HomeClient';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Razorbill Technologies- Enterprise Solutions for Modern Businesses',
  description: 'Smart digital solutions for modern businesses. Razorbill Technologies delivers custom web platforms, CRM systems, appointment booking, eCommerce, and automation tools to help you grow efficiently.',
  keywords: 'Razorbill Technologies, web solutions Ghana, CRM systems, business automation, appointment booking software, eCommerce platforms, digital transformation, cloud solutions, business management tools, software development Accra',
  authors: [{ name: 'Razorbill Technologies' }],
  openGraph: {
    title: 'Razorbill Technologies- Enterprise Solutions for Modern Businesses',
    description: 'Driving digital growth across Ghana with CRM systems, web solutions, and automation tools tailored for your business.',
    url: 'https://razorbilltechnologies.com',
    type: 'website',
    images: ['/images/group-afro-americans-working-together.jpg'],
  },
  alternates: {
    canonical: 'https://razorbilltechnologies.com',
  },
  robots: 'index, follow',
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeClient />
    </>
  );
}
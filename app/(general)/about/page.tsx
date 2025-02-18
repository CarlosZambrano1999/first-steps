import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Descriprition',
    keywords: ['About Page', 'Carlos', 'description']
};

export const AboutPage = () => {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  )
}

export default AboutPage;


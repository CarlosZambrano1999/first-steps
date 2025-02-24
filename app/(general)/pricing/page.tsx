import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Descriprition',
    keywords: ['Pricing Page', 'Carlos', 'description']
};


export default function PricingPage() {
  return (
    <span className="text-7xl">Pricing Page</span>
  )
}
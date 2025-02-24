import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Descriprition',
    keywords: ['Contact Page', 'Carlos', 'description']
};


export default function ContactPage() {
  return (
    <span className="text-7xl">Contact Page</span>
  )
}
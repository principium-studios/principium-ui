import FeaturesGrid from '@/components/home/FeaturesGrid';
import Hero from '@/components/home/Hero';
import {features} from '@/content/landing';

import code from "@/content/jsx/components/overview/Wrapper.raw.jsx?raw";

export default function Home() {
  return (
    <main className="flex flex-col px-6 mb-10">
      <pre>{code.toString()}</pre>
      <Hero />
      <FeaturesGrid features={features} />
    </main>
  );
}

import FeaturesGrid from '@/components/home/FeaturesGrid';
import Hero from '@/components/home/Hero';
import {features} from '@/content/landing';

export default function Home() {
  return (
    <main className="flex flex-col px-6 mb-10">
      <Hero />
      <FeaturesGrid features={features} />
    </main>
  );
}

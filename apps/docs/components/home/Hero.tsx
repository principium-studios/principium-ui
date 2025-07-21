import {Button} from '@principium/react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex h-[calc(100svh-64px)] items-center justify-center">
      {/* Main Content */}
      <div className="mx-auto flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          The <span className="text-secondary-400">fastest way</span>
          <br /> to start your next React project.
        </h1>
        <p className="text-background-400 dark:text-background-600 mx-auto max-w-md text-base sm:max-w-lg sm:text-lg lg:max-w-2xl lg:text-xl">
          Principium is a modern, accessible React component library, built for speed, styled with
          Tailwind, and designed to scale.
        </p>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="rounded-full max-sm:h-10 max-sm:min-w-20 max-sm:gap-2 max-sm:px-4 lg:text-base"
            color="primary"
            size="lg"
          >
            <Link href="/docs">
              <span>Get Started</span>
            </Link>
          </Button>
          <Button
            className="rounded-full max-sm:h-10 max-sm:min-w-20 max-sm:gap-2 max-sm:px-4 max-sm:text-sm lg:text-base"
            size="lg"
          >
            Build Your Own
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

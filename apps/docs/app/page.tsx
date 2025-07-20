import {Button} from '@principium/react';

export default function Home() {
  return (
    <main className="flex flex-col px-6">
      <section className="flex h-[calc(100svh-64px)] pt-[calc(33vh-64px)] justify-center">
        {/* Main Content */}
        <div className="mx-auto flex flex-col items-center gap-4 text-center lg:mx-0 lg:ml-auto lg:items-end lg:text-right">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              The building blocks for your next React project.
            </h1>
            <p className="text-background-600 mx-auto max-w-lg text-base md:max-w-xl md:text-lg lg:mx-0 lg:ml-auto lg:max-w-2xl lg:text-xl">
              Principium is a modern, accessible React component library — built for speed, styled
              with Tailwind, and designed to scale.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="rounded-full max-md:h-10 max-md:min-w-20 max-md:gap-2 max-md:px-4 lg:text-base"
              color="primary"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              className="border-1 rounded-full max-md:h-10 max-md:min-w-20 max-md:gap-2 max-md:px-4 max-md:text-sm lg:text-base"
              size="lg"
              variant="bordered"
            >
              Learn
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

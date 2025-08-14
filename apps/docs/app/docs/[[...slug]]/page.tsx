import type {Metadata} from 'next';

import {ArrowSquareOutIcon} from '@phosphor-icons/react/dist/ssr';
import {Button} from '@principium/react';
import {allDocs} from 'contentlayer/generated';
import Link from 'next/link';
import {notFound} from 'next/navigation';

import {getHeadings} from '@/lib/getHeadings';
import {siteConfig} from '@/config/site';
import {MDXContent} from '@/components/mdx/MDXContent';
import TableOfContents from '@/components/docs/TableOfContents';
import ExploreComponentsCard from '@/components/docs/ExploreComponentsCard';

interface DocPageProps {
  params: Promise<{slug: string[]}>;
}

async function getDocFromParams({params}: DocPageProps) {
  const {slug} = await params;
  const paramsSlug = slug?.join('/') || '';
  const doc = allDocs.find((doc) => doc.slugAsParams === paramsSlug);

  const headings = getHeadings(doc?.body.raw);

  return {doc, headings};
}

export async function generateMetadata({params}: DocPageProps): Promise<Metadata> {
  const {doc} = await getDocFromParams({params});

  if (!doc) {
    return {};
  }

  return {
    title: doc.title + ' | Principium UI',
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: doc.url,
      images: [
        {
          url: siteConfig.ogImage ?? '',
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage ?? ''],
      creator: siteConfig.creator,
    },
  };
}

export default async function DocPage({params}: DocPageProps) {
  const {doc, headings} = await getDocFromParams({params});

  if (!doc) {
    notFound();
  }

  return (
    <>
      <article className="prose prose-neutral relative col-span-12 flex max-w-none flex-col items-center lg:col-span-10 xl:col-span-8 [&>*]:w-full [&>*]:max-w-3xl">
        <div className="not-prose mb-4 flex items-center justify-between">
          <h1 className="text-background-950 text-4xl font-bold">{doc.title}</h1>

          <Button asChild size="icon">
            <Link
              href={`${siteConfig.links.github}/blob/main/apps/docs/content/docs/${doc.slugAsParams}.mdx`}
              target="_blank"
            >
              <ArrowSquareOutIcon size={16} />
            </Link>
          </Button>
        </div>
        {doc.displayDescription === 'yes' && (
          <p className="text-background-800 not-prose mb-4">{doc.description}</p>
        )}
        <MDXContent code={doc.body.code} />
      </article>
      <aside className="sticky top-20 hidden xl:col-span-2 xl:block">
        <div className="relative">
          <TableOfContents headings={headings} />
        </div>
        <ExploreComponentsCard />
      </aside>
    </>
  );
}

export function generateStaticParams() {
  return allDocs.map((d) => ({slug: d.slugAsParams.split('/')}));
}

export const dynamicParams = false;

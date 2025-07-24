import TableOfContents from '@/components/docs/TableOfContents';
import {MDXContent} from '@/components/MDXContent';
import {siteConfig} from '@/config/site';
import {getHeadings} from '@/lib/getHeadings';
import {allDocs} from 'contentlayer/generated';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';

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
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: doc.url,
      images: [
        {
          url: siteConfig.ogImage,
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
      images: [siteConfig.ogImage],
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
      <article className="prose prose-neutral col-span-8 flex max-w-none flex-col items-center [&>*]:w-full [&_*]:max-w-3xl">
        <MDXContent code={doc.body.code} />
      </article>
      <aside className="sticky top-20 col-span-2">
        <TableOfContents headings={headings} />
      </aside>
    </>
  );
}

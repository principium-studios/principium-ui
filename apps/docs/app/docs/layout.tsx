import DocsSidebar from '@/components/docs/DocsSidebar';
import routes from '@/config/routes';

export default function DocsLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="max-w-8xl mx-auto grid min-h-[calc(100vh-64px)] w-full grid-cols-12 items-start px-6 pt-6">
      <DocsSidebar routes={routes} />
      {children}
    </main>
  );
}

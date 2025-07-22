import DocsSidebar from '@/components/docs/DocsSidebar';
import routes from '@/config/routes';

export default function DocsLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="grid grid-cols-12 px-6 min-h-[calc(100vh-64px)] items-start pt-6 w-full max-w-8xl mx-auto">
      <DocsSidebar routes={routes} />
      {children}
    </main>
  );
}

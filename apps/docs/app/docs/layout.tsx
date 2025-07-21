import DocsSidebar from '@/components/docs/DocsSidebar';
import routes from '@/config/routes.json';

export default function DocsLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="grid grid-cols-12 px-12 min-h-[calc(100vh-64px)] items-start">
      <DocsSidebar routes={routes} />
      <section className="col-span-10">{children}</section>
    </main>
  );
}

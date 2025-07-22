import DocsSidebar from '@/components/docs/DocsSidebar';
import routes from '@/config/routes';

export default function DocsLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="grid grid-cols-12 px-6 min-h-[calc(100vh-64px)] items-start pt-12">
      <DocsSidebar routes={routes} />
      <section className="col-span-10">{children}</section>
    </main>
  );
}

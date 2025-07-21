interface DocPageProps {   
  params: Promise<{slug: string[]}>; 
}

export default async function DocPage({params}: DocPageProps) {
  const {slug} = await params;
  const paramsSlug = slug?.join("/") || "";

  return (
    <div>
      <h1>Doc Page - {slug}</h1>
    </div>
  );
}

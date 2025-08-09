export default async function PatternPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  return (
    <div>
      <h1>Pattern Page - {slug}</h1>
    </div>
  );
}

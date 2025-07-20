export default function PatternPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div>
      <h1>Pattern Page - {slug}</h1>
    </div>
  );
}
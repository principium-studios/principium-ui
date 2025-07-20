export default function DocPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div>
      <h1>Doc Page - {slug}</h1>
    </div>
  );
}
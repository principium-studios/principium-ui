  export default function OverviewGroup({children, title}: {children?: React.ReactNode, title: string}) {
  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gridAutoRows: 'max-content',
        }}
        className="grid gap-2"
      >
        {children}
      </div>
    </>
  );
}

  export default function App({children, title}) {
  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
        className="grid gap-2"
      >
        {children}
      </div>
    </>
  );
}

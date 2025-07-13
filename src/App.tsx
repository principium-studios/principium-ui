import Button from "@principium/button";

function DemoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-border border-dashed rounded-md w-lg h-80 grid place-items-center bg-muted">
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center p-30">
      <DemoContainer>
        <Button>Test</Button>
      </DemoContainer>
    </div>
  );
}

export default App;

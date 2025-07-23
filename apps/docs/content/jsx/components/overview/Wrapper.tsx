export default function Wrapper({children}: {children?: React.ReactNode}) {
    return <div className="space-y-2">
      <input type="text" />
      {children}
    </div>;
  }
  
  
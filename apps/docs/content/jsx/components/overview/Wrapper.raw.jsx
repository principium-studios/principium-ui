export default function Wrapper({children}) {
    return <div className="space-y-2">
      <input type="text" />
      {children}
    </div>;
  }
  
  
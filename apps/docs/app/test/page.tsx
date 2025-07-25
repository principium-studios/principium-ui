'use client';

import React from 'react';

export default function TestPage() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <main className="flex h-svh flex-col gap-4">
      <div className="flex flex-col gap-4 flex-start">
        <OpenProvider value={open1}>
          <button className="bg-red-500 w-20 h-10" onClick={() => setOpen1(!open1)}>Open1</button>
          <OpenProvider value={open2}>
            <button className="bg-blue-500 w-20 h-10" onClick={() => setOpen2(!open2)}>Open2</button>
            <DisplayOpen1 />
          </OpenProvider>
        </OpenProvider>
      </div>
    </main>
  );
}

const openCtx = React.createContext(false);
const OpenProvider = ({children, value = false}: {children: React.ReactNode; value?: boolean}) => {
  return <openCtx.Provider value={value}>{children}</openCtx.Provider>;
};

const DisplayOpen1 = () => {
  const open = React.useContext(openCtx);
  return (
    <div className="flex gap-4">
      Test <span className="text-red-500">Open1: {open ? 'Open' : 'Closed'}</span>{' '}
    </div>
  );
};

import React from 'react';
import {CaretDownIcon} from '@phosphor-icons/react';
import {Button, Collapsible, CollapsibleContent, CollapsibleTrigger} from '@principium/react';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-70 flex flex-1 flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">State: {isOpen ? 'Open' : 'Closed'}</span>
        <Button size="sm" variant="bordered" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'} Externally
        </Button>
      </div>

      <Collapsible className="flex w-[350px] flex-col gap-2" open={isOpen} onChange={setIsOpen}>
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">Controlled Collapsible</h4>
          <CollapsibleTrigger asChild>
            <Button className="size-8" size="icon" variant="ghost">
              <CaretDownIcon
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                size={16}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="border-border rounded-md border px-4 py-2 text-sm">
          This collapsible is controlled by external state.
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="border-border rounded-md border px-4 py-2 text-sm">Content item 1</div>
          <div className="border-border rounded-md border px-4 py-2 text-sm">Content item 2</div>
          <div className="border-border rounded-md border px-4 py-2 text-sm">Content item 3</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default App;

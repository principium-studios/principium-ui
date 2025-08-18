import React from 'react';
import {CaretDownIcon} from '@phosphor-icons/react';
import {Button, Collapsible, CollapsibleContent, CollapsibleTrigger} from '@principium/react';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-1 justify-center min-h-50">
      <Collapsible open={isOpen} onChange={setIsOpen} className="flex w-[350px] flex-col gap-2">
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <CaretDownIcon
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                size={16}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="border-border rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="border-border rounded-md border px-4 py-2 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="border-border rounded-md border px-4 py-2 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default App;

import React from 'react';
import {CaretDownIcon} from '@phosphor-icons/react';
import {Button, Collapsible, CollapsibleContent, CollapsibleTrigger} from '@principium/react';

function App() {
  return (
    <div className="min-h-50 flex flex-1 justify-center">
      <Collapsible className="flex w-[350px] flex-col gap-2" defaultOpen disabled>
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">Disabled Collapsible</h4>
          <CollapsibleTrigger asChild>
            <Button className="size-8" size="icon" variant="ghost">
              <CaretDownIcon className="transition-transform duration-200" size={16} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="border-border rounded-md border px-4 py-2 text-sm">
          Content is visible but interactions are disabled.
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="border-border rounded-md border px-4 py-2 text-sm">Item 1</div>
          <div className="border-border rounded-md border px-4 py-2 text-sm">Item 2</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default App;

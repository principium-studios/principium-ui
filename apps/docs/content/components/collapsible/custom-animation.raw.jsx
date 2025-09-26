import React from 'react';
import {CaretDownIcon} from '@phosphor-icons/react';
import {Button, Collapsible, CollapsibleContent, CollapsibleTrigger} from '@principium/react';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const customVariants = React.useMemo(
    () => ({
      enter: {
        transform: 'scale(1)',
        opacity: 1,
        transition: {type: 'spring', stiffness: 220, damping: 24},
      },
      exit: {transform: 'scale(0.95)', opacity: 0, transition: {duration: 0.25, ease: 'easeInOut'}},
    }),
    [],
  );

  return (
    <div className="min-h-70 flex flex-1 flex-col items-center gap-4">
      <Collapsible className="flex w-[350px] flex-col gap-2" open={isOpen} onChange={setIsOpen}>
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">Custom animation</h4>
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
          Content before collapsible section
        </div>

        <CollapsibleContent
          className="flex flex-col gap-2"
          variants={customVariants}
          initial={false}
        >
          <div className="border-border rounded-md border px-4 py-2 text-sm">Animated item 1</div>
          <div className="border-border rounded-md border px-4 py-2 text-sm">Animated item 2</div>
          <div className="border-border rounded-md border px-4 py-2 text-sm">Animated item 3</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default App;

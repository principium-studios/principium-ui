import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="single" className="w-full">
        <AccordionItem disabled>
          <AccordionTrigger>Disabled item</AccordionTrigger>
          <AccordionContent>
            This item is disabled and cannot be toggled.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Enabled item</AccordionTrigger>
          <AccordionContent>
            This item is interactive and can be opened and closed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem disabled>
          <AccordionTrigger>Read-only section</AccordionTrigger>
          <AccordionContent>
            Another disabled item demonstrating mixed states.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;



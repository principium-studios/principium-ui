import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="single" variant="bordered" className="w-full">
        <AccordionItem>
          <AccordionTrigger>Bordered variant</AccordionTrigger>
          <AccordionContent>
            Adds a subtle border and rounded corners for clear separation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Great for sections</AccordionTrigger>
          <AccordionContent>
            Useful when you want a stronger visual boundary between items.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Consistent spacing</AccordionTrigger>
          <AccordionContent>
            Maintains comfortable spacing for content readability.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;



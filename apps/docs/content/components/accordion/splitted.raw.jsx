import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="single" variant="splitted" className="w-full">
        <AccordionItem>
          <AccordionTrigger>Splitted variant</AccordionTrigger>
          <AccordionContent>
            Renders each item as an individual card with spacing between them.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Ideal for dashboards</AccordionTrigger>
          <AccordionContent>
            Great when you want clear separation between independent sections.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Compact-friendly</AccordionTrigger>
          <AccordionContent>
            Works nicely with compact spacing as well.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;



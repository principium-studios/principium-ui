import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="multiple" className="w-full">
        <AccordionItem>
          <AccordionTrigger>First section</AccordionTrigger>
          <AccordionContent>This is the first section content.</AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Second section</AccordionTrigger>
          <AccordionContent>This is the second section content.</AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Third section</AccordionTrigger>
          <AccordionContent>This is the third section content.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;

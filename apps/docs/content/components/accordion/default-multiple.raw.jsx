import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="multiple" defaultValue={["item-1", "item-3"]} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1 (opens by default)</AccordionTrigger>
          <AccordionContent>Content for the first item.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content for the second item.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Item 3 (opens by default)</AccordionTrigger>
          <AccordionContent>Content for the third item.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;



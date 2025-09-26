import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <Accordion type="multiple">
      <AccordionItem>
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>
          This is the first section content.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>
          This is the second section content.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Third section</AccordionTrigger>
        <AccordionContent>
          This is the third section content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default App;



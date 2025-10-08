import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="single" variant="light" className="w-full">
        <AccordionItem>
          <AccordionTrigger>Light variant</AccordionTrigger>
          <AccordionContent>
            This is the light variant. It keeps a minimal appearance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Accessible by default</AccordionTrigger>
          <AccordionContent>
            Built to follow accessibility best practices out of the box.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Customizable</AccordionTrigger>
          <AccordionContent>
            Adjust behavior and styles to match your design system.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;



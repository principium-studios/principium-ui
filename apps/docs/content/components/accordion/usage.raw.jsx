import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col justify-center items-center gap-4">
      <Accordion type="single" className="w-full">
        <AccordionItem>
          <AccordionTrigger>What is Principium?</AccordionTrigger>
          <AccordionContent>
            Principium is a component library that focuses on ergonomics and flexibility.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. Components are built with accessibility in mind and follow best practices.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>Can I customize it?</AccordionTrigger>
          <AccordionContent>
            Absolutely. You can control behavior and provide your own animations and styles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;

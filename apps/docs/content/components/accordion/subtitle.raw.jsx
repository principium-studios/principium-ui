import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <Accordion type="single">
      <AccordionItem>
        <AccordionTrigger>
          What is Principium?
          <p>A modern, flexible React UI toolkit.</p>
        </AccordionTrigger>

        <AccordionContent>
          Principium is a component library that focuses on ergonomics and flexibility.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>
          Is it accessible?
          <p>Yes, by design.</p>
        </AccordionTrigger>

        <AccordionContent>
          Components follow accessibility best practices and are built to be inclusive.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>
          Can I customize it?
          <p>Extensively.</p>
        </AccordionTrigger>

        <AccordionContent>
          You can control behavior and provide your own animations and styles.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default App;

import React from 'react';
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@principium/react';

function App() {
  return (
    <div className="min-h-70 flex flex-1 flex-col items-center justify-center gap-4">
      <Accordion type="single" className="w-full">
        <AccordionItem>
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              What is Principium?
              <p className="text-muted text-sm">A modern, flexible React UI toolkit.</p>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            Principium is a component library that focuses on ergonomics and flexibility.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              Is it accessible?
              <p className="text-muted text-sm">Yes, by design.</p>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            Components follow accessibility best practices and are built to be inclusive.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              Can I customize it?
              <p className="text-muted text-sm">Extensively.</p>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            You can control behavior and provide your own animations and styles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;

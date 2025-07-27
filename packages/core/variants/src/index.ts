import {pv} from './pv';
export {pv, createPv} from './pv';
export type SlotParams<T> = T extends (props: infer P) => any ? P : never;


const {header, body, footer} = pv(
    {
      header: '',
      body: '',
      footer: '',
    },
    {
      variants: {
        variant: {
          primary: {
            body: "something"
          }
        },
        size: {
            sm: ""
        },
        isVisible: {
            true: {}
        }
      },
  
    },
  );
  
header({})
body({});

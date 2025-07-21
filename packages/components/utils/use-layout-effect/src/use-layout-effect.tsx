import {useLayoutEffect as useLayoutEffectReact} from 'react';

/**
 * In server environment, using useLayoutEffect will throw an error,
 * so we replace with an empty function.
 *
 * We also use globalThis to access the document object instead of doing 
 * document.documentElement because this will throw **document is not defined**.
 * **globalThis** is a global object that is available in any environment, 
 * whereas document is only available in the browser.
 */
const useLayoutEffect = globalThis?.document?.documentElement ? useLayoutEffectReact : () => {};

export {useLayoutEffect};

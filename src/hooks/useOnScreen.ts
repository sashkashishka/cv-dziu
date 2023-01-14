import * as React from 'react';

interface iUseOnScreenOptions {
  init?: boolean;
  once?: boolean;
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useOnScreen = <tT extends HTMLElement>(
  options: iUseOnScreenOptions = {}, // eslint-disable-line
) => {
  const {
    init = true,
    once = false,
    root = null,
    rootMargin = '0px',
    threshold = 0,
  } = options;

  const ref = React.useRef<tT>(null);
  const [observedEntry, setObserverdEntry] = React.useState<IntersectionObserverEntry>();

  React.useEffect(() => {
    const { current } = ref;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setObserverdEntry(entry);

        /**
         * trigger IntersectionObserver only once
         */
        if (entry.isIntersecting && once && current) {
          observer.unobserve(current);
        }
      },
      {
        rootMargin,
        threshold,
        root,
      },
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref.current, once, rootMargin, threshold]);

  return {
    ref,
    isOnScreen: observedEntry ? observedEntry.isIntersecting : init,
    entry: observedEntry,
  };
};

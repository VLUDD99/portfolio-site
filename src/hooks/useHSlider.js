import { useRef, useEffect } from 'react';

/**
 * Attach to a horizontal scroll container.
 * - Horizontal swipe  → slider scrolls left/right  (normal)
 * - Vertical swipe    → overflow-x temporarily hidden so the page scrolls
 *
 * No preventDefault() is called, so passive listeners are used throughout.
 */
export function useHSlider() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let isHorizontal = null; // null = not yet determined

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isHorizontal = null;
      el.style.overflowX = ''; // restore Tailwind class
    };

    const onTouchMove = (e) => {
      if (isHorizontal === null) {
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);
        if (dx > 5 || dy > 5) {               // wait for a meaningful move
          isHorizontal = dx > dy;
        }
      }
      if (isHorizontal === false) {
        // Vertical gesture — disable horizontal scroll so the touch
        // propagates to the page for vertical scrolling
        el.style.overflowX = 'hidden';
      }
    };

    const onTouchEnd = () => {
      el.style.overflowX = '';
      isHorizontal = null;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove',  onTouchMove,  { passive: true });
    el.addEventListener('touchend',   onTouchEnd,   { passive: true });
    el.addEventListener('touchcancel',onTouchEnd,   { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove',  onTouchMove);
      el.removeEventListener('touchend',   onTouchEnd);
      el.removeEventListener('touchcancel',onTouchEnd);
    };
  }, []);

  return ref;
}

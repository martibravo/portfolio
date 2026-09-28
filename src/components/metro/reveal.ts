/* Marks [data-reveal] elements with data-inview once they scroll into view.
   With reduced motion (or no IntersectionObserver) everything is shown at once. */
const listeners = new WeakMap<Element, Array<() => void>>();

export function onReveal(el: Element, cb: () => void) {
  if ((el as HTMLElement).dataset.inview !== undefined) { cb(); return; }
  const list = listeners.get(el) ?? [];
  list.push(cb);
  listeners.set(el, list);
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function armReveals(root: ParentNode = document) {
  const els = root.querySelectorAll<HTMLElement>('[data-reveal]:not([data-armed])');
  if (!els.length) return;
  const show = (el: HTMLElement) => {
    el.dataset.inview = '';
    (listeners.get(el) ?? []).forEach((cb) => cb());
    listeners.delete(el);
  };
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => { el.dataset.armed = ''; show(el); });
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      show(entry.target as HTMLElement);
    });
  }, { threshold: 0.2 });
  els.forEach((el) => { el.dataset.armed = ''; io.observe(el); });
}

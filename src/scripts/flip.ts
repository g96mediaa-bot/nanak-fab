/**
 * Stat flip cards. Click / keyboard toggles the flipped state; hover is
 * handled in CSS for fine pointers. [data-flip] wraps [data-flip-trigger],
 * [data-flip-front] and [data-flip-back].
 */
export function initFlipCards() {
  document.querySelectorAll<HTMLElement>('[data-flip]').forEach((card) => {
    const trigger = card.querySelector<HTMLButtonElement>('[data-flip-trigger]');
    const front = card.querySelector<HTMLElement>('[data-flip-front]');
    const back = card.querySelector<HTMLElement>('[data-flip-back]');
    if (!trigger) return;

    const label = trigger.getAttribute('aria-label') ?? 'Card';
    const showLabel = label.replace(/: (show|hide) .*$/, ': show details');
    const hideLabel = label.replace(/: (show|hide) .*$/, ': hide details');

    const set = (flipped: boolean) => {
      card.classList.toggle('is-flipped', flipped);
      trigger.setAttribute('aria-expanded', String(flipped));
      trigger.setAttribute('aria-label', flipped ? hideLabel : showLabel);
      if (front) front.setAttribute('aria-hidden', String(flipped));
      if (back) back.setAttribute('aria-hidden', String(!flipped));
    };

    trigger.addEventListener('click', () => {
      set(!card.classList.contains('is-flipped'));
    });
  });
}

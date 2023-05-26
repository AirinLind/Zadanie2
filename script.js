const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');
const tooltip = document.getElementById('tooltip');

let currentElementWithTooltip = null;

function showTooltip(event) {
  const targetElementWithTooltip = event.target.closest('[data-tooltip]');
  if (!targetElementWithTooltip) {
    hideTooltip();
    return;
  }
  if (targetElementWithTooltip !== currentElementWithTooltip) {
    currentElementWithTooltip = targetElementWithTooltip;
    tooltip.textContent = targetElementWithTooltip.dataset.tooltip;
    tooltip.style.display = 'block';
    const {left, top, width} = targetElementWithTooltip.getBoundingClientRect();
    tooltip.style.left = `${left + width}px`;
    tooltip.style.top = `${top}px`;
  }
}

function hideTooltip() {
  tooltip.style.display = 'none';
  currentElementWithTooltip = null;
}

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);

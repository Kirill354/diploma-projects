export function createTooltop(type, value) {
    const tooltip = document.createElement('div');
    const tooltipType = document.createElement('span');
    const tooltipValue = document.createElement('a');


    tooltip.classList.add('contact-icon__tooltip', 'tooltip');
    tooltipType.classList.add('contact-icon__tooltip-type');
    tooltipValue.classList.add('contact-icon__tooltip-value');

    tooltipType.textContent = type + ':';
    tooltipValue.textContent = value;

    tooltip.append(tooltipType, tooltipValue);

    return {
        tooltip,
        tooltipType,
        tooltipValue
    }
}
import { createTooltop } from "./contactTooltip.js";
import { phoneSvg, mailSvg, vkSvg, facebookSvg, otherSvg } from "./svg.js";

// функции для создания и отрисовки иконок контактов
export function createContactLink(type, value, svg, item) {
    const iconLink = document.createElement('a');
    iconLink.classList.add('contact-icon__link')
    iconLink.innerHTML = svg;

    // tooltip
    const tooltip = createTooltop(type, value);


    if (type === 'Телефон') {
        iconLink.href = `tel:${value.trim()}`
    } else if (type === 'Email') {
        iconLink.href = `mailto:${value.trim()}`
    }

    iconLink.append(tooltip.tooltip);
    item.append(iconLink);
}
export function createContactItemByType(type, value, item) {
    switch (type) {
        case 'Телефон':
            createContactLink(type, value, phoneSvg, item);
            break;
        case 'Email':
            createContactLink(type, value, mailSvg, item);
            break;
        case 'Vk':
            createContactLink(type, value, vkSvg, item);
            break;
        case 'Facebook':
            createContactLink(type, value, facebookSvg, item);
            break;
        case 'Другое':
            createContactLink(type, value, otherSvg, item);
            break;
        default:
            break;
    }
}
import { HOVER_DECORATION } from '../enums/linkHandlers';
import { removeDecorationClasses, setDecorationClasses } from './hoverDecorationClassHandlers';

export default function setHoverDecorationEvents() {
  const links = document.querySelectorAll(`[data-${HOVER_DECORATION}]`);

  links.forEach((link) => {
    link.addEventListener('mouseenter', setDecorationClasses);
    link.addEventListener('mouseleave', removeDecorationClasses);
  });
}

import { HOVER_DECORATION } from '../enums/linkHandlers';
import * as DECORATION_COLOR from '../enums/linkDecoratorColors';
import * as DECORATION_STYLE from '../enums/linkDecoratorStyles';
import { getRandomFromArray } from './getRandomFromArray';

export function setHoverDecorationEvents() {
  const links = document.querySelectorAll(`[data-${HOVER_DECORATION}]`);

  for (const link of links) {
    link.addEventListener('mouseenter', setDecorationClasses)
    link.addEventListener('mouseleave', removeDecorationClasses)
  }
}

let currentColor;
let currentStyle;

function setDecorationClasses(e) {
  const color = `linkDecoratorColor--${getRandomFromArray(Object.values(DECORATION_COLOR))}`;
  const style = `linkDecoratorStyle--${getRandomFromArray(Object.values(DECORATION_STYLE))}`;

  e.target.classList.add(color);
  currentColor = color;
  e.target.classList.add(style);
  currentStyle = style
}

function removeDecorationClasses(e) {
  e.target.classList.remove(currentColor);
  e.target.classList.remove(currentStyle);
}

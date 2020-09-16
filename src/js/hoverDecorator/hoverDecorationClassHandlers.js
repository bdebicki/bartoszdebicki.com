import * as DECORATION_COLOR from '../enums/linkDecoratorColors';
import * as DECORATION_STYLE from '../enums/linkDecoratorStyles';
import getRandomFromArray from '../helpers/getRandomFromArray';

let currentColor;
let currentStyle;

export function setDecorationClasses(e) {
  const color = `linkDecoratorColor--${getRandomFromArray(Object.values(DECORATION_COLOR))}`;
  const style = `linkDecoratorStyle--${getRandomFromArray(Object.values(DECORATION_STYLE))}`;

  e.target.classList.add(color);
  currentColor = color;
  e.target.classList.add(style);
  currentStyle = style;
}

export function removeDecorationClasses(e) {
  e.target.classList.remove(currentColor);
  e.target.classList.remove(currentStyle);
}

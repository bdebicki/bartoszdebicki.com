import * as DECORATION_COLOR from '../enums/linkDecoratorColors';
import * as DECORATION_STYLE from '../enums/linkDecoratorStyles';
import getRandomFromArray from '../helpers/getRandomFromArray';

let currentColorClass;
let currentStyleClass;

export function setDecorationClasses(e) {
  currentColorClass = `linkDecoratorColor--${getRandomFromArray(Object.values(DECORATION_COLOR))}`;
  currentStyleClass = `linkDecoratorStyle--${getRandomFromArray(Object.values(DECORATION_STYLE))}`;

  e.target.classList.add(currentColorClass);
  e.target.classList.add(currentStyleClass);
}

export function removeDecorationClasses(e) {
  e.target.classList.remove(currentColorClass);
  e.target.classList.remove(currentStyleClass);
}

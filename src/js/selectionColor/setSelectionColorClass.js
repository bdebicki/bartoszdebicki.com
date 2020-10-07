import * as DECORATION_COLOR from '../enums/linkDecoratorColors';
import getRandomFromArray from '../helpers/getRandomFromArray';

const html = document.querySelector('html');
let currentSelectionColorClass;

function cleanSelectionColorClass() {
  html.classList.remove(currentSelectionColorClass);
}

export default function setSelectionColorClass() {
  cleanSelectionColorClass();

  currentSelectionColorClass = `selectionColor--${getRandomFromArray(Object.values(DECORATION_COLOR))}`;

  html.classList.add(currentSelectionColorClass);
}

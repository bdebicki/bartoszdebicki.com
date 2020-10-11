import * as DECORATION_COLOR from '../enums/linkDecoratorColors';
import getRandomFromArray from '../helpers/getRandomFromArray';

export default function setMobileDecorator() {
  document.querySelector('html').classList
    .add(`mobileLinkDecoratorColor--${getRandomFromArray(Object.values(DECORATION_COLOR))}`);
}

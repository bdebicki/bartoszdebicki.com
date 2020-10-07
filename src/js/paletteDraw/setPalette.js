import getRandomFromArray from '../helpers/getRandomFromArray';

const availablePaletteList = [
  'palette1',
  'palette2',
];

export default function setPalette() {
  document.querySelector('html').classList.add(getRandomFromArray(availablePaletteList));
}

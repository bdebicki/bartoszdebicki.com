import setHoverDecorationEvents from './hoverDecorator/setHoverDecorationEvents';
import setSelectionColorEvents from './selectionColor/setSelectionColorEvents';
import setPalette from './paletteDraw/setPalette';
import setMobileDecorator from './mobileDecorator/setMobileDecorator';

function onLoad() {
  setPalette();
  setMobileDecorator();
  setHoverDecorationEvents();
  setSelectionColorEvents();
}

window.addEventListener('load', onLoad);

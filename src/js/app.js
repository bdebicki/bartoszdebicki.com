import setHoverDecorationEvents from './hoverDecorator/setHoverDecorationEvents';
import setSelectionColorEvents from './selectionColor/setSelectionColorEvents';
import setPalette from './paletteDraw/setPalette';

window.addEventListener('load', setPalette);
window.addEventListener('load', setHoverDecorationEvents);
window.addEventListener('load', setSelectionColorEvents);

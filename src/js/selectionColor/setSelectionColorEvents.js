import setSelectionColorClass from './setSelectionColorClass';

export default function setSelectionColorEvents() {
  document.addEventListener('selectstart', setSelectionColorClass);
}

document.querySelectorAll('.clear-all-inputs').forEach(elem => {
  elem.onclick = clearInputs;
});

export default function clearInputs() {
  [...document.querySelectorAll('input')].forEach(elem => (elem.value = ''));
}

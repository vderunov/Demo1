(function() {
  document.querySelectorAll('.clear-all-inputs').forEach(element => {
    const elem = element;
    elem.onclick = clearInputs;
  });
})();

export default function clearInputs() {
  [...document.querySelectorAll('input')].forEach(elem => (elem.value = ''));
}

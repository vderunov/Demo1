document.querySelectorAll('.clear-all-inputs').forEach(elem => {
    elem.onclick = clearInputs;
});

export function clearInputs() {
    [...document.querySelectorAll('input')].forEach(elem => (elem.value = ''));
}

export default clearInputs;

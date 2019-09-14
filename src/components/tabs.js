const tabs = function makeTabs() {
  const info = document.querySelector('.info-header');
  const tab = document.querySelectorAll('.info-header-tab');
  const tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i += 1) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    const { target } = event;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i += 1) {
        if (target === tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
};

export default tabs;

import { createElement } from './createElement';

export function header() {
  const container = document.createElement('header');
  const logo = createElement(
    'img',
    null,
    'logo',
    null,
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
  );
  container.appendChild(logo);

  const links = document.createElement('ul');
  links.classList.add('links');
  const linkTexts = ['Movies', 'TV Shows'];

  linkTexts.forEach((link) => {
    const li = document.createElement('li');
    li.textContent = link;
    links.appendChild(li);
  });

  container.appendChild(links);

  return container;
}

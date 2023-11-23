import { createElement } from './createElement';

export function footer() {
  const container = document.createElement('footer');

  const githubLink = createElement('a', 'My GitHub Repository', 'github-link');
  githubLink.href = 'https://github.com/JohnBadri/fetch-movie';
  githubLink.target = '_blank';

  const githubIcon = createElement(
    'img',
    null,
    'github-icon',
    null,
    'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  );

  container.appendChild(githubIcon);
  container.appendChild(githubLink);

  return container;
}

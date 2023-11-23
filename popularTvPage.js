import { createElement } from './createElement';
import { displayPopularTV } from './displayPopularTV';

export async function popularTvPage() {
  const container = document.createElement('div');
  container.classList.add('popular');
  container.appendChild(createElement('h1', 'Popular TV Shows'));

  const movieDisplay = await displayPopularTV();
  container.appendChild(movieDisplay);

  return container;
}

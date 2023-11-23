import { createElement } from './createElement.js';

export function createCard(
  id,
  imageUrl,
  movieTitle,
  movieOverview,
  movieRating
) {
  // Create the main card container with a class
  const card = createElement('div', null, 'card');
  card.setAttribute('data-id', id);

  const img = createElement('img');
  img.src = 'https://image.tmdb.org/t/p/original/' + imageUrl;
  img.alt = `Poster of ${movieTitle}`;
  img.classList.add('image');
  card.appendChild(img);

  const title = createElement('h3', movieTitle, 'title');
  card.appendChild(title);

  const overview = createElement('p', movieOverview, 'overview');
  card.appendChild(overview);

  const rating = createElement('p', `Rating: ${movieRating}`, 'rating');
  card.appendChild(rating);

  return card;
}

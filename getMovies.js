import { doFetchMethod } from '/doFetchMethod.js';

export async function getMovies() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular',
      doFetchMethod('GET')
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let movies = await response.json();
    return movies.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

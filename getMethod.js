import { doFetchMethod } from '/doFetchMethod.js';

export async function getMethod(getLink) {
  try {
    const response = await fetch(getLink, doFetchMethod('GET'));

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let movies = await response.json();
    return movies.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

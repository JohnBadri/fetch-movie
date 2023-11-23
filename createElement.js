export function createElement(
  elem,
  elemText,
  addClass,
  textPlaceholder,
  imgSrc
) {
  const tag = document.createElement(elem);
  if (elemText) {
    tag.textContent = elemText;
  }
  if (addClass) {
    tag.classList.add(addClass);
  }
  if (elem === 'input') {
    const div = document.createElement('div');
    tag.placeholder = textPlaceholder;
    div.appendChild(tag);
    return div;
  }
  if (elem === 'img') {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.appendChild(tag);
    return img;
  }
  return tag;
}

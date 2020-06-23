export function dom(tag, text) {
  let r = document.createElement(tag);
  if (text) r.innerText = text;
  return r;
}

export function append(parent, child) {
  parent.appendChild(child);
  return parent;
}

export function addClasses(element, clase) {
  clase.split(' ').forEach((clasa) => {
    element.classList.add(clasa);
  });
}

export function removeClasses(element, clase) {
  clase.split(' ').forEach((clasa) => {
    element.classList.remove(clasa);
  });
}

export function clearHTML(element) {
  element.innerHTML = '';
}

export function createElement(type, props = {}, ...children) {
  const element = document.createElement(type);

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.toLowerCase().substr(2), value);
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key === 'className') {
      element.setAttribute('class', value);
    } else {
      element[key] = value;
    }
  });
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });
  return element;
}

export function createComponent(render) {
  return props => render(props);
}
// Function to add styles to the DOM
export function addStyles(cssContent) {
  if (typeof GM_addStyle !== 'undefined') {
    GM_addStyle(cssContent);
  } else {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);
  }
}

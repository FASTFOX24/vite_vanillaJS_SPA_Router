import type { VNode } from "../jsx/jsx-runtime";

const createElement = (node: VNode): Node => {
  if (node === null || node === undefined) {
    return document.createDocumentFragment();
  }

  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(String(node));
  }

  const element = document.createElement(node.type as string);

  Object.entries(node.props || {}).forEach(([attr, value]) => {
    if (attr.startsWith("data-")) {
      element.setAttribute(attr, value as string);
    } else if (attr === "className") {
      element.setAttribute("class", value as string);
    } else {
      (element as any)[attr] = value;
    }
  });

  node.children.forEach((child) => {
    element.appendChild(createElement(child));
  });

  return element;
};

export { createElement };

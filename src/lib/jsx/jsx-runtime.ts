export type VNode = string | number | VDOM | null | undefined;
export type VDOM = {
  type: string | Function;
  props: Record<string, any> | null;
  children: VNode[];
};

export type Component<P = any> = (props: P) => VNode;

declare global {
  namespace JSX {
    type Element = VNode;
    type IntrinsicElements = {
      [elem: string]: any;
    };
    interface ElementChildrenAttribute {
      children: {}; 
    }
  }
}

export function h(component: string | Component, props: Record<string, any> | null, ...children: VNode[]): VNode {
  if (typeof component === "function") {
    return component({ ...props, children });
  }
  return { type: component, props, children };
}

export const Fragment = null;

export function jsxDEV(
  component: string | Component,
  props: Record<string, any> | null,
  _key?: any,
  _isStaticChildren?: boolean,
  _source?: any,
  _self?: any
): VNode {
  const children = props && "children" in (props as any) ? (props as any).children : undefined;
  const restProps = { ...(props || {}) } as Record<string, any>;
  if ("children" in restProps) delete (restProps as any).children;
  const normalizedChildren = Array.isArray(children)
    ? (children as VNode[])
    : children !== null && children !== undefined
    ? [children as VNode]
    : [];
  return h(component, restProps, ...normalizedChildren);
}

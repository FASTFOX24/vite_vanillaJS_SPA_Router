export type VNode = string | number | VDOM | null | undefined;
export type VDOM = {
  type: string;
  props: Record<string, any> | null;
  children: VNode[];
};
 

export type Component = (props?: Record<string, any>) => VDOM;
 
export const h = (
  component: string | Component,
  props: Record<string, any> | null,
  ...children: VNode[]
) => {
 
  return {
      tag: component,
      props,
      children: children.flat(),
  }
};
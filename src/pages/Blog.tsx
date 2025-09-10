const BlogPage = () => {
    return (
      <div>
        <h2>BlogPage</h2>
        <a data-link href="/">
          go home
        </a>
        &nbsp;&nbsp;
        <a data-link href="/post/2">
          go post
        </a>
      </div>
    );
  };
   
  export default BlogPage;

/* 위의 JSX를 VirtualDOM을 변환하면?

 VNode는 
 "BlogPage" → string → VNode
 "go home" → string → VNode
 " " → string → VNode
 <h2>...</h2> → VDOM → VNode
 <a>...</a> → VDOM → VNode
 즉 VNode = Virtual DOM 노드 또는 텍스트/숫자라고 보면 됨.

DOM은 JSX 태그나 컴포넌트를 객체 형태로 표현한 것
Blog.tsx를 VirtualDOM으로 변환하게 되면
{
  tag: "div",
  props: null,
  children: [
    {
      tag: "h2",
      props: null,
      children: ["BlogPage"]  // VNode
    },
    {
      tag: "a",
      props: { "data-link": true, href: "/" },
      children: ["go home"]   // VNode
    },
    "  ",  // VNode
    {
      tag: "a",
      props: { "data-link": true, href: "/post/2" },
      children: ["go post"]  // VNode
    }
  ]
객체 하나하나가 하나의 DOM이고 DOM의 children 배열에는 Node가 들어가며, Node는 문자열이나 숫자가 될 수도 있고 또다른 DOM이 될 수도 있다.
}*/
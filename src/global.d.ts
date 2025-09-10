// TypeScript가 <div>...</div> 같은 JSX 코드를 만났을 때 내부적 처리 과정
// 1. JSX.Element 타입을 참조 : TS가 JSX 표현식 <div>...</div>의 반환 타입을 확인하려고 함

// 2. JSX.IntrinsicElements 확인 : HTML 태그 또는 커스텀 태그가 어떤 props를 허용하는지 확인
// 예: <input type="text" /> → TS는 JSX.IntrinsicElements['input'] 타입을 참고

// global.d.ts는 보통 src 폴더 내부에 위치하는게 일반적. 그렇지 않으면 JSX.IntrinsicElements를 설정해도 TS가 인식을 하지 못해서 .tsx 파일에서 not found 오류가 발생.

declare namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any; // <div>, <span>, <a> 등 모든 HTML 태그를 any 타입으로 허용. TS가 props 타입을 몰라도 일단 오류를 내지 않음 즉, VanillaJS 환경에서 HTML 태그를 자유롭게 JSX로 사용하기 위해 최소한의 타입 선언임
    }
  }
# 🐈‍⬛포켓몬 도감

## 개인 과제 소개
react, styled-components, context API를 이용한 포켓몬 도감입니다.

배포 링크 : https://smu06030.github.io/pokemon-app/ <br />
깃허브 주소 : https://github.com/smu06030/pokemon-app

## 실행 방법
```bash
# start.
cd pokemon-app
yarn
yarn dev
```

## 🗂️ 파일 구조
📦src <br />
 ┣ 📂assets <br />
 ┃ ┣ 📜Pokeball.jsx <br />
 ┃ ┗ 📜PokemonLogo.jsx <br />
 ┣ 📂components <br />
 ┃ ┣ 📂Layout <br />
 ┃ ┃ ┣ 📜Dashboard.jsx <br />
 ┃ ┃ ┣ 📜Header.jsx <br />
 ┃ ┃ ┣ 📜PokemonCard.jsx <br />
 ┃ ┃ ┗ 📜PokemonList.jsx <br />
 ┃ ┗ 📂UI <br />
 ┃ ┃ ┣ 📜Button.jsx <br />
 ┃ ┃ ┣ 📜Card.jsx <br />
 ┃ ┃ ┣ 📜Container.jsx <br />
 ┃ ┃ ┗ 📜Layout.jsx <br />
 ┣ 📂Context <br />
 ┃ ┣ 📜PokemonContext.jsx <br />
 ┃ ┗ 📜PokemonProvider.jsx <br />
 ┣ 📂mocks <br />
 ┃ ┗ 📜mock.js <br />
 ┣ 📂pages <br />
 ┃ ┣ 📜Dex.jsx <br />
 ┃ ┣ 📜Error.jsx <br />
 ┃ ┣ 📜Home.jsx <br />
 ┃ ┗ 📜PokemonDetail.jsx <br />
 ┣ 📂styles <br />
 ┃ ┣ 📜GlobalStyle.jsx <br />
 ┃ ┗ 📜poke.css <br />
 ┣ 📜App.css <br />
 ┣ 📜App.jsx <br />
 ┣ 📜index.css <br />
 ┣ 📜main.jsx <br />
 ┗ 📜Router.jsx <br />
 <br />

 # 📌 요구 사항

## 필수 구현 사항
- ✅ Git 브랜치 전략 사용 (props-drilling, context)
- ✅ 페이지 라우팅 구현 (react-router-dom)
- ✅ 도감 페이지 구현
  - 각 포켓몬 카드의 `추가` `삭제`버튼
  - 클릭 시 디테일 페이지 이동
- ✅ 디테일 페이지 구현
  - `뒤로가기` 버튼 클릭 시 기존 리스트 유지
- ✅ 알림 기능 구현 (sweetalert2)
- ✅ styled-components 스타일링

 <br />

# 🛠️ 사용 기술
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"></img>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="react"></img>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react"></img><br />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript"></img>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html"></img>
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="css"></img>
<br /><br />

# 💡 주요 기능

## 페이지 라우팅
`포켓몬 도감 시작하기` 버튼 클릭 시 도감 페이지 이동 <br />
`포켓몬 카드` 클릭 시 디테일 페이지 이동 <br />

## 알림 기능
`추가` `삭제`시 알림창 띄우기 <br />
`이미 선택된 포켓몬`이면 알림창 띄우기 <br />
`6개 이상 선택`시 알림창 띄우기 <br />

## 데이터 유지
디테일 페이지 접속 후, 도감 페이지 이동 시 `state` 속성을 이용해 포켓몬 데이터 유지

<br />

# ❓ 이슈
## 1. svg를 JSX 문법으로 컴포넌트화 하는 과정에서 발생한 `Invalid DOM property` 오류
`HTML` 속성과 React `JSX` 속성 간의 차이 때문에 발생한 오류였습니다 

### 해결 과정
`HTML과 JSX 속성의 차이` <br /><br />
React의 JSX는 HTML과 유사해 보이지만, 일부 속성의 차이가 있어 `class`와 `style` 속성을 사용하는 방식의 차이가 있다는 것을 알게 되었습니다.
 <br />

### 해결 방법
`올바른 JSX 속성 사용` <br />
```html
<svg
  className="icon"
  style={{ fill: 'red', width: '50px', height: '50px' }}
  viewBox="0 0 100 100"
>
  {/* ... */}
</svg>
```
- `class` 대신 `className` 사용.
- `style` 속성 사용.
  - JSX에서는 `style` 속성을 객체 형태로 사용합니다. CSS 속성을 중괄호 두 개(`{{}}`)로 감싸서 사용해야 합니다.<br />

### 결론
HTML과 JSX 속성 간의 차이를 제대로 이해하지 못해 발생한 오류였습니다. 이 경험을 통해 JSX 속성 규칙에 대한 이해를 높일 수 있었습니다.

## 2. "Uncaught TypeError: Cannot read properties of undefined (reading 'location')", "The above error occurred in the <RouterProvider> component"
`createBrowserRouter`를 사용하는 과정에서 발생한 오류였습니다.

### 해결 과정
`잘못된 Router 객체 전달 방식` <br /><br />
오류 메시지를 분석한 결과 RouterProvider 구성 요소에서 발생한 오류라는 것을 알게 되었습니다. <br />
router를 다시 한 번 확인 해 본 결과 `router`를 객체로 전달해야 되는데 화살표 함수(`() => {}`)로 잘못된 방식을 사용해 `router`객체를 인식하지 못해 발생한 오류였습니다.

### 해결 방법
`올바른 객체 전달 방식 적용` <br /><br />
`router`를 전달하는 방식을 객체로 전달하도록 수정했습니다.

### 예시 코드
```js
 Before: const router = () => createBrowserRouter(routes);
 After: const router = createBrowserRouter(routes);
```
### 결론
이번 오류는 라우터 객체를 정의할 때의 실수로 인한 오류였습니다. 코드 작성 시 **작은 실수가 큰 오류로 이어질 수 있음을 다시 한 번 깨닫게 되었습니다.** 이러한 경험을 통해 앞으로 더 꼼꼼하게 작성하고, 오류를 빠르게 진단하고 해결할 수 있는 능력을 키우는 것이 중요하다고 생각했습니다.

## 3. 내부 버튼 클릭 시 의도치 않은 페이지 이동 발생
React 프로젝트에서 PokemonCardWrapper(div)를 클릭하면 페이지가 정상적으로 이동해야 하지만, div 내부에 있는 `button`을 클릭할 때도 페이지가 이동하는 문제가 발생했습니다. 예상치 못한 버그였습니다.

### 해결 과정
`이벤트 전파 문제` <br /><br />
이 문제의 원인을 찾기 위해 디버깅을 진행하면서 `이벤트 전파(Event Propagation)`의 개념에 대해 알게 되었습니다. `button` 클릭 시 발생한 이벤트가 상위 DOM 요소인 `PokemonCardWrapper`까지 전파되면서 페이지 전환 이벤트가 발생하는 것이 문제였습니다.<br /><br />
이를 해결하기 위해 `button` 클릭 시 `PokemonCardWrapper`의 `onClick` 이벤트가 실행되지 않게 해야 했습니다.

### 해결 방법
`event.stopPropagation()` <br /><br />
이벤트 전파를 막기 위해 `onClick` 이벤트에 `event.stopPropagation()` 메서드를 호출해 상위 요소로 이벤트가 전파되는 것을 차단해 페이지가 정상적으로 이동하는 것을 확인했습니다.

### 예시 코드
```js
const PokemonCardWrapper = ({ onClick, children }) => (
  <div onClick={onClick}>
    {children}
  </div>
);

const Button = () => (
  <button onClick={(event) => event.stopPropagation()}>
    Click me!
  </button>
);
```

### 결론
이번 문제를 통해 이벤트 전파에 대한 개념에 대해 이해하게 되었고 이벤트 처리와 관련된 디버깅 과정에서 중요한 교훈을 얻을 수 있어서 유사한 문제를 해결할 때 도움이 될 것 같습니다.
<br />
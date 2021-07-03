# JEST Tutorial

> 본 튜토리얼은 팀원에게 JEST 사용법을 전달하기 위해 `코딩앙마`님의 유투브 강좌를 보고 작성하였습니다.  
> 재생목록 링크 : https://www.youtube.com/playlist?list=PLZKTXPmaJk8L1xCg_1cRjL5huINlP2JKt

0. 타입스크립트 적용하기
   [Using Babel](https://jestjs.io/docs/getting-started#using-babel)

```
npm install -D babel-jest @babel/core @babel/preset-env

// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

[Using Typescript](https://jestjs.io/docs/getting-started#using-typescript)

```
npm install -D @babel/preset-typescript

// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

1. JEST의 소개와 간단한 사용법
2. 유용한 Matcher [내용](https://jestjs.io/docs/expect)
3. 비동기 코드 테스트
4. 테스트 전후 작업
5. 목 함수(Mack Functions)
6. 스냅샷

# JEST Tutorial

> 본 튜토리얼은 팀원에게 JEST 사용법을 전달하기 위해 `코딩앙마`님의 유투브 강좌를 보고 작성하였습니다.  
> 재생목록 링크 : https://www.youtube.com/playlist?list=PLZKTXPmaJk8L1xCg_1cRjL5huINlP2JKt

### 동작

```bash
# 해당 폴더 내부 모든 테스트코드 동작
yarn test 01

# 해당 폴더 특정 테스트코드 동작
yarn test 04/lifecycle
```

### 목차

0.  타입스크립트 적용하기
    <details>
      <summary>Babel Usage</summary>
      <div>

        # https://jestjs.io/docs/getting-started#using-babel

        npm install -D babel-jest @babel/core @babel/preset-env

        // babel.config.js
        module.exports = {
          presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        };

      </div>
    </details>
    <details>
      <summary>Typescript Usage</summary>
      <div>
      
        # https://jestjs.io/docs/getting-started#using-typescript
                    
        npm install -D @babel/preset-typescript

        // babel.config.js
        module.exports = {
          presets: [
            ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript',
          ],
        };

      </div>
    </details>

1.  JEST의 소개와 간단한 사용법
2.  [유용한 Matcher](https://jestjs.io/docs/expect)
3.  비동기 코드 테스트
4.  테스트 전후 작업
5.  목 함수(Mock Functions) - 테스트를 위해 흉내만 내는 함수
6.  <a href="https://github.com/WebchemistGenn/Jest_Tutorial_React" target="_blank">Tutorial for React Jest </a>
7.  Tutorial for Node(NestJS) Jest

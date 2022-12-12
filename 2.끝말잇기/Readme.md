## 끝말잇기를 구현하기 전

### 웹팩이란 무엇인가?
![image](https://user-images.githubusercontent.com/101924720/206961224-1d5731a2-0d91-4430-a07a-a3a27d2a88f3.png)

웹팩은 오픈소스 자바스크립트 모듈 번들러 이다.

즉 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화 해주는 **라이브러리**

`create-react-app`을 활용했을때는 이 웹팩이 자동으로 설치 되었기 때문에 웹팩이 어떤일을 하는지 정확하게 알지 못했지만 이번에 조금 더 알게 되었다.

--
|
-- dist
|
-client.jsx
|
-index.html
|
-WordRelay.jsx
|
-webpack.config.js


위와 같은 폴더 디랙터리 구조를 가진 환경을 예시로 할때
client 에서 WordRelay를 불러오고 최종적으로 client 가 index.html 에서 사용된다고 가정하면

```javascript

const path = require('path')

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스 시 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','jsx'] // entry 파일의 확장자명 리스트
    },

    entry: { // 입력
        app: ['./client'],
    },
    output: { //출력
        path: path.join(__dirname, 'dist'), // node path를 활용하여 dist 폴더 안에 있는 경로를 합쳐줌
        filename: 'app.js'
    }
}
```

위와 같은 코드를 가진 웹팩 라이브러리를 통해 index.html 페이지에 javascript code가  병합 되어 나타난다.
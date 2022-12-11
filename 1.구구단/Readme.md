## 강좌에서 create-react-app 안쓰는 이유

create-react-app 을 쓰면 기초적이 설정이 다 되지만 처음부터 써내려 가다보면
어느샌가 완성되어 있다.


### 리액트 useState를 사용 할 때
``` const [state, setState] = useState(0)```
위 와 같이 useState를 사용 할 때 state 를 직접적으로 수정하지 않고 setstatus를 사용해서 수정했었는데 그 이유는 **불변성**을 지키기 위한 것 이었음.

> 틈새 js
`pop`, `push`, `shift`, `unshift`, `splice` 와

`concat` , `slice`의  차이는 무엇일까

아래 두 함수는 새로운 배열을 반환하지만 위 함수는 배열을 직접적으로 수정한다.

리액트에서는 위 함수를 사용하면 안되고  객체의 불변성을 신경써야 한다.


## 완성된 구구단 게임

![image](https://user-images.githubusercontent.com/101924720/206912915-3d4a12fd-d286-459a-9e3a-24a2789aa05e.png)

useState 를 적절히 사용하여 구구단 게임을 만들어 봤다.

추가적으로 정답을 맞추면 점수가 올라가고 틀리면 떨어지는 기능도 구현해보았다.

useRef를 사용하여 input창에 focus 되도록 구현하였는데 크롬이 아닌 
Micro Edge에서는 정상적으로 작동하지 않았다.
가끔 Edge에서도 작동할까?(아마 되겠지...?) 라고 생각한 기능이 Edge에서 작동하지 않는걸 보면 과거 웹 개발자들은 정말 많은 고생을 했겠구나.. 라는 생각을 한다.
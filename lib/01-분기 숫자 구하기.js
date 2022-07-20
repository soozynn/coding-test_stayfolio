/*
1~12월중에 숫자를 입력받고 1분기, 2분기, 3분기, 4분기를 리턴하는 함수를 작성해주세요.

**샘플코드**
const solution = (month) => {
  // 로직작성
  return x;
}

**예시**

- ex) 3 ⇒ 1
- ex) 8 ⇒ 3
- ex) 11 ⇒ 4

**주의할점**

- 1부터 12까지의 숫자만 입력합니다.
*/

export default function solution(month) {
  if (!month || month > 12) return;

  return Math.ceil(month / 3);
}

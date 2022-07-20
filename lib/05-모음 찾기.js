/*
a, e, i, o, u가 몇개 들어 있는지 출력하는 함수를 작성해주세요.

**샘플코드**
const solution = (str) => {
    //
    return count;
}


**예시**

- ex) abracadabra ⇒ 5
*/

export default function solution(str) {
  if (typeof str !== "string") return;

  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;

  for (let character of str) {
    if (vowels.includes(character)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

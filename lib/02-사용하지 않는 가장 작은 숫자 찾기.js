/*
0부터 시작하는 양수(+)인 ID가 있습니다.
여러 ID를 보고 사용하지 않는 가장 작은 숫자를 찾는 함수를 작성해주세요.

**샘플코드**
const solution = (ids) => {
    // ...
    return min;
}

**예시**

- ex) [0,1,2,4] ⇒ 3
- ex) [0,1,2,3,4,5,6] ⇒ 7

**주의할점**

- 정렬되지 않는 배열을 넣어도 동작해야함
- 중복된 숫자가 있는 경우도 동작해야함
*/

export default function solution(ids) {
  if (!Array.isArray(ids)) return;

  const copyArray = [...new Set(ids)];
  let hasNegativeNumber = copyArray.some((num) => num < 0);

  if (hasNegativeNumber) return;

  copyArray.sort((a, b) => a - b);

  let i = 0;
  while (i < copyArray.length) {
    if (copyArray[i + 1] - copyArray[i] === 2) {
      return copyArray[i] + 1;
    }

    i++;
  }

  return i;
}

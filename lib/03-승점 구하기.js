/*
점수를 보고 이기면 3점, 비기면 1점, 지면 0점으로 계산하여 전체 승점을 구하는 함수를 작성해주세요.

**샘플코드**
const solution = (games) => {
    //
    return score;
}

**예시**

- ex) ["3:1", "2:2", "1:3"] ⇒ 4

**주의할점**

- 10개의 경기 점수를 입력합니다.
- 0점에서 최대 4점까지 입력합니다.
*/

export default function solution(games) {
  // 배열 내 각 요소에서 첫 번째 스코어 값을 기준으로 생각하고 풀었습니다.
  if (!Array.isArray(games)) return;
  if (games.length < 10) return;

  const myScoreList = games.map((score) => Number(score.slice(0, 1)));
  const someoneScoreList = games.map((score) => Number(score.slice(-1)));
  let score = 0;

  for (let i = 0; i < myScoreList.length; i++) {
    if (
      myScoreList[i] < 0 ||
      myScoreList[i] > 5 ||
      someoneScoreList[i] < 0 ||
      someoneScoreList[i] > 5
    )
      return;

    if (myScoreList[i] > someoneScoreList[i]) {
      score += 3;
    }

    if (myScoreList[i] === someoneScoreList[i]) {
      score += 1;
    }
  }

  return score;
}

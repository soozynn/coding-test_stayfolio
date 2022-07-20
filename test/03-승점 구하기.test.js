import { expect } from "chai";
import solution from "../lib/03-승점 구하기";

describe("03. 승점 구하기 테스트", () => {
  it("It should pass basic cases", () => {
    expect(
      solution([
        "3:1",
        "2:2",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
      ])
    ).to.equal(4);
  });

  it("열 개의 경기 점수를 입력하지 않은 경우", () => {
    expect(solution(["3:1", "2:2", "1:3"])).to.equal(undefined);
  });

  it("배열이 아닐 경우", () => {
    expect(solution(123)).to.equal(undefined);
  });

  it("0~4점의 수가 아닐 경우", () => {
    expect(
      solution([
        "5:1",
        "7:2",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
        "1:3",
      ])
    ).to.equal(undefined);
  });
});

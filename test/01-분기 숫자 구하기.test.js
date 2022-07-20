import { expect } from "chai";
import solution from "../lib/01-분기 숫자 구하기";

describe("01. 분기 숫자 구하기 테스트", () => {
  it("It should pass basic cases", () => {
    expect(solution(3)).to.equal(1);
    expect(solution(8)).to.equal(3);
    expect(solution(11)).to.equal(4);
  });

  it("1~12까지의 숫자가 아닐 경우", () => {
    expect(solution(13)).to.equal(undefined);
  });
});

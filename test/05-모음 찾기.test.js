import { expect } from "chai";
import solution from "../lib/05-모음 찾기";

describe("05. 모음 찾기 테스트", () => {
  it("It should pass basic cases", () => {
    expect(solution("abracadabra")).to.equal(5);
  });

  it("문자열이 아닐 경우", () => {
    expect(solution(123)).to.equal(undefined);
    expect(solution([])).to.equal(undefined);
    expect(solution({})).to.equal(undefined);
  });
});

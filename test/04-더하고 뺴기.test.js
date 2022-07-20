import { expect } from "chai";
import solution from "../lib/04-더하고 빼기";

describe("04. 더하고 빼기 테스트", () => {
  it("It should pass basic cases", () => {
    expect(solution(10)).to.equal("apple");
  });

  it("10~10000 사이의 숫자가 아닐 경우", () => {
    expect(solution(100001)).to.equal(undefined);
  });
});

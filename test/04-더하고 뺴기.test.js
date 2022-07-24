import { expect } from "chai";
import solution from "../lib/04-더하고 빼기";

describe("04. 더하고 빼기 테스트", () => {
  it("It should pass basic cases", () => {
    expect(solution(23)).to.equal("apple");
    expect(solution(10)).to.equal("apple");
  });
});

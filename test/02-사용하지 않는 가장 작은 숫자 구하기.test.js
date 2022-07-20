import { expect } from "chai";
import solution from "../lib/02-사용하지 않는 가장 작은 숫자 찾기";

describe("02. 사용하지 않는 가장 작은 숫자 찾기 테스트", () => {
  it("It should pass basic cases", () => {
    expect(solution([0, 1, 2, 4])).to.equal(3);
    expect(solution([0, 1, 2, 3, 4, 5, 6])).to.equal(7);
  });

  it("정렬되지 않은 배열일 경우", () => {
    expect(solution([4, 0, 1, 2])).to.equal(3);
    expect(solution([6, 1, 2, 3, 4, 5, 0])).to.equal(7);
  });

  it("중복된 숫자가 있는 경우", () => {});
});

import { describe, expect, test } from "@jest/globals";
import { clone, isEqual, sort } from "../../src";

describe("Utils Test", () => {
  test("Clone Operations", () => {
    expect(clone(5)).toBe(5);
    expect(clone("Copy cat")).toBe("Copy cat");
    expect(clone([43, 23, 78, -65, 12])).toStrictEqual([43, 23, 78, -65, 12]);
    expect(clone({ name: "Pikachu", type: "Electric" })).toStrictEqual({
      name: "Pikachu",
      type: "Electric",
    });
  });
  test("Sort", () => {
    const list = [20, 12, 10, 15, 2];
    const list2 = ["John", "Paul", "George", "Ringo"];
    sort(list);
    expect(list).toStrictEqual([2, 10, 12, 15, 20]);
    sort(list2);
    expect(list2).toStrictEqual(["George", "John", "Paul", "Ringo"]);
  });
  test("Compare", () => {
    expect(
      isEqual(
        [12, "String", true, { name: "Pikachu", type: "Electric" }],
        [12, "String", true, { type: "Electric", name: "Pikachu" }],
      ),
    ).toBe(true);
    expect(isEqual([12, 32], [43])).toBe(false);
    expect(isEqual([12, 32], [12, 43])).toBe(false);
    expect(isEqual([12, 32], [12, "String"])).toBe(false);
    expect(isEqual(23, 23)).toBe(true);
    expect(isEqual("Hiccups", "Hiccups")).toBe(true);
    expect(isEqual("Hiccups", 23)).toBe(false);
    expect(isEqual([12], [12, 34])).toBe(false);
    expect(
      isEqual(
        { type: "Electric", name: "Pikachu", isVisible: true, owner: ["Ash"] },
        {
          owner: ["Ash"],
          type: "Electric",
          name: "Pikachu",
          isVisible: true,
        },
      ),
    ).toBe(true);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual([1, 2, [3, 4]], [1, 2, [4, 3]])).toBe(false);
  });
});

const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle.isSquare", () => {
  it("rectangle is square or not", () => {
    assert.ok((5, 4), false);
    assert.ok((2, 2), true);
  });
});

describe("Rectangle.getArea", () => {
  it("getArea", () => {
    const rectA = new Rectangle(9, 4);
    assert.strictEqual(rectA.getArea(), 36);
  });
});

describe("Rectangle.getPerimeter", () => {
  it("getPerimeter", () => {
    const rectA = new Rectangle(10, 40);

    assert.strictEqual(rectA.getPerimeter(), 100);
  });
});

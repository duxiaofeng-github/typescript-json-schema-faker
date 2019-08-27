import { fake, asyncFake } from "../";
import { JsonSchema } from "../";

const objectArraySchema: JsonSchema = {
  type: "array",
  minItems: 1,
  items: {
    type: "object",
    required: ["a", "b", "c", "d"],
    properties: {
      a: {
        type: "boolean"
      },
      b: {
        type: "integer"
      },
      c: {
        type: "number"
      },
      d: {
        type: "string"
      }
    }
  }
};

const simpleValueArraySchema: JsonSchema = {
  type: "array",
  items: [
    {
      type: "boolean"
    },
    {
      type: "integer"
    },
    {
      type: "number"
    },
    {
      type: "string"
    }
  ]
};

const objectSchema: JsonSchema = {
  type: "object",
  required: ["a", "b", "c", "d"],
  properties: {
    a: {
      type: "boolean"
    },
    b: {
      type: "integer"
    },
    c: {
      type: "number"
    },
    d: {
      type: "string"
    }
  }
};

test("object array test", () => {
  const fakeArray = fake(objectArraySchema);

  expect(typeof fakeArray[0].a).toBe("boolean");
  expect(typeof fakeArray[0].b).toBe("number");
  expect(Number.isInteger(fakeArray[0].b)).toBe(true);
  expect(typeof fakeArray[0].c).toBe("number");
  expect(typeof fakeArray[0].d).toBe("string");
});

test("simple value array test", () => {
  const fakeArray = fake(simpleValueArraySchema);

  expect(typeof fakeArray[0]).toBe("boolean");
  expect(typeof fakeArray[1]).toBe("number");
  expect(Number.isInteger(fakeArray[1])).toBe(true);
  expect(typeof fakeArray[2]).toBe("number");
  expect(typeof fakeArray[3]).toBe("string");
});

test("async test", async () => {
  const fakeObj = await asyncFake(objectSchema);

  expect(typeof fakeObj.a).toBe("boolean");
  expect(typeof fakeObj.b).toBe("number");
  expect(Number.isInteger(fakeObj.b)).toBe(true);
  expect(typeof fakeObj.c).toBe("number");
  expect(typeof fakeObj.d).toBe("string");
});

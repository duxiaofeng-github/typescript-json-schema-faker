# typescript-json-schema-faker

[![Build Status](https://travis-ci.com/duxiaofeng-github/typescript-json-schema-faker.svg?branch=master)](https://travis-ci.com/duxiaofeng-github/typescript-json-schema-faker) [![npm version](https://badge.fury.io/js/typescript-json-schema-faker.svg)](//npmjs.com/package/typescript-json-schema-faker) [![HitCount](http://hits.dwyl.io/duxiaofeng-github/typescript-json-schema-faker.svg)](http://hits.dwyl.io/duxiaofeng-github/typescript-json-schema-faker)

A random data generator for typescript based on https://github.com/json-schema-faker/json-schema-faker

## Installation

```bash
npm install typescript-json-schema-faker -D
```

or

```bash
yarn add typescript-json-schema-faker -D
```

## Usage

```typescript
import fake, { JsonSchema } from "typescript-json-schema-faker";

const schema: JsonSchema = {
    id: "someSchemaId",
    type: "object",
    required: ["foo", "bar", "baz"],
    properties: {
        foo: {
            type: "string",
            chance: "guid",
        },
        bar: {
            type: "array",
            minItems: 1,
            maxItems: 10,
            items: {
                type: "number",
            },
        }
        baz: {
            $ref: "otherSchemaId",
        }
    },
};

console.log(fake(schema));
```

more usage: https://github.com/json-schema-faker/json-schema-faker#supported-keywords

## License

MIT

# typescript-json-schema-faker

A random data generator for typescript based on https://github.com/json-schema-faker/json-schema-faker

## Install

```
npm install typescript-json-schema-faker -D
```

or

```
yarn add typescript-json-schema-faker -D
```

## Usage

```
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

## License

MIT

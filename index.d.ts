/**
 * JSF basic schema extension
 */
interface IGeneratorSchema {
    faker?: any;
    'x-faker'?: any;
    chance?: any;
    'x-chance'?: any;
    casual?: any;
    'x-casual'?: any;
}

interface ICommonSchema {
    type?: ISchemaType;
}

interface IStringSchema extends IGeneratorSchema, ICommonSchema {
    format?: string;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
}

interface INumberSchema extends IGeneratorSchema, ICommonSchema {
    multipleOf?: number;
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: boolean;
    exclusiveMaximum?: boolean;
}

interface IArraySchema extends IGeneratorSchema, ICommonSchema {
    items?: IObjectSchema|IObjectSchema[];
    additionalItems?: boolean|IObjectSchema;
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
}

interface IPropertySchema {
    [property: string]: IObjectSchema|IArraySchema|INumberSchema|IStringSchema;
}

interface IPatternPropertiesSchema {
    [property: string]: {};
}

interface IObjectSchema extends IGeneratorSchema, ICommonSchema {
    properties?: IPropertySchema;
    patternProperties?: IPropertySchema; // RegExp should be the index of this structure (see "5.4.4.1. Valid values" in http://json-schema.org/latest/json-schema-validation.html), but RegExp-key-based maps are unsupported in TypeScript
    additionalProperties?: boolean;
    required?: string[];
    minProperties?: number;
    maxProperties?: number;
    enum?: any[];
}

type SchemaPath = string[];

type StackTrace = string[];

/**
 * This interface is used to check consistency between type generators (string, boolean, array, etc.)
 */
interface FTypeGenerator {
    (value?: IGeneratorSchema, path?: SchemaPath, resolve?: Function, traverseCallback?: Function): any;
}

interface IStringMap {
    [format: string]: string;
}

interface TypescriptJsonSchemaFakerStatic {
    (schema: JsonSchema, refs?: any)
}

/**
 * JSON Schema TypeScript interface.
 *
 * fetched from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/tv4/tv4.d.ts
 */
export interface JsonSchema extends IGeneratorSchema, ICommonSchema, IObjectSchema, IArraySchema, INumberSchema, IStringSchema {
    [key: string]: any;
    title?: string;
    description?: string;
    id?: string;
    $schema?: string;
    definitions?: any;
    default?: any;
}

export type ISchemaType = 'string' | 'integer' | 'number' | 'object' | 'array' | 'boolean';

export function fake(schema: JsonSchema, refs?: any): any;
export default fake;


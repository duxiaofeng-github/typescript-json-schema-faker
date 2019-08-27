/**
 * JSF basic schema extension
 */
interface IGeneratorSchema {
    faker?: any;
    "x-faker"?: any;
    chance?: any;
    "x-chance"?: any;
    casual?: any;
    "x-casual"?: any;
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
    items?: IObjectSchema | IObjectSchema[] | IReferenceSchema;
    additionalItems?: boolean | IObjectSchema;
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
}
interface IPropertySchema {
    [property: string]: IObjectSchema | IArraySchema | INumberSchema | IStringSchema | IReferenceSchema;
}
interface IObjectSchema extends IGeneratorSchema, ICommonSchema {
    properties?: IPropertySchema;
    patternProperties?: IPropertySchema;
    additionalProperties?: boolean;
    required?: string[];
    minProperties?: number;
    maxProperties?: number;
    enum?: any[];
}
interface IReferenceSchema {
    $ref?: string;
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
export declare type ISchemaType = "string" | "integer" | "number" | "object" | "array" | "boolean";
export declare function fake(schema: JsonSchema, refs?: JsonSchema[]): any;
export declare function asyncFake(schema: JsonSchema, refs?: JsonSchema[]): any;
declare const _default: {
    fake: typeof fake;
    asyncFake: typeof asyncFake;
};
export default _default;

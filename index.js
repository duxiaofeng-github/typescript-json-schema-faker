import jsf from 'json-schema-faker';

export function fake(schema, refs) {
    return jsf(schema, refs);
}

export default fake;
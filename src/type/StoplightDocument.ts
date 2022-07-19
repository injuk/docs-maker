export interface StoplightDocument {
    openapi?: string;
    info?: Info;
    servers?: Url[];
    paths?: Paths;
}

export interface Info {
    title?: string;
    version?: string;
    description?: string;
    license?: License;
}

export interface License {
    name?: string;
    url?: string;
}

export interface Url {
    url: string;
}

export interface Paths {
    [path: string]: PathTypes;
}

export interface PathTypes {
    get?: Path;
    post?: Path;
    put?: Path;
    patch?: Path;
    delete?: Path;
    head?: Path;
    options?: Path;
    trace?: Path;

    parameters?: Parameter[];
}

export interface Path {
    summary?: string;
    tags?: Tags;
    responses?: Responses;
    operationId?: string;
    description?: string;

    requestBody?: Model;
    parameters?: Parameter[];
}

export type Tags = string[];
export interface Responses {
    // [index: string]: Response;
    '200'?: Model;
    '201'?: Model;
    '202'?: Model;
}

export interface Model {
    description?: string;
    content?: Content;
}

export interface Content {
    [index: string]: ContentTypeMetadata;
}

export interface ContentTypeMetadata {
    schema?: Schema;
    examples?: Examples;
}

export interface Schema {
    $ref?: string;
    type?: string;

    // FIXME: 항상 object가 아닐 수도 있음!
    properties?: object;
}

export interface Examples {
    // FIXME: 정말 아무런 형식이나 다 올 수 있어야 함!
    [index: string]: object;
}

export type In = 'header' | 'path';
export interface Parameter {
    // TODO: 이렇게 자세한 설명은 필요 없으니 찾아서 모두 제거할 것.
    // schema?: ParameterSchema;
    in?: In;
    name?: string;
    required?: boolean;
    description?: string;
}
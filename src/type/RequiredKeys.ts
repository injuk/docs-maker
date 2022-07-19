export default interface RequiredKeys {
    info: Type;
    paths: object;
    servers: string;
    components: Components;
}

interface Type {
    title: string;
    version: string;
    description?: string;
}

interface Components {
    schemas?: object;
    responses?: object;
    requestBodies?: object;
}
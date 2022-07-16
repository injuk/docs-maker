import EnvironmentTypes from '../enum/EnvironmentTypes.ts';

const DOCS_MAKER_ENVIRONMENT = Deno.env.get('DOCS_MAKER_ENV') || EnvironmentTypes.DEV;

export function debug(message: any): void {
    if(DOCS_MAKER_ENVIRONMENT === EnvironmentTypes.DEV)
        console.log(message);
}

export function error(message: any): void {
    console.error(message);
}
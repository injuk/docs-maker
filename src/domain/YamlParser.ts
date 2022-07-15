import RequiredKeys from './RequiredKeys.ts';
import { parse } from 'https://deno.land/std@0.82.0/encoding/yaml.ts';

export default class FromYaml {

    public toJson(input: string): RequiredKeys {
        const parsed = parse(input);

        if(FromYaml.hasRequiredKeys(parsed)) {
            return parsed;
        }

        throw new Error('invalid input: file must be RequiredKeys type');
    }

    private static hasRequiredKeys(input: any): input is RequiredKeys {
        return input && input.info
            && input.paths
            && input.servers
            && input.components
    }
}
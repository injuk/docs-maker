import FromYaml from './domain/YamlParser.ts';
import { debug, error } from './common/logger.ts';

(async function main() {
    const file = await Deno.readTextFile('../resources/data/input.yml');
    // const file = await Deno.readTextFile('../resources/data/invalid-input.yml');

    try {
        const fromYaml = new FromYaml();
        const parsed = fromYaml.toJson(file);
        debug(parsed.info);
        debug(parsed.paths);
        debug(parsed.servers);
        debug(parsed.components);
    } catch (e) {
        error(e);
        error('error occurred!!!');
    }
})();


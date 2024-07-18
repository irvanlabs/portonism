// for AdonisJS v6
import path from "node:path";
import url from "node:url";
// ---
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../');

console.log(projectRoot);
export default {
  path: projectRoot+'/', // for AdonisJS v6
  title: "Foo", // use info instead
  version: "1.0.0", // use info instead
  description: "", // use info instead
  tagIndex: 2,
  info: {
    title: "title",
    version: "1.0.0",
    description: "",
  },
  snakeCase: true,

  debug: false, // set to true, to get some useful debug output
  ignore: ["/swagger", "/docs"],
  preferredPutPatch: "PUT", // if PUT/PATCH are provided for the same route, prefer PUT
  common: {
    parameters: {}, // OpenAPI conform parameters that are commonly used
    headers: {}, // OpenAPI conform headers that are commonly used
  },
  persistAuthorization: true, // persist authorization between reloads on the swagger page
  showFullPath: false, // the path displayed after endpoint summary
};
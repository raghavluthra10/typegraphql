"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { createYoga } from "graphql-yoga";
const node_1 = require("@graphql-yoga/node");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const ProjectResolver_1 = require("./resolvers/ProjectResolver");
const TaskResolver_1 = require("./resolvers/TaskResolver");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield (0, type_graphql_1.buildSchema)({
            resolvers: [ProjectResolver_1.default, TaskResolver_1.default],
            emitSchemaFile: true,
        });
        const server = (0, node_1.createServer)({
            schema,
        });
        server.start();
    });
}
bootstrap();
//# sourceMappingURL=index.js.map
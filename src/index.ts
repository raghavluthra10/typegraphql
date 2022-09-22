// import { createYoga } from "graphql-yoga";
import { createServer } from "@graphql-yoga/node";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";

async function bootstrap() {
   const schema = await buildSchema({
      resolvers: [ProjectResolver, TaskResolver],
      emitSchemaFile: true,
   });

   const server = createServer({
      schema,
   });

   server.start();
}

bootstrap();

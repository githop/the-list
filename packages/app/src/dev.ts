import { serve } from "@hono/node-server";
import app from "./app";
import { Environment } from "@the-list/env";

const port = 3000;
console.log(`Server is running on port ${port}`);
console.log(Environment, "ok");
serve({
  fetch: app.fetch,
  port,
});

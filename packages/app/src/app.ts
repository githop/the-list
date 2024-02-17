import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("we're so back"));

export default app;

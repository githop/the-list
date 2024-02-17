import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("delete me now lol"));

export default app;

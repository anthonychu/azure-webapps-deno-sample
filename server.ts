import { Application, Context } from "https://deno.land/x/oak@v6.0.1/mod.ts";

const app = new Application();

app.use((ctx: any) => {
  ctx.response.body = `Hello from Deno ${Deno.version.deno} on Azure!!! ☁️🦕🎉`;
  console.log(`request received: ${ctx.request.url}`);
});

const port = Deno.env.get("PORT") || "8080";
console.log(`Starting server at port: ${port}`);
await app.listen({ port: +port });

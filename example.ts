import {route, createServer, GET, POST} from "https://deno.land/x/pipes/mod.ts"

const routes = route(
    GET('/index', (_req: Request) => {
        // Do something
        return new Response('Hey!')
    }),
    POST('/add', (_req: Request) => {
        // Do something else
        return new Response('Thanks!')
    })
)

const serve = createServer(routes)

serve({port: 8080}) // Now listening on port 8080
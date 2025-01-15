import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DgK-DJo7.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/addprofiles.astro.mjs');
const _page2 = () => import('./pages/api/auth/posts.astro.mjs');
const _page3 = () => import('./pages/api/auth/register.astro.mjs');
const _page4 = () => import('./pages/api/auth/signin.astro.mjs');
const _page5 = () => import('./pages/api/auth/signout.astro.mjs');
const _page6 = () => import('./pages/dashboard.astro.mjs');
const _page7 = () => import('./pages/register.astro.mjs');
const _page8 = () => import('./pages/signin.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/addprofiles.ts", _page1],
    ["src/pages/api/auth/posts.ts", _page2],
    ["src/pages/api/auth/register.ts", _page3],
    ["src/pages/api/auth/signin.ts", _page4],
    ["src/pages/api/auth/signout.ts", _page5],
    ["src/pages/dashboard.astro", _page6],
    ["src/pages/register.astro", _page7],
    ["src/pages/signin.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "d817338f-08a7-423a-bd47-09ae3b59818b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

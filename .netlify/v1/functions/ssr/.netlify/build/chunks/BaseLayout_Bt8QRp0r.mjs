import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, g as addAttribute, j as renderHead, k as renderSlot, h as createAstro } from './astro/server_GFAYs3wi.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav"> <a href="/">Home</a> <a href="/register">Register</a> <a href="/signin">Sign In</a> <a href="/dashboard">Dashboard</a> </div>`;
}, "/Users/macbook/2assignment/src/components/nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <a href="/"><img src="/logo.png"></a> <nav> ${renderComponent($$result, "Navigation", $$Nav, {})} </nav> </header>`;
}, "/Users/macbook/2assignment/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <p>This web page was developed by Arina Vidman (3153879)</p> <div class="footerbox"> <p>You can find me here:</p> <ul> <li><a href="https://www.instagram.com/arisha.vidman/"><img src="Instagram.webp"></a></li> <li><a href="https://www.behance.net/arinavidm"><img src="Behance.png"></a></li> <li><a href="https://www.linkedin.com/in/arina-vidman-820a20329/"><img src="LinkedIn.webp"></a></li> </ul> </div> </footer>`;
}, "/Users/macbook/2assignment/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>YourNest</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/macbook/2assignment/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };

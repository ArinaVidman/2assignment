import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_GFAYs3wi.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bt8QRp0r.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Register" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p>  <form action="/api/auth/register" method="post" class="registerform"> <!-- Email Input --> <div class="emailform"> <label for="email">Email:</label> <input type="email" name="email" id="email"> </div> <div class="nameform"> <label for="name">Name:</label> <input type="text" name="userName" id="userName" required> </div> <!-- Password Input --> <div class="passform"> <label for="password">Password:</label> <input type="password" name="password" id="password"> </div> <!-- Submit Button --> <button type="submit" class="registerbutton">Register</button> </form> ` })}`;
}, "/Users/macbook/2assignment/src/pages/register.astro", void 0);

const $$file = "/Users/macbook/2assignment/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

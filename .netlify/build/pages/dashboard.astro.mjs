import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_GFAYs3wi.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bt8QRp0r.mjs';
/* empty css                                     */
import { s as supabase } from '../chunks/supabase_Bd7mqFHN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  const posts = await supabase.from("v_posts").select("content, title, author_email, updated_at");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/signin");
  }
  const email = session.data.user?.email;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h1>Hello, ${email}!</h1> <img src="/welcome.svg" alt="Welcome"> <p>We're glad to see you today</p> <p>Explore Stories by Our Community and create your own:</p> <h2>Latest Posts</h2> ${posts.data?.map(({ title, content, author_email, updated_at }) => renderTemplate`<article> <p>Title and Author: ${title} ${author_email}</p> <p>${content}</p> <p>Posted: ${updated_at}</p> </article>`)}<form action="/api/auth/posts" method="post"> <label for="postTitle">Title:</label> <input type="text" name="postTitle" id="postTitle" placeholder="Type title here"> <label for="postContext">Tell your story:</label> <input type="text" name="postContext" id="postContext" placeholder="Type your story here"> <button id="post" type="submit" class="buttonpost">Post</button> </form>  <form action="/api/auth/signout"> <button type="submit" class="out">Sign Me Out</button> </form> ` })}`;
}, "/Users/macbook/2assignment/src/pages/dashboard.astro", void 0);

const $$file = "/Users/macbook/2assignment/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { s as supabase } from '../../../chunks/supabase_Bd7mqFHN.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const textPost = formData.get("postContext")?.toString();
  const titlePost = formData.get("postTitle")?.toString();
  console.log("textPost -> " + textPost);
  console.log("titlePost -> " + titlePost);
  const { data, error } = await supabase.from("posts").insert([
    { title: titlePost, content: textPost }
  ]).select();
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

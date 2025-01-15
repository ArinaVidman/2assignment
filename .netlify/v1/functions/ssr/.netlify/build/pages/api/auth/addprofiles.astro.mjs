import { s as supabase } from '../../../chunks/supabase_Bd7mqFHN.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const userName = formData.get("name")?.toString();
  if (!userName || !email || !password) {
    return new Response("Name, email and password are required", { status: 400 });
  }
  await supabase.from("Profiles").insert([
    { name: userName, additional_info: "someInfo" }
  ]).select();
  return redirect("/signin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

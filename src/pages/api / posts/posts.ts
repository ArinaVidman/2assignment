export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const textPost = formData.get("name")?.toString();

};


let { data: posts, error } = await supabase
  .from('posts')
  .select('*')
          
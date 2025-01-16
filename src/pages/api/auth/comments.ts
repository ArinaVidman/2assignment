 // Configuration Note: 
// This component is designed for static sites, but the `prerender` export is set to `false`
// which disables static prerendering for this API route.
export const prerender = false;



import type { APIRoute } from "astro"; // Importing Astro's APIRoute type.
import { supabase } from "../../../lib/supabase"; // Importing the Supabase client.


  
// Define the POST handler for this API route.
export const POST: APIRoute = async ({ request, redirect }) => {
  
  // Parse form data from the incoming POST request.
  const formData = await request.formData();
    const textComment = formData.get("commentContext")?.toString();
   
  
    console.log("commentContext -> "+ textComment);

const { data, error } = await supabase
.from('comments')
.insert([
  { content: textComment },
])
.select()

  // Handle errors during sign-up.
  if (error) {
    return new Response(error.message, { status: 500 }); // Respond with a 500 error if sign-up fails.
  }


  // Redirect the user to the "/signin" page upon successful sign-up.
  return redirect("/signin");
};
        
        

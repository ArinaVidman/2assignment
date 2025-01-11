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
  const email = formData.get("email")?.toString(); // Retrieve the 'email' field.
  const password = formData.get("password")?.toString(); // Retrieve the 'password' field.
  const userName = formData.get("name")?.toString(); 



  // Validate inputs: Ensure email and password are provided.
  if (!userName || !email || !password) {
    return new Response("Name, email and password are required", { status: 400 }); // Respond with a 400 error if missing.
  }


  const { data, error } = await supabase
  .from('Profiles')
  .insert([
    { name: userName, additional_info: 'someInfo' },
  ])
  .select()

  
  // Redirect the user to the "/signin" page upon successful sign-up.
  return redirect("/signin");
};
import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";
dotenv.config();

export const supabase = createClient(
  process.env.supabase_project,
  process.env.supabase_key
);

console.log("supabase");
// const supabaseClient = createClient(supabaseUrl, supabaseKey);
 
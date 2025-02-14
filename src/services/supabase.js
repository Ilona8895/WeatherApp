import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zdeqxhvsqmmsnvqjgymr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZXF4aHZzcW1tc252cWpneW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MDYzMDYsImV4cCI6MjA0OTQ4MjMwNn0.Q6pNBBCdYAVeYp0LmsJkCjQLh5x_Kflo8uKZukkjpZ0";
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from 'react'
import { getUser } from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'; // For redirecting users

export default async function DashboardPage() {
  const supabase = createClient();
  // const user = await Promise.resolve(getUser(supabase));
  const {data: user} = await supabase.from("user").select("*").single();

  // if (!user) {
  //   redirect('/login'); // Redirect to login page
  //   return
  // }\
  if (user?.role != "admin") {
    redirect("/");
  }
  
  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  )
}

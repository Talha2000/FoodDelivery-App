import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "./server";
import { cache } from "react";

// Retreive current user
export const getUser = cache(async (supabase: SupabaseClient) => {
    // const supabase = createClient();
    const {data: { user } } = await supabase.auth.getUser();

    return user;
});
import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";

export function authQO() {
  return queryOptions({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        return null;
      }

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("authQO: ", error);
        throw error;
      }

      return user;
    },
    retry: 1,
  });
}

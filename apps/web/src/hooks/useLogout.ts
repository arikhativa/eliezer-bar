import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";

export function useLogout() {
  const queryClient = useQueryClient();

  return async () => {
    await supabase.auth.signOut();
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };
}

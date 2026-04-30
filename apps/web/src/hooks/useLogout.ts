import { supabase } from "@/lib/supabase/client"
import { useQueryClient } from "@tanstack/react-query"

export function useLogout() {
  const queryClient = useQueryClient()

  return async () => {
    await supabase.auth.signOut()
    queryClient.invalidateQueries({ queryKey: ["user"] })
  }
}

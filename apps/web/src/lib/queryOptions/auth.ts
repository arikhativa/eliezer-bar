import { supabase } from "@/lib/supabase/client"
import { queryOptions } from "@tanstack/react-query"

export function authQO() {
  return queryOptions({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        return null
      }

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error) {
        console.error("authQO: ", error)
        throw error
      }

      return user
    },
    retry: 1,
  })
}

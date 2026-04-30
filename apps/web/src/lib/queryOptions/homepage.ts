import { supabase } from "@/lib/supabase/client"
import { queryOptions } from "@tanstack/react-query"
import { z } from "zod"

export const HOMEPAGE_KEY = "homepage"

const homepageSchema = z.object({
  id: z.number(),
  memberCount: z.number(),
})

export type HomepageSchema = z.infer<typeof homepageSchema>

export function homepageQO() {
  return queryOptions({
    queryKey: [HOMEPAGE_KEY],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("homepage")
        .select("*")
        .single()

      if (error) throw error

      return homepageSchema.parse(data)
    },
    retry: 1,
  })
}

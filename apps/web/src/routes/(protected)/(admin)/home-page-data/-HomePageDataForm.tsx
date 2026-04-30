import { useForm } from "@tanstack/react-form"
import { z } from "zod"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@workspace/ui/components/field"
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/client"
import { HOMEPAGE_KEY, homepageQO } from "@/lib/queryOptions/homepage"

const formSchema = z.object({
  memberCount: z
    .number()
    .min(0, "Member count cannot be negative")
    .max(1000, "Member count too large"),
})

type FormSchema = z.infer<typeof formSchema>

export function HomePageDataForm() {
  const queryClient = useQueryClient()
  const { data } = useSuspenseQuery(homepageQO())

  const mutation = useMutation({
    mutationFn: async (values: FormSchema) => {
      const tmp = await supabase
        .from("homepage")
        .update({ memberCount: values.memberCount })
        .eq("id", 1)

      console.log("values", values)
      console.log("tmp", tmp)
      if (tmp.error) throw tmp.error
      return values
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEY] })
      toast.success("Member count updated")
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const form = useForm({
    defaultValues: {
      memberCount: data.memberCount,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      mutation.mutate(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="space-y-6"
    >
      <form.Field
        name="memberCount"
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor="memberCount">Member Count</FieldLabel>
              <Input
                id="memberCount"
                name={field.name}
                type="number"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                aria-invalid={isInvalid}
                placeholder="0"
              />
              <FieldDescription>Enter total number of members</FieldDescription>
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          )
        }}
      />
      <Button type="submit">Save</Button>
    </form>
  )
}

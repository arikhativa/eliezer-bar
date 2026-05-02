import { useForm } from "@tanstack/react-form"
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { toast } from "sonner"
import { z } from "zod"
import { HOMEPAGE_KEY, homepageQO } from "@/lib/queryOptions/homepage"
import { DATA_FORM_STRING } from "@/lib/strings/dataForm"
import { GENERAL_STRINGS } from "@/lib/strings/general"
import { supabase } from "@/lib/supabase/client"

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
      await supabase
        .from("homepage")
        .update({ memberCount: values.memberCount })
        .eq("id", 1)

      return values
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEY] })
      toast.success(DATA_FORM_STRING.toast)
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
    onSubmit: async ({ value }) => mutation.mutate(value),
  })

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.Field name="memberCount">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>
                {DATA_FORM_STRING[field.name]}
              </FieldLabel>
              <Input
                aria-invalid={isInvalid}
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                placeholder="0"
                type="number"
                value={field.state.value}
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          )
        }}
      </form.Field>
      <Button type="submit">{GENERAL_STRINGS.save}</Button>
    </form>
  )
}

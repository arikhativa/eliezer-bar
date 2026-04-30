import { useForm } from "@tanstack/react-form";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Button } from "@workspace/ui/components/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";
import { toast } from "sonner";
import { z } from "zod";
import { HOMEPAGE_KEY, homepageQO } from "@/lib/queryOptions/homepage";
import { supabase } from "@/lib/supabase/client";

const formSchema = z.object({
  memberCount: z
    .number()
    .min(0, "Member count cannot be negative")
    .max(1000, "Member count too large"),
});

type FormSchema = z.infer<typeof formSchema>;

export function HomePageDataForm() {
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(homepageQO());

  const mutation = useMutation({
    mutationFn: async (values: FormSchema) => {
      const tmp = await supabase
        .from("homepage")
        .update({ memberCount: values.memberCount })
        .eq("id", 1);

      if (tmp.error) {
        throw tmp.error;
      }
      return values;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEY] });
      toast.success("Member count updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const form = useForm({
    defaultValues: {
      memberCount: data.memberCount,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => mutation.mutate(value),
  });

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name="memberCount">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor="memberCount">Member Count</FieldLabel>
              <Input
                aria-invalid={isInvalid}
                id="memberCount"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                placeholder="0"
                type="number"
                value={field.state.value}
              />
              <FieldDescription>Enter total number of members</FieldDescription>
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      </form.Field>
      <Button type="submit">Save</Button>
    </form>
  );
}

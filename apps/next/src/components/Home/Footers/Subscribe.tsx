import { useRouter } from "next/navigation";
import CButton from "@/components/UI/Button";
import { api } from "@/libs/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { DialogFooter, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@wordigo/ui";

const CreateDictionarySchema = z.object({
  email: z.string().nonempty(),
});

type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>;

export default function Subscribe() {
  const router = useRouter();
  const { mutate: addDictionary, isLoading } = api.dictionary.addDictionary.useMutation();
  const defaultValues: Partial<CreateDictionaryValues> = {
    email: "",
  };

  const form = useForm<CreateDictionaryValues>({
    resolver: zodResolver(CreateDictionarySchema),
    defaultValues,
  });

  const handleEmail = (values: CreateDictionaryValues) => {
    // email: values.email, router.refresh();
    console.log(values.email + "HuHu!");
  };

  return (
    <footer>
      <div className="relative mx-auto max-w-screen-8xl md:px-12 px-8 pb-24">
        <div className="dark:border-white/5 border-black/30 border-t lg:flex lg:items-center lg:justify-between pt-12">
          <div>
            <h3 className="dark:text-white text-light_text">Subscribe to Wordigo news</h3>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleEmail)} className="space-y-4">
              <div className="gap-4 py-4 flex">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-[220px]">
                      <FormControl>
                        <Input
                          {...field}
                          id="email"
                          placeholder="Enter your email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          className="
                          outline-none 
                          focus-visible:outline-none 
                          focus-visible:ring-0 
                          focus-visible:ring-ring 
                          focus-visible:ring-offset-0
                          border-4-[#21202C]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <CButton loading={isLoading} type="submit">
                    Subscribe
                  </CButton>
                </DialogFooter>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </footer>
  );
}

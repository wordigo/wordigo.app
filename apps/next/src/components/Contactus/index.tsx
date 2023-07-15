import { useRouter } from "next/navigation";
import CButton from "@/components/UI/Button";
import { api } from "@/libs/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { DialogFooter, Form, FormControl, FormField, FormItem, Input, Label, Textarea } from "@wordigo/ui";

const CreateContact = z.object({
  email: z.string().nonempty(),
  name: z.string().nonempty(),
  message: z.string().nonempty(),
});

type CreateContactValues = z.infer<typeof CreateContact>;

export default function index() {
  const { mutate: addContact, isLoading } = api.dictionary.addDictionary.useMutation();
  const router = useRouter();

  const defaultValues: Partial<CreateContactValues> = {
    email: "",
    name: "",
    message: "",
  };

  const form = useForm<CreateContactValues>({
    resolver: zodResolver(CreateContact),
    defaultValues,
  });

  const handleSendContact = (values: any) => {
    console.log(values, "Aynen");

    router.refresh();
  };
  return (
    <div className="flex items-center justify-between max-w-[1380px] m-auto py-2 flex-col">
      <h1 className="text-3xl font-bold tracking-tight py-2 opacity-80 m-auto">Contactus</h1>
      <div className="m-auto rounded-lg w-fit">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSendContact)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid gap-1 w-[380px]">
                    <Label>Your Name</Label>
                    <FormControl>
                      <Input {...field} id="email" placeholder="Enter your name" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-1 w-[380px]">
                    <Label>Your Email</Label>
                    <FormControl>
                      <Input {...field} id="text" placeholder="Enter your e-mail" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="grid gap-1 w-[380px]">
                    <Label>Your Message</Label>
                    <FormControl>
                      <Textarea
                        {...field}
                        id="text"
                        placeholder="Write us your message and tell us how we can help you?"
                        autoCapitalize="none"
                        autoComplete="message"
                        autoCorrect="off"
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>

              <DialogFooter>
                <CButton loading={isLoading} type="submit">
                  Send Message
                </CButton>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

import { useRouter } from "next/navigation";
import CButton from "@/components/UI/Button";
import { useCreateDictionaryMutation } from "@/store/dictionary/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table2Icon } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";



import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Switch } from "@wordigo/ui";





const CreateDictionarySchema = z.object({
  title: z.string().nonempty(),
});

type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>;

export function CreateDictionary({ label }: { label: string }) {
  const { t } = useTranslation();
  const router = useRouter();

  const defaultValues: Partial<CreateDictionaryValues> = {
    title: "",
  };

  const form = useForm<CreateDictionaryValues>({
    resolver: zodResolver(CreateDictionarySchema),
    defaultValues,
  });

  const [addDictionary, { status, isLoading, error }] = useCreateDictionaryMutation();

  const handleAddDictionary = (values: CreateDictionaryValues) => {
    void addDictionary({
      title: values.title,
    });

    if (status) {
      router.refresh();
    } else if (error) {
      console.log("error", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="px-4 py-[10px] font-semibold text-sm">
          {t(label)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <Table2Icon size={18} />
            Add Dictionary
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddDictionary)} className="space-y-4">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormControl>
                      <Input {...field} id="title" placeholder="Title" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <CButton loading={isLoading} type="submit">
                  Save Dictionary
                </CButton>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
import { useRouter } from "next/navigation";
import CButton from "@/components/UI/Button";
import { api } from "@/libs/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { type Row } from "react-table";
import { z } from "zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Switch,
} from "@wordigo/ui";

const CreateDictionarySchema = z.object({
  title: z.string().nonempty(),
  published: z.boolean(),
});

interface DataTableRowActionsProps<TData extends object> {
  row: Row<TData & { id: string }>;
  original: { id: string; title: string; published: boolean };
}

type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>;

export function EditDictionary<TData extends object>({ label, row }: { label: string; row: DataTableRowActionsProps<TData> }) {
  const data: { id: string; title: string; published: boolean } = row?.original;
  console.log(data);
  const { mutate: editDictionary, isLoading } = api.dictionary.updateDictionary.useMutation();
  const router = useRouter();

  const defaultValues: Partial<CreateDictionaryValues> = {
    title: data.title,
    published: data.published,
  };

  const form = useForm<CreateDictionaryValues>({
    resolver: zodResolver(CreateDictionarySchema),
    defaultValues,
  });

  const handleAddDictionary = (values: CreateDictionaryValues) => {
    editDictionary({
      title: values.title,
      published: values.published,
      dictionaryId: data.id,
    });
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <FilePlus size={18} />
            Edit Dictionary
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
              <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Publish status</FormLabel>
                      <FormDescription className="text-xs">
                        It is the feature that allows you to share your dictionary publicly. It is only valid for the dictionary you have activated
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
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

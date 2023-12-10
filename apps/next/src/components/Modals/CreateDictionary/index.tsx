import CButton from "@/components/UI/Button";
import {
  useCreateDictionaryMutation,
  useGetDictionariesMutation,
} from "@/store/dictionaries/api";
import { zodResolver } from "@hookform/resolvers/zod";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { QueryStatus } from "@reduxjs/toolkit/query";
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
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@wordigo/ui";
import { BookPlusIcon, PlusIcon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const CreateDictionarySchema = z.object({
  title: z.string().nonempty(),
});

type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>;

export default function CreateDictionary() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const [getDictionaries] = useGetDictionariesMutation();

  const defaultValues: Partial<CreateDictionaryValues> = {
    title: "",
  };

  const form = useForm<CreateDictionaryValues>({
    resolver: zodResolver(CreateDictionarySchema),
    defaultValues,
  });

  const [addDictionary, { status, isLoading, data }] =
    useCreateDictionaryMutation();

  const handleAddDictionary = (values: CreateDictionaryValues) => {
    void addDictionary({
      title: values.title,
    });
  };

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      if (data.success) {
        void getDictionaries({});
        setOpen(false);
        form.reset();
        toast.success(t("notifications.success"), {
          description: t("notifications.created_dictionary"),
        });
      } else {
        toast.error(t("notifications.warning"), {
          description: data.message,
        });
      }
    }
  }, [status]);

  const toggleShow = () => setOpen(!open);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={toggleShow}
          variant="default"
          size="sm"
          className="font-normal text-sm"
        >
          <PlusIcon size={16} className="text-primary-foreground" />
          {t("dictionaries.add_dictionaries")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <BookPlusIcon size={18} />
            {t("dictionaries.add_dictionaries")}
          </DialogTitle>
          <DialogPrimitive.Close asChild>
            <button
              onClick={toggleShow}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogPrimitive.Close>
        </DialogHeader>

        <Form {...(form as any)}>
          <form
            onSubmit={form.handleSubmit(handleAddDictionary)}
            className="space-y-4"
          >
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control as never}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormControl>
                      <Input
                        {...field}
                        id="title"
                        placeholder="Title"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <CButton loading={isLoading} size="sm" type="submit">
                  {t("general.add")}
                </CButton>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

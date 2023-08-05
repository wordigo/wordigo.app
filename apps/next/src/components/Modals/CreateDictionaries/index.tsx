import { useEffect, useState } from "react";
import CButton from "@/components/UI/Button";
import { useCreateDictionaryMutation, useGetUserDictionariesMutation } from "@/store/dictionaries/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table2Icon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
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
  FormField,
  FormItem,
  FormMessage,
  Input,
  useToast,
} from "@wordigo/ui";

const CreateDictionarySchema = z.object({
  title: z.string().nonempty(),
});

type CreateDictionaryValues = z.infer<typeof CreateDictionarySchema>;

export function CreateDictionary({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  const [getUserDictionaries] = useGetUserDictionariesMutation();

  const defaultValues: Partial<CreateDictionaryValues> = {
    title: "",
  };

  const form = useForm<CreateDictionaryValues>({
    resolver: zodResolver(CreateDictionarySchema),
    defaultValues,
  });

  const [addDictionary, { status, isLoading, data }] = useCreateDictionaryMutation();

  const handleAddDictionary = (values: CreateDictionaryValues) => {
    void addDictionary({
      title: values.title,
    });
  };

  useEffect(() => {
    if (status === "fulfilled") {
      if (data.success) {
        void getUserDictionaries("");
        setOpen(false);
        form.reset();
        toast({
          variant: "success",
          title: "Successfull",
          description: data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Warning",
          description: data.message,
        });
      }
    }
  }, [status]);

  const toggleShow = () => setOpen(!open);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={toggleShow} variant="default" className="px-4 py-[10px] font-semibold text-sm">
          {t(label)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <Table2Icon size={18} />
            Add Dictionary
          </DialogTitle>
          <button
            onClick={toggleShow}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <Form {...(form as any)}>
          <form onSubmit={form.handleSubmit(handleAddDictionary)} className="space-y-4">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control as never}
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

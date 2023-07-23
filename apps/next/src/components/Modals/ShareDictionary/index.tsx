import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CButton from "@/components/UI/Button";
import { api } from "@/libs/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";



import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Label, Switch, Textarea } from "@wordigo/ui";





const ShareDictionarySchema = z.object({
  title: z.string().max(80, { message: "Title must be at most 80 characters" }),
  description: z.string().max(150, { message: "Description must be at most 150 characters" }),
  image: z.string().nonempty(),
  published: z.boolean(),
});

type CreateDictionaryValues = z.infer<typeof ShareDictionarySchema>;

export function ShareDictionary({ label }: { label: string }) {
  const { mutate: addDictionary, isLoading } = api.dictionary.addDictionary.useMutation();
  const [selectedImage, setSelectedImage] = useState('/images/dictionary_banner.jpg');

  const router = useRouter();

  const defaultValues: Partial<CreateDictionaryValues> = {
    title: "",
    image: "",
    description: "",
  };

  const form = useForm<CreateDictionaryValues>({
    resolver: zodResolver(ShareDictionarySchema),
    defaultValues,
    mode: "onChange",
  });

  const handleAddDictionary = (values: CreateDictionaryValues) => {
    addDictionary({
      title: values.title,
      //description: values.description,
      //image: values.image,
      published: values.published,
    });
    router.refresh();
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
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
            Add Dictionary
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddDictionary)} className="space-y-4">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label className="flex items-center gap-2">
                      Picture <p className="text-xs">(Perf. 380px x 140px)</p>
                    </Label>
                    <FormControl>
                      <div className="relative w-fit h-fit">
                        <Input
                          {...field}
                          id="image"
                          type="file"
                          placeholder="Image"
                          autoCapitalize="none"
                          autoComplete="image"
                          autoCorrect="off"
                          onChange={handleImageChange}
                          className="absolute bottom-4 w-[213px] left-[22%] dark:bg-[#020817ce] bg-[#ffffffa9]"
                        />

                        {selectedImage ? (
                          <Image
                            width={300}
                            className="flex justify-center items-center w-[380px] h-[180px] rounded-lg border border-input overflow-hidden"
                            height={180}
                            src={selectedImage}
                            alt="Selected"
                          />
                        ) : (
                          <div className="min-w-[380px] min-h-[180px] max-h-fit max-w-fit rounded-lg border border-input"></div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label>Title</Label>
                    <FormControl>
                      <Input {...field} id="title" placeholder="Title" autoCapitalize="none" autoComplete="title" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label>Description</Label>
                    <FormControl>
                      <Textarea
                        {...field}
                        id="description"
                        placeholder="Description"
                        autoCapitalize="none"
                        autoComplete="description"
                        autoCorrect="off"
                        className="min-h-[100px] max-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <CButton loading={isLoading} type="submit" disabled>
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
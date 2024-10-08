import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword"];

const FormSchema = z.object({
  activity: z.string({
    required_error: "Selecione a atividade a entregar",
  }),
  file: z
    .any()
    .refine((file) => file, { message: "Um documento é necessário." })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), {
      message: "Somente PDF ou DOC são permitidos.",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `Tamanho máximo do arquivo é de 5MB.`,
    }),
});

const SendForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [fileName, setFileName] = useState("Selecione um arquivo");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const file = data.file as File;

    const reader = new FileReader();
    reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer

    reader.onload = () => {
      // Once the file is read, convert it to a Uint8Array
      const arrayBuffer = reader.result as ArrayBuffer;
      const byteArray = new Uint8Array(arrayBuffer);

      // Assign the byteArray to data.file
      data.file = byteArray;

      // Set loading state and log the data
      setIsLoading(true);
      console.log(data.file.toString());
    };

    reader.onerror = () => {
      console.error("Error reading file");
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/3 space-y-6">
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Atividade:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Atividade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="dark:bg-zinc-900">
                  <SelectItem value="1">Atividade 1</SelectItem>
                  <SelectItem value="2">Atividade 2</SelectItem>
                  <SelectItem value="3">Atividade 3</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Escolha a atividade a ser entregue
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Arquivo:</FormLabel>
              <div
                className="h-[15rem] w-full flex flex-col 
                cursor-pointer align-middle gap-2 justify-center
                border-2 border-zinc-400 border-dashed 
                bg-zinc-300/70 dark:bg-zinc-950/70
                p-2 rounded-lg"
              >
                <label htmlFor="file" className="custum-file-upload">
                  <div className="flex align-middle my-auto gap-5 
                  justify-center h-[80px] fill-zinc-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          fill=""
                        />{" "}
                      </g>
                    </svg>
                    <span className="my-auto text-zinc-500 overflow-hidden text-ellipsis w-[50%]">{fileName}</span>
                  </div>
                  <Input
                    id="file"
                    type="file"
                    accept={ACCEPTED_FILE_TYPES.join(", ")}
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setFileName(file?.name || "Clique para selecionar um arquivo");
                      field.onChange(file);
                    }}
                    className="hidden"
                  />
                </label>
              </div>
              <FormDescription>
                O arquivo deve ser do tipo PDF ou DOC e ter no máximo 10MB
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <Button
            id="login-button"
            className="w-full bg-primary text-primary-foreground hover:bg-zinc-50 hover:text-primary"
            disabled
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </Button>
        ) : (
          <Button
            id="login-button"
            className="w-full bg-primary text-primary-foreground hover:bg-zinc-50 hover:text-primary"
          >
            Enviar
          </Button>
        )}
      </form>
    </Form>
  );
};

export default SendForm;
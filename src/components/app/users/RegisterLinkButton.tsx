import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PlusCircle } from "lucide-react";

const registerSchema = z.object({
  sector: z
    .string({
      message: "Selecione o setor",
    })
    .min(1, {
      message: "Selecione o setor",
    }),
  duration: z
    .string({
      message: "Digite um número válido",
    })
    .min(1, {
      message: "Digite a duração",
    })
    .transform((val) => Number(val)),
  time: z
    .string({
      message: "Selecione a unidade de tempo",
    })
    .min(1, {
      message: "Selecione a unidade de tempo",
    }),
});

const RegisterLinkButton = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      sector: "",
      duration: 0,
      time: "",
    },
  });

  // Implementar a função de gerar o link de cadastro
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <div className="flex flex-row gap-3 align-middle" title="Criar link de cadastro">
            <PlusCircle className="w-4 h-4 my-auto" />
            <span>Criar link de cadastro</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="dark:bg-zinc-950 max-w-[90%] lg:max-w-[50%] md:max-w-[70%] rounded-lg">
        <DialogHeader>
          <DialogTitle className="dark:text-zinc-50 text-2xl">
            Criar link de cadastro
          </DialogTitle>
          <DialogDescription>
            Crie o link de cadastro para seus usuários
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <hr className="border-zinc-500" />
              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel className="dark:text-zinc-50">
                      Qual o setor?
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value} // Atribuir o valor atual do campo
                        onValueChange={field.onChange} // Atualizar o valor do campo no formulário
                      >
                        <SelectTrigger className={`${field.value ? "dark:text-zinc-50" : ""} text-zinc-400`}>
                          <SelectValue placeholder="Selecione o setor" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-zinc-950 group hover:bg-primary">
                          <SelectItem value="colaborador">
                            Colaborador
                          </SelectItem>
                          <SelectItem value="professor">Professor</SelectItem>
                          <SelectItem value="admin">Gestor</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormDescription>
                      Selecione o setor que vai se cadastrar com o link
                    </FormDescription>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel className="dark:text-zinc-50">
                        Qual a duração do link?
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="dark:text-zinc-50"
                          placeholder="Duração"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        O tempo que ficará válido para cadastro
                      </FormDescription>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel className="dark:text-zinc-50">
                        Qual o tempo?
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value} // Atribuir o valor atual do campo
                          onValueChange={field.onChange} // Atualizar o valor do campo no formulário
                        >
                          <SelectTrigger className={`${field.value ? "dark:text-zinc-50" : ""} text-zinc-400`}>
                            <SelectValue placeholder="Horas/Dias/Semanas" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-zinc-950 group hover:bg-primary">
                            <SelectItem value="weeks">Semana</SelectItem>
                            <SelectItem value="days">Dias</SelectItem>
                            <SelectItem value="hours">Horas</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormDescription>
                        Selecione o tempo que o link ficará válido
                      </FormDescription>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <hr className="border-zinc-500" />
              <div className="flex flex-row justify-between group w-full">
                <Button className="dark:text-zinc-50" type="submit">
                  Confirmar
                </Button>
                <DialogClose asChild>
                  <Button
                    onClick={() => form.reset()}
                    variant="outline"
                    className="dark:text-zinc-500 dark:border-zinc-500"
                  >
                    Cancelar
                  </Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterLinkButton;

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useLocation } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import api from "@/axiosconfig";

const RegisterSchema = z.object({
  institution: z.object({
    name: z.string().min(3, {
      message: "O nome da instituição deve ter no mínimo 3 caracteres.",
    }),
    fantasia: z
      .string()
      .min(3, { message: "O nome fantasia deve ter no mínimo 3 caracteres." }),
    email: z
      .string()
      .email({ message: "O e-mail da instituição deve ser válido." }),
    cnpj: z
      .string()
      .length(14, { message: "O CNPJ deve ter exatamente 14 caracteres." })
      .refine((value) => /^\d+$/.test(value), {
        message: "O CNPJ deve conter apenas números.",
      }),
    stateRegistration: z.string().length(9, {
      message: "A inscrição estadual deve ter exatamente 9 caracteres.",
    }),
    phone: z
      .string()
      .length(11, { message: "O telefone deve ter exatamente 11 caracteres." })
      .refine((value) => /^\d+$/.test(value), {
        message: "O telefone deve conter apenas números.",
      }),
  }),
  user: z.object({
    nome: z
      .string()
      .min(3, {
        message: "O nome do usuário deve ter no mínimo 3 caracteres.",
      })
      .refine((value) => /^[a-zA-ZÀ-ÿ\s]+$/.test(value), {
        message: "O nome do usuário deve somente conter letras.",
      }),
    cpf: z
      .string()
      .length(11, { message: "O CPF deve ter exatamente 11 caracteres." })
      .refine((value) => /^\d+$/.test(value), {
        message: "O CPF deve conter apenas números.",
      })
      .optional(),
    cnpj: z
      .string()
      .length(14, { message: "O CNPJ deve ter exatamente 14 caracteres." })
      .refine((value) => /^\d+$/.test(value), {
        message: "O CNPJ deve conter apenas números.",
      })
      .optional(),
    password: z
      .string()
      .refine(
        (value) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{5,}$/.test(
            value
          ),
        {
          message:
            "A senha deve possuir no mínimo 5 caracteres, contendo pelo menos uma letra maiúscula, uma minúscula, um número e um caracter especial.",
        }
      ),

    email: z
      .string()
      .email({ message: "O e-mail do usuário deve ser válido." }),
  }),
});

type RegistrationType = z.infer<typeof RegisterSchema>;

const RegistrationForm = () => {
  // Validação com Zod e HookForms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationType>({
    resolver: zodResolver(RegisterSchema),
  });

  const [isLoadingButton, setLoadingButton] = useState(false);

  // Verificar se o usuário é diretor ou não
  const [isDirector, setIsDirector] = useState(1);

  // Avanço do formulário
  const [step, setStep] = useState(1);
  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  // Dados do plano
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const plan = params.get("plan");
  const type = params.get("type");
  // Dados do plano: se não houver nada informado, redireciona o usuário para a página inicial
  if (type === undefined || plan === undefined) window.location.href = "/";

  // Formulário de dados pessoais: se o usuário é pessoa física ou jurídica
  const [isJuridic, setJuridic] = useState(false);
  const handleRadioChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setJuridic(e.currentTarget.dataset.plan === "pj");
  };

  // REQUEST DE CHECKOUT
  const requestdata = {
    price_lookup: (plan + "-" + type).toLowerCase(),
  };

  // Request de checkout: criação do checkout
  const handleCreateCheckout = async (data: RegistrationType) => {
    setLoadingButton(true);
    console.log(requestdata);
    console.log(data);
  };

  return (
    <div className="mx-[10%] group dark:text-zinc-50 mt-[40%] mb-[40%] lg:mx-auto md:mx-auto lg:mt-[10%] md:mt-[10%] max-w-2xl space-y-6 py-12">
      <h1>Você escolheu o plano: {plan + " " + type}</h1>
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Você é diretor/gestor de uma instituição de ensino?
          </h2>
          <div className="flex gap-4">
            <Button
              variant={isDirector === 2 ? "default" : "outline"}
              className={
                isDirector === 2
                  ? "text-zinc-50"
                  : "dark:bg-zinc-400 dark:text-zinc-900"
              }
              onClick={() => setIsDirector(2)}
            >
              Sim
            </Button>
            <Button
              variant={isDirector === 3 ? "default" : "outline"}
              className={
                isDirector === 3
                  ? "text-zinc-50"
                  : "dark:bg-zinc-400 dark:text-zinc-900"
              }
              onClick={() => setIsDirector(3)}
            >
              Não
            </Button>
          </div>
          {isDirector === 3 && (
            <>
              <p className="text-muted-foreground">
                Solicite a inscrição à sua instituição de ensino para utilizar a
                plataforma.
              </p>
              <p className="text-muted-foreground">
                A sua instituição de ensino já possui cadastro? Solicite o link
                de cadastro gerado no perfil da instituição.
              </p>
            </>
          )}
          {isDirector === 2 && (
            <Button className="text-zinc-50 w-full" onClick={handleNext}>
              Próximo passo
            </Button>
          )}
        </div>
      )}
      {step === 2 && (
        <form
          onSubmit={handleSubmit(handleCreateCheckout)}
          className="space-y-7"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
              Dados da Instituição de Ensino
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="institution-name">Razão Social</Label>
                <Input
                  id="institution-name"
                  maxLength={100}
                  min={3}
                  placeholder="Razão social da instituição"
                  required
                  {...register("institution.name")}
                />
                {errors.institution?.name ? (
                  <span className="text-red-600 text-xs">
                    {errors.institution.name.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-fantasia">Nome Fantasia</Label>
                <Input
                  id="institution-fantasia"
                  maxLength={100}
                  min={3}
                  placeholder="Nome fantasia da instituição"
                  required
                  {...register("institution.fantasia")}
                />
                {errors.institution?.fantasia ? (
                  <span className="text-red-600 text-xs">
                    {errors.institution.fantasia.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-email">Email</Label>
                <Input
                  id="institution-email"
                  type="email"
                  maxLength={100}
                  min={3}
                  placeholder="exemplo@mail.com"
                  required
                  {...register("institution.email")}
                />
                {errors.institution?.email ? (
                  <span className="text-red-600 text-xs">
                    {errors.institution.email.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-cnpj">
                  CNPJ{" "}
                  <span className="text-xs dark:text-zinc-50">
                    Apenas números
                  </span>
                </Label>
                <Input
                  type="text"
                  placeholder="00000000000000"
                  maxLength={14}
                  id="institution-cnpj"
                  required
                  {...register("institution.cnpj")}
                />
                {errors.institution?.cnpj ? (
                  <span className="text-red-600 text-xs">
                    {errors.institution.cnpj.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-state-registration">
                  Inscrição Estadual
                </Label>
                <Input
                  maxLength={9}
                  placeholder="000000000"
                  id="institution-state-registration"
                  required
                  {...register("institution.stateRegistration")}
                />
                {errors.institution?.stateRegistration ? (
                  <span className="text-red-600 text-xs">
                    {errors.institution.stateRegistration.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-phone">Telefone</Label>
                <Input
                  type="phone"
                  maxLength={11}
                  id="institution-phone"
                  required
                  {...register("institution.phone")}
                />
                {errors.institution?.phone ? (
                  <span className="text-red-600 text-xs">
                    {errors.institution.phone.message}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Dados do Responsável</h2>
            <span className="text-regular dark:text-zinc-300">
              Dados do responsável pelo pagamento da assinatura
            </span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="user-nome">Nome</Label>
                <Input
                  id="Nome"
                  placeholder="Nome do responsável"
                  maxLength={100}
                  required
                  {...register("user.nome")}
                />
                {errors.user?.nome ? (
                  <span className="text-red-600 text-xs">
                    {errors.user.nome.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-pessoa">Pessoa:</Label>
                <RadioGroup name="user-pessoa" defaultValue="pessoafisica">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      onClick={handleRadioChange}
                      data-plan="pf"
                      value="pessoafisica"
                      id="pessoa-fisica"
                    />
                    <Label htmlFor="pessoa-fisica">Física</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      onClick={handleRadioChange}
                      data-plan="pj"
                      value="pessoajuridica"
                      id="pessoa-juridica"
                    />
                    <Label htmlFor="pessoa-juridica">Jurídica</Label>
                  </div>
                </RadioGroup>
              </div>
              {isJuridic ? (
                <div className="space-y-2">
                  <Label htmlFor="user-cnpj">
                    CNPJ{" "}
                    <span className="text-xs dark:text-zinc-50">
                      Apenas números
                    </span>
                  </Label>
                  <Input
                    type="text"
                    maxLength={14}
                    placeholder="00000000000000"
                    id="user-cnpj"
                    required
                    {...register("user.cnpj")}
                  />
                  {errors.user?.cnpj ? (
                    <span className="text-red-600 text-xs">
                      {errors.user.cnpj.message}
                    </span>
                  ) : null}
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="user-cpf">
                    CPF{" "}
                    <span className="text-xs dark:text-zinc-50">
                      Apenas números
                    </span>
                  </Label>
                  <Input
                    type="text"
                    maxLength={11}
                    placeholder="00000000000"
                    id="user-cpf"
                    {...register("user.cpf")}
                  />
                  {errors.user?.cpf ? (
                    <span className="text-red-600 text-xs">
                      {errors.user.cpf.message}
                    </span>
                  ) : null}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="user-role">Cargo</Label>
                <Select name="user-role" disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Gestor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem defaultChecked value="gestor">
                        Gestor
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-xs dark:text-zinc-50">Não é gestor?</p>
                    </TooltipTrigger>
                    <TooltipContent className="dark:bg-zinc-800 bg-zinc-50 mx-[15%]">
                      <p className="text-xs dark:text-zinc-50 text-zinc-900 overflow-wrap">
                        Certifique-se de que os dados informados são referentes
                        ao responsável pelo pagamento
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-password">Senha</Label>
                <Input
                  placeholder="********"
                  id="user-password"
                  maxLength={100}
                  type="password"
                  required
                  {...register("user.password")}
                />
                {errors.user?.password ? (
                  <span className="text-red-600 text-xs">
                    {errors.user.password.message}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">Email</Label>
                <Input
                  placeholder="exemplo@mail.com"
                  maxLength={100}
                  id="user-email"
                  type="email"
                  required
                  {...register("user.email")}
                />
                {errors.user?.email ? (
                  <span className="text-red-600 text-xs">
                    {errors.user.email.message}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex justify-between">
              {isLoadingButton ? (
                <Button
                  variant="outline"
                  className="dark:bg-zinc-50 dark:text-primary"
                  onClick={handlePrevious}
                  disabled
                >
                  Voltar
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="dark:bg-zinc-50 dark:text-primary"
                  onClick={handlePrevious}
                >
                  Voltar
                </Button>
              )}
              {isLoadingButton ? (
                <Button
                  id="Submit-button"
                  className="w-[5rem] bg-primary text-primary-foreground hover:bg-zinc-50 hover:text-primary"
                  disabled
                >
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin dark:text-zinc-50 fill-zinc-900"
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
                  id="Submit-button"
                  className="bg-primary text-primary-foreground hover:bg-zinc-50 hover:text-primary"
                  type="submit"
                >
                  Entrar
                </Button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;

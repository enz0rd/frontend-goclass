import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/axiosconfig";
import { useEffect, useState } from "react";
import ErrorDialog from "../errorDialog";
import { getRole } from "../app/utils";

const invalid_type_error = "O email informado é inválido.";
const invalid_length_error = "A senha precisa ter no mínimo 5 caracteres.";

const LoginSchema = z.object({
  email: z.string().email({
    message: invalid_type_error,
  }),
  senha: z.string().min(5, {
    message: invalid_length_error,
  }),
});

type LoginType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<{
    errorMessage: string;
    title: string;
  } | null>(null);

  var multipleAccounts = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  async function handleLogin(data: LoginType) {
    setLoading(true);
    try {
      await api.post("/login", data).then((response) => {
        console.log(response.data);
        if (response.data.multipleAccounts == true) {
          multipleAccounts = true;
        }
        console.log(response.data);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("name", response.data.name);
        setError(null);
      });
      setLoading(false);
      if (multipleAccounts) {
        window.location.pathname = "/selectAccount";
      } else {
        const userRole = getRole();
        switch(userRole) {
          case "admin": {
            window.location.pathname = "/instituicao/dashboard";
            break;
          }
          case "aluno": {
            window.location.pathname = "/aluno/dashboard";
            break;
          }
          case "professor": {
            window.location.pathname = "/professor/dashboard";
            break;
          }
          case "colaborador": {
            window.location.pathname = "/instituicao/dashboard";
            break;
          }
          case "responsavel": {
            window.location.pathname = "/pais/dashboard";
            break;
          }
          default: {
            console.error("Unknown role");
            setError({
              errorMessage: "Não foi possível redirecionar, tente novamente mais tarde.",
              title: "Erro ao realizar login",
            })
          }
        }
      }
    } catch (error: any) {
      setError({
        errorMessage:
          error.response?.data?.message || "Ocorreu um erro desconhecido.",
        title: "Erro ao realizar login",
      });
      setLoading(false);
      return;
    }
  }

  const [hasParams] = useState(false);

  useEffect(() => {
    const notAuthParam = window.location.search.includes("msg=%27not-authorized%27");
    if (notAuthParam) {
      setError({
        errorMessage: "Você não está autorizado a acessar esta página, por gentileza faça login novamente",
        title: "Não autorizado",
      });
    }
  }, [hasParams]);

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      {error ? (
        <ErrorDialog
          title={error.title}
          error={error.errorMessage}
          onClose={handleCloseError}
        />
      ) : null}
      <div>
        <h1 className="text-4xl font-bold text-primary">Login</h1>
        <p className="text-zinc-900 dark:text-zinc-50">
          Faça login para ter acesso à sua conta.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex gap-2 flex-col"
      >
        <div className="w-[100%]">
          <Label htmlFor="email" className="text-primary">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="border-primary dark:text-zinc-50 focus:border-primary-foreground focus:ring-primary"
            {...register("email")}
          />
          {errors.email ? (
            <span className="text-red-600">{errors.email.message}</span>
          ) : null}
        </div>
        <div className="w-[100%]">
          <Label htmlFor="senha" className="text-primary">
            Senha
          </Label>
          <Input
            id="senha"
            type="password"
            placeholder="********"
            className="border-primary dark:text-zinc-50 focus:border-primary-foreground focus:ring-primary"
            {...register("senha")}
          />
          {errors.senha ? (
            <span className="text-red-600">{errors.senha.message}</span>
          ) : null}
        </div>
        <div className="w-[100%] flex gap-2 flex-col text-center">
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
              Entrar
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

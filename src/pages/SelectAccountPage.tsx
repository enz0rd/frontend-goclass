import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/axiosconfig";

const AccountSchema = z.object({
  account: z.string({
    required_error: "Selecione uma conta",
  }),
});

type AccountType = z.infer<typeof AccountSchema>;
type Accounts = Record<string, string>[];

const SelectAccountPage = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [accounts, setAccounts] = useState<Accounts>([]);
  const [selectedAccount, setSelectedAccount] = useState(""); // Estado para armazenar a conta selecionada

  useEffect(() => {
    async function fetchAccounts() {
      const resp = await api.get("/institutions/getUserInstitutions");
      const data = resp.data;
      console.log(data);
      setAccounts(data);
    }
    fetchAccounts();
  }, []);

  const {
    handleSubmit,
    setValue, // função para definir o valor manualmente
    formState: { errors },
  } = useForm<AccountType>({
    resolver: zodResolver(AccountSchema),
  });

  async function HandleProceed(data: AccountType) {
    setIsLoadingButton(true);
    console.log(data);

    setTimeout(() => {
      setIsLoadingButton(false);
    }, 2000);
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex h-[90vh] justify-center align-middle">
        <form
          onSubmit={handleSubmit(HandleProceed)}
          className="flex flex-col w-[20rem] gap-5 m-auto bg-zinc-50 border p-5 rounded-lg border-zinc-300"
        >
          <h1>Selecione a instituição em que deseja logar</h1>
          <Select
            value={selectedAccount} // Define o valor atual do Select
            onValueChange={(value) => {
              setValue("account", value); // Define o valor no formulário
              setSelectedAccount(value); // Atualiza o estado local para o valor selecionado
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione a conta" />
            </SelectTrigger>
            <SelectContent id="select-account">
              <SelectGroup>
                {accounts && accounts.length > 0
                  ? accounts.map((account) => (
                      <SelectItem key={account.id} value={account.id}>
                        {account.razao_social}
                      </SelectItem>
                    ))
                  : null}
                <SelectItem key="5" value="5">
                  Teste
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.account && (
            <span className="text-red-500">{errors.account.message}</span>
          )}
          {isLoadingButton ? (
            <div className="flex flex-row justify-between">
              <Button
                variant="outline"
                className="dark:bg-zinc-50 dark:text-primary"
                disabled
              >
                Voltar
              </Button>
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
            </div>
          ) : (
            <div className="flex flex-row justify-between">
              <Button
                variant="outline"
                className="dark:bg-zinc-50 dark:text-primary"
              >
                Voltar
              </Button>
              <Button
                id="Submit-button"
                className="bg-primary text-primary-foreground hover:bg-zinc-50 hover:text-primary"
                type="submit"
              >
                Entrar
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default SelectAccountPage;

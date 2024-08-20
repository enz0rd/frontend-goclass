import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useLocation } from "react-router-dom";
import CNPJInput from "./CNPJInput";
import PhoneInput from "./PhoneInput";
import IEInput from "./IEInput";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import CPFInput from "./CPFInput";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
// import api from "@/axiosconfig";

const RegistrationForm = () => {
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
  if (type === undefined || plan === undefined) window.location.href = '/';
  
  // Formulário de dados pessoais: se o usuário é pessoa física ou jurídica
  const [isJuridic, setJuridic] = useState(false);
  const handleRadioChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setJuridic(e.currentTarget.dataset.plan === 'pj');
  };

  // REQUEST DE CHECKOUT
  // const requestdata = {
  //   price_lookup: (plan + '-' + type).toLowerCase()
  // };

  // Request de checkout: criação do checkout
  const createCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Cria objetos para armazenar os dados do formulário
    const institutionData: { [key: string]: string } = {};
    const userData: { [key: string]: string } = {};
    
    // Itera pelos elementos do FormData e separa os dados nos objetos correspondentes
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('institution')) {
        institutionData[key] = value.toString();
      } else if (key.startsWith('user')) {
        userData[key] = value.toString();
      }
    }
  
    // Cria um objeto com os dados separados
    const formDataObject = {
      institution: institutionData,
      user: userData,
    };
  
    // Converte o objeto em JSON e faz o log
    console.log(JSON.stringify(formDataObject, null, 2));
    
    // Exemplo de requisição API (comentado)
    // const resp = await api.post('/checkout', requestdata);
    // console.log(resp);
  };
  

  return (
    <div className="mx-[10%] group dark:text-zinc-50 mt-[40%] mb-[40%] lg:mx-auto md:mx-auto lg:mt-[10%] md:mt-[10%] max-w-2xl space-y-6 py-12">
      <h1>Você escolheu o plano: {plan + ' ' + type}</h1>
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Você é diretor/gestor de uma instituição de ensino?</h2>
          <div className="flex gap-4">
            <Button variant={isDirector === 2 ? "default" : "outline"} className={isDirector === 2 ? 'text-zinc-50' : 'dark:bg-zinc-400 dark:text-zinc-900'} onClick={() => setIsDirector(2)}>
              Sim
            </Button>
            <Button variant={isDirector === 3 ? "default" : "outline"} className={isDirector === 3 ? 'text-zinc-50' : 'dark:bg-zinc-400 dark:text-zinc-900'} onClick={() => setIsDirector(3)}>
              Não
            </Button>
          </div>
          {isDirector === 3 && (
            <>
              <p className="text-muted-foreground">
                Solicite a inscrição à sua instituição de ensino para utilizar a plataforma.
              </p>
              <p className="text-muted-foreground">
                A sua instituição de ensino já possui cadastro? Solicite o link de cadastro gerado no perfil da instituição.
              </p>
            </>
          )}
          {isDirector === 2 && <Button className='text-zinc-50 w-full' onClick={handleNext}>Próximo passo</Button>}
        </div>
      )}
      {step === 2 && (
        <form onSubmit={createCheckout} className="space-y-7">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Dados da Instituição de Ensino</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="institution-name">Razão Social</Label>
                <Input
                  name="institution-name"
                  id="institution-name"
                  maxLength={100}
                  min={3}
                  placeholder="Razão social da instituição"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-fantasia">Nome Fantasia</Label>
                <Input
                  name="institution-fantasia"
                  id="institution-fantasia"
                  maxLength={100}
                  min={3}
                  placeholder="Nome fantasia da instituição"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-email">Email</Label>
                <Input
                  name="institution-email"
                  id="institution-email"
                  type="email"
                  maxLength={100}
                  min={3}
                  placeholder="exemplo@mail.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-cnpj">CNPJ</Label>
                <CNPJInput 
                  name="institution-cnpj"
                  id="institution-cnpj" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-state-registration">Inscrição Estadual</Label>
                <IEInput 
                  name="institution-state-registration"
                  id="institution-state-registration" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-phone">Telefone</Label>
                <PhoneInput 
                  name="institution-phone"
                  id="institution-phone" 
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Dados do Responsável</h2>
            <span className="text-regular dark:text-zinc-300">Dados do responsável pelo pagamento da assinatura</span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="user-nome">Nome</Label>
                <Input 
                  name="user-nome"
                  id="Nome" placeholder="Nome do responsável" maxLength={100} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-pessoa">Pessoa:</Label>
                <RadioGroup name="user-pessoa" defaultValue="pessoafisica">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem onClick={handleRadioChange} data-plan="pf" value="pessoafisica" id="pessoa-fisica" />
                    <Label htmlFor="pessoa-fisica">Física</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem onClick={handleRadioChange} data-plan="pj" value="pessoajuridica" id="pessoa-juridica" />
                    <Label htmlFor="pessoa-juridica">Jurídica</Label>
                  </div>
                </RadioGroup>
              </div>
              {isJuridic ? (
                <div className="space-y-2">
                  <Label htmlFor="user-cnpj">CNPJ</Label>
                  <CNPJInput name='user-cnpj' id="user-cnpj" />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="user-cpf">CPF</Label>
                  <CPFInput name='user-cpf' id="user-cpf" />
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
                      <SelectItem defaultChecked value="gestor">Gestor</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-xs dark:text-zinc-300">Não é gestor?</p>
                    </TooltipTrigger>
                    <TooltipContent className="dark:bg-zinc-800 bg-zinc-50 mx-[15%]">
                      <p className="text-xs dark:text-zinc-300 overflow-wrap">Certifique-se de que os dados informados são referentes ao responsável pelo pagamento</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-password">Senha</Label>
                <Input
                  name="user-password"
                  placeholder="********"
                  id="user-password"
                  type="password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">Email</Label>
                <Input
                  name="user-email"
                  placeholder="exemplo@mail.com"
                  maxLength={100}
                  id="user-email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" className="dark:bg-zinc-50 dark:text-primary" onClick={handlePrevious}>
                Voltar
              </Button>
              <Button type="submit">Ir para o pagamento</Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;

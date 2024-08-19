import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useLocation } from "react-router-dom"
import CNPJInput from "./CNPJInput"
import PhoneInput from "./PhoneInput"
import IEInput from "./IEInput"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import CPFInput from "./CPFInput"

const RegistrationForm = () => {
  const [step, setStep] = useState(1)
  const [isDirector, setIsDirector] = useState(1)
  const handleNext = () => {
    setStep(step + 1)
  }
  const handlePrevious = () => {
    setStep(step - 1)
  }

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const plan = params.get("plan");
  const type = params.get("type");

  if (type === undefined || plan === undefined) window.location.href = '/'

  const [isJuridic, setJuridic] = useState(false);
  const handleRadioChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget.dataset.plan === 'pf') {
      setJuridic(false)
    } else {
      setJuridic(true);
    }
  }

  return (
    <div className="mx-[10%] group dark:text-zinc-50 mt-[40%] mb-[40%] lg:mx-auto md:mx-auto lg:mt-[10%] md:mt-[10%] max-w-2xl space-y-6 py-12">
      <h1>Você escolheu o plano: {plan + ' ' + type}</h1>
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Você é diretor/gestor de uma instituição de ensino?</h2>
          <div className="flex gap-4">
            <Button variant={isDirector == 2 ? "default" : "outline"} className={isDirector === 2 ? 'text-zinc-50' : 'dark:bg-zinc-400 dark:text-zinc-900'} onClick={() => setIsDirector(2)}>
              Sim
            </Button>
            <Button variant={isDirector == 3 ? "default" : "outline"} className={isDirector === 3 ? 'text-zinc-50' : 'dark:bg-zinc-400 dark:text-zinc-900'} onClick={() => setIsDirector(3)}>
              Não
            </Button>
          </div>
          {isDirector == 3 && (
            <>
              <p className="text-muted-foreground">
                Solicite a inscrição à sua instituição de ensino para utilizar a plataforma.
              </p>
              <p className="text-muted-foreground">
                A sua instituição de ensino já possui cadastro? Solicite o link de cadastro gerado no perfil da instituição.
              </p>
            </>
          )}
          {isDirector == 2 && <Button className='text-zinc-50' onClick={handleNext}>Próximo passo</Button>}
        </div>
      )}
      {step === 2 && (
        <form onSubmit={(e) => { e.preventDefault(); console.log("submit 1"); }} className="space-y-4">
          <h2 className="text-2xl font-bold">Dados da Instituição de Ensino</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="institution-name">Razão Social</Label>
              <Input
                id="institution-name"
                maxLength={100}
                placeholder="Razão social da instituição"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-Fantasia">Nome Fantasia</Label>
              <Input
                id="institution-fantasia"
                maxLength={100}
                placeholder="Nome fantasia da instituição"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-email">Email</Label>
              <Input
                id="institution-email"
                type="email"
                maxLength={100}
                placeholder="exemplo@mail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-phone">CNPJ</Label>
              <CNPJInput />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-state-registration">Inscrição Estadual</Label>
              <IEInput />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-phone">Telefone</Label>
              <PhoneInput id='institution-state-registration' />
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" className="dark:bg-zinc-50 dark:text-primary" onClick={handlePrevious}>
              Voltar
            </Button>
            <Button type="submit" onClick={handleNext}>
              Next
            </Button>
          </div>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={(e) => { e.preventDefault(); console.log("submit"); }} className="space-y-4">
          <h2 className="text-2xl font-bold">Dados Pessoais</h2>
          <span className="text-regular dark:text-zinc-300">Dados do responsável pelo pagamento da assinatura</span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="Nome">Nome</Label>
              <Input id="Nome" placeholder="Nome do responsável" maxLength={100} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf">Pessoa:</Label>
              <RadioGroup defaultValue="pessoafisica">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem onClick={handleRadioChange} data-plan='pf' value="pessoafisica" id="pessoa-fisica" />
                  <Label htmlFor="pessoa-fisica">Física</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem onClick={handleRadioChange} data-plan='pj' value="pessoajuridica" id="pessoa-juridica" />
                  <Label htmlFor="pessoa-juridica">Jurídica</Label>
                </div>
              </RadioGroup>
            </div>
            {isJuridic ? (
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <CNPJInput />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <CPFInput />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious}>
              Previous
            </Button>
            <Button type="submit">Register</Button>
          </div>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm;
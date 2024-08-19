import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useLocation } from "react-router-dom"
import CNPJInput from "./CNPJInput"

const RegistrationForm = () => {
  const [step, setStep] = useState(1)
  const [isDirector, setIsDirector] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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

  return (
    <div className="mx-[20%] group dark:text-zinc-50 mt-[50%] mb-[50%] lg:mx-auto md:mx-auto lg:mt-[10%] md:mt-[10%] max-w-2xl space-y-6 py-12">
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
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-Fantasia">Nome Fantasia</Label>
              <Input
                id="institution-fantasia"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-phone">CNPJ</Label>
              <CNPJInput />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-phone">Phone</Label>
              <Input
                id="institution-phone"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution-phone">Phone</Label>
              <Input
                id="institution-phone"
                required
              />
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
          <h2 className="text-2xl font-bold">Personal Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
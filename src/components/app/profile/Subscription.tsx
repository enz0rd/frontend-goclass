import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff, SettingsIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Subscription = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHide = () => {
    setIsHidden(!isHidden);
  };

  const plano = "Uni";
  const prox_pagamento = "10/10/2021";
  const valor = "R$397,00";

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between group dark:text-zinc-50">
        <h4 className="text-xl font-bold">Plano:</h4>
        {isHidden ? (
          <EyeIcon className="cursor-pointer" onClick={handleHide} />
        ) : (
          <EyeOff className="cursor-pointer" onClick={handleHide} />
        )}
      </div>
      <span className="text-lg font-semibold dark:text-zinc-400 text-zinc-600">
        GoClass {plano}
      </span>
      <span className="dark:text-zinc-400 text-zinc-600 flex flex-row justify-between">
        <p>Próximo pagamento:</p>
        <p className={isHidden ? `blur-sm` : `blur-none`}>
          {isHidden ? "00/00/0000" : prox_pagamento}
        </p>
      </span>
      <span className="dark:text-zinc-400 text-zinc-600 flex flex-row justify-between">
        <p>Valor:</p>
        <p className={isHidden ? `blur-sm` : `blur-none`}>
          {isHidden ? "R$00,00" : valor}
        </p>
      </span>
      <NavLink to="/instituicao/gerenciar-plano">
        <Button className="w-full flex flex-row gap-3 mt-4">
          <SettingsIcon width={20} /> Gerenciar Plano
        </Button>
      </NavLink>
    </div>
  );
};

export default Subscription;

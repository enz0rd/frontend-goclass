import { CheckIcon } from "@radix-ui/react-icons";
import { RiDiscountPercentFill as DiscountIcon } from "react-icons/ri";
import { Button } from "../../ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const UniPlan = () => {
  return (
    <div>
      <div className="rounded-3xl h-[100%] bg-gradient-to-b from-[#41A5E3] to-primary text-primary-foreground">
        <Badge className="m-5 bg-zinc-50 text-primary rounded-full">
          Em destaque
        </Badge>
        <CardHeader className="pt-0">
          <div className="m-auto flex flex-col justify-center text-center">
            <CardTitle className="text-4xl dark:text-zinc-50">Uni</CardTitle>
            <CardDescription className="text-zinc-50">
              Plano ideal para instituições de grande porte
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="">
          <Tabs defaultValue="mensal">
            <TabsList className=" group gap-1 rounded-xl w-full bg-primary">
              <TabsTrigger
                className="dark:data-[state=active]:bg-[#41a5e3] w-1/3 rounded-lg "
                value="mensal"
              >
                Mensal
              </TabsTrigger>
              <TabsTrigger
                className="dark:data-[state=active]:bg-[#41a5e3] flex flex-row gap-1 w-1/3 rounded-lg"
                value="semestral"
              >
                Semestral
                <Badge className="hover:bg-zinc-200 bg-zinc-50 w-[.9rem] justify-center align-middle p-0 text-primary rounded-full">
                  <DiscountIcon className="w-3" />
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                className="dark:data-[state=active]:bg-[#41a5e3] flex flex-row gap-1 w-1/3 rounded-lg"
                value="anual"
              >
                <p>Anual</p>
                <Badge className="hover:bg-zinc-200 bg-zinc-50 w-[.9rem] justify-center align-middle p-0 text-primary rounded-full">
                  <DiscountIcon className="w-3" />
                </Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent className="space-y-4" value="mensal">
              <ul className="group dark:text-zinc-50 space-y-2 text-primary-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Envio de atividades via plataforma
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Chat direto com instrutores
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Dashboard de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de atividades
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Divulgação de eventos internos
                </li>
              </ul>
              <div className="group dark:text-zinc-50 flex items-end justify-between">
                <span className="text-4xl font-bold">R$299</span>
                <span className="text-primary-foreground text-sm text-zinc-200">
                  /mês
                </span>
              </div>
              <Button className="w-full dark:bg-zinc-50 bg-primary-foreground dark:text-primary text-primary dark:hover:bg-zinc-300 hover:bg-primary/90">
                Assinar
              </Button>
            </TabsContent>
            <TabsContent className="space-y-4" value="semestral">
              <ul className="group dark:text-zinc-50 space-y-2 text-primary-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Envio de atividades via plataforma
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Chat direto com instrutores
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Dashboard de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de atividades
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Divulgação de eventos internos
                </li>
              </ul>
              <div className="group dark:text-zinc-50 flex items-end justify-between">
                <div className="flex flex-row justify-center gap-2">
                  <span className="text-4xl font-bold">R$1530</span>
                  <Badge className="hover:bg-zinc-200 bg-zinc-50 justify-center p-1 h-5 text-primary my-auto rounded-full">
                    <DiscountIcon className="w-3" /> 15% off
                  </Badge>
                </div>
                <span className="text-primary-foreground text-sm text-zinc-200">
                  /6 meses
                </span>
              </div>
              <Button className="w-full dark:bg-zinc-50 bg-primary-foreground dark:text-primary text-primary dark:hover:bg-zinc-300 hover:bg-primary/90">
                Assinar
              </Button>
            </TabsContent>
            <TabsContent className="space-y-4" value="anual">
              <ul className="group dark:text-zinc-50 space-y-2 text-primary-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Envio de atividades via plataforma
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Chat direto com instrutores
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Dashboard de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de atividades
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Relatório de desempenho
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Divulgação de eventos internos
                </li>
              </ul>
              <div className="group dark:text-zinc-50 flex items-end justify-between">
                <div className="flex flex-row justify-center gap-2">
                  <span className="text-4xl font-bold">R$2500</span>
                  <Badge className="hover:bg-zinc-200 bg-zinc-50 justify-center p-1 h-5 text-primary my-auto rounded-full">
                    <DiscountIcon className="w-3" /> 30% off
                  </Badge>
                </div>
                <span className="text-primary-foreground text-sm text-zinc-200">
                  /ano
                </span>
              </div>
              <Button className="w-full dark:bg-zinc-50 bg-primary-foreground dark:text-primary text-primary dark:hover:bg-zinc-300 hover:bg-primary/90">
                Assinar
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </div>
    </div>
  );
};

export default UniPlan;

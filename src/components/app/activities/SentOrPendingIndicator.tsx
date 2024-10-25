import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a label"

type ChartData = {
    total: number,
    atividades: {
        atrasadas: number
        pendentes: number,
        entregues: number,
    }
}

const chartConfig = {
  pendentes: {
    label: "Pendentes",
    color: "rgb(250 204 21)",
  },
  entregues: {
    label: "Entregues",
    color: "rgb(16 185 129)",
  },
  atrasadas: {
    label: "Atrasadas",
    color: "rgb(244 63 94)",
  },
} satisfies ChartConfig

const SentOrPendingIndicator = (data : ChartData) => {
  return (
    <div className="p-4">
        <Card className="h-[25rem] flex flex-col bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-50 to-zinc-300">
        <CardHeader className="items-center pb-0">
            <CardTitle>Atividades</CardTitle>
            <CardDescription className="flex flex-col text-center">
                <p>Enviadas e Pendentes</p>
                <small>{`${new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' })} - ${new Date().toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' })}`}</small>
            </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie 
                data={[
                    { name: 'Pendentes', value: data.atividades.pendentes, fill: chartConfig.pendentes.color },
                    { name: 'Entregues', value: data.atividades.entregues, fill: chartConfig.entregues.color },
                    { name: 'Atrasadas', value: data.atividades.atrasadas, fill: chartConfig.atrasadas.color },
                ]} 
                dataKey="value" 
                label 
                nameKey="name" 
                />
            </PieChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
            Total de {data.total} atividade{data.total > 1 || data.total === 0 ? 's' : ''} no último mês
            </div>
        </CardFooter>
        </Card>
    </div>
  )
}

export default SentOrPendingIndicator;
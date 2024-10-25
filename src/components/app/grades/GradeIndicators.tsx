import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip
} from "@/components/ui/chart";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { Bar, BarChart, LabelList } from "recharts";

type Activity = {
  activity: number;
  name: string;
  score: number;
};

type Subject = {
  name: string;
  grade: string;
  percentage: number;
  history: Activity[];
};

const calcularMedia = (history: Activity[]): string => {
  if (history.length === 0) return "0.00";
  const soma = history.reduce((acc, item) => acc + item.score, 0);
  return (soma / history.length).toFixed(2);
};

const obterTendencia = (history: Activity[]): "up" | "down" | "equal" => {
  if (history.length < 2) return "equal";
  const penultimo = history[history.length - 2].score;
  const ultimo = history[history.length - 1].score;
  if (penultimo === ultimo) return "equal";
  return penultimo < ultimo ? "up" : "down";
};

const TrendIcon = ({ trend }: { trend: "up" | "down" | "equal" }) => {
  switch (trend) {
    case "up":
      return <ArrowUp className="text-green-500" size={24} />;
    case "down":
      return <ArrowDown className="text-red-500" size={24} />;
    case "equal":
      return <Minus className="text-gray-500" size={24} />;
  }
};

// Custom Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-row gap-2 align-middle dark:bg-zinc-900 bg-zinc-50 border border-border rounded p-2 shadow-md">
        <div className="h-5 w-5 rounded-md bg-primary my-auto"/>
        <div className="flex flex-col gap-1">
            <p className="font-semibold">{payload[0].payload.name}</p>
            <p>Nota: {payload[0].value.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  return null;
};

const GradeIndicator = ({ subjects = [] }: { subjects?: Subject[] }) => {
  if (subjects.length === 0) {
    return (
      <div className="text-center p-4">Nenhuma disciplina encontrada.</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => {
          const media = calcularMedia(subject.history);
          const tendencia = obterTendencia(subject.history);

          return (
            <Card
              key={subject.name}
              className="overflow-hidden bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-50 to-zinc-300"
            >
              <CardHeader className="pb-2">
                <CardTitle>{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-4xl font-bold">{subject.grade}</div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-2">{media}</div>
                    <TrendIcon trend={tendencia} />
                  </div>
                </div>
                <ChartContainer
                  config={{
                    pontuacao: {
                      label: "Pontuação",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[100px] w-full"
                >
                  <BarChart
                    data={subject.history}
                    margin={{
                      top: 20,
                      bottom: 2,
                    }}
                  >
                    <ChartTooltip
                      cursor={false}
                      content={<CustomTooltip />}
                    />
                    <Bar radius={5} dataKey="score" fill={"#1B86CA"}>
                      <LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={12}
                      />
                    </Bar>
                  </BarChart>
                </ChartContainer>
                <div className="text-xs text-muted-foreground mt-1 text-center">
                  Progressão de notas com base em {subject.history.length}{" "}
                  nota{subject.history.length > 1 ? "s" : ""}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GradeIndicator;

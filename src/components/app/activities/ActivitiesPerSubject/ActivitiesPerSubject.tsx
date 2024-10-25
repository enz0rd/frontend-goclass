import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataTable from "../../DataTable";
import { columns } from "./ActivitiesPerSubjectColumns";

const ActivitiesSubjects = [
  {
    id: "1",
    subject: "Matemática",
    pending: 5,
    late: 2,
    done: 3,
  },
  {
    id: "2",
    subject: "Inglês",
    pending: 5,
    late: 2,
    done: 3,
  },
  {
    id: "3",
    subject: "Português",
    pending: 5,
    late: 2,
    done: 3,
  },
  {
    id: "4",
    subject: "Educação física",
    pending: 5,
    late: 2,
    done: 3,
  },
  {
    id: "5",
    subject: "Ciências",
    pending: 5,
    late: 2,
    done: 3,
  },
];

const ActivitiesPerSubject = () => {
  return (
    <div className="p-4">
      <Card className="h-[25rem] flex flex-col bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-50 to-zinc-300">
        <CardHeader className="items-center pb-0">
          <CardTitle>Atividades</CardTitle>
          <CardDescription className="flex flex-col text-center">
            <p>Enviadas e Pendentes</p>
            <small>{`${new Date(
              new Date().setMonth(new Date().getMonth() - 1)
            ).toLocaleDateString("pt-BR", {
              month: "2-digit",
              year: "numeric",
            })} - ${new Date().toLocaleDateString("pt-BR", {
              month: "2-digit",
              year: "numeric",
            })}`}</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0 mb-5">
            <DataTable
              data={ActivitiesSubjects}
              columns={columns}
              showSearch={false}
            />
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivitiesPerSubject;

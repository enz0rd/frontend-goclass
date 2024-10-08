import DataTable from "@/components/app/activities/DataTable";
import { Activity, columns } from "@/components/app/activities/columns";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const activities1: Activity[] = [
  {
    id: "1",
    title: "Prova de Português",
    date_post: "2024-09-01",
    date_end: "2024-09-10",
    status: "Atrasado",
  },
  {
    id: "2",
    title: "Seminário estados da matéria",
    date_post: "2024-09-25",
    date_end: "2024-09-30",
    status: "Atrasado",
  },
  {
    id: "3",
    title: "Redação - A importância da água",
    date_post: "2021-10-01",
    date_end: "2024-10-10",
    status: "Pendente",
  },
  {
    id: "4",
    title: "Resumo do Livro - O Cortiço",
    date_post: "2024-10-07",
    date_end: "2024-10-25",
    status: "Pendente",
  },
  {
    id: "5",
    title: "Exercício de Matemática - Funções",
    date_post: "2024-09-20",
    date_end: "2024-09-28",
    status: "Atrasado",
  }
];

const activities2: Activity[] = [
  {
    id: "6",
    title: "Trabalho de História - Revolução Industrial",
    date_post: "2024-09-30",
    date_end: "2024-10-05",
    status: "Atrasado",
  },
  {
    id: "7",
    title: "Pesquisa de Biologia - Ecossistemas",
    date_post: "2024-10-01",
    date_end: "2024-10-15",
    status: "Entregue",
  },
  {
    id: "8",
    title: "Apresentação de Filosofia - Existencialismo",
    date_post: "2024-10-02",
    date_end: "2024-10-20",
    status: "Entregue",
  },
  {
    id: "9",
    title: "Projeto de Geografia - Mudanças Climáticas",
    date_post: "2024-10-05",
    date_end: "2024-10-22",
    status: "Entregue",
  }
];

type ActivitiesPageProps = {
  page: number,
  totalPages: number,
  canGetPreviousPage: boolean,
  canGetNextPage: boolean,
  data: Activity[],
};

const ActivitiesPage = () => {
  const data1: ActivitiesPageProps = {
    page: 1,
    totalPages: 2,
    canGetPreviousPage: false,
    canGetNextPage: true,
    data: activities1,
  };
  
  const data2: ActivitiesPageProps = {
    page: 2,
    totalPages: 2,
    canGetPreviousPage: true,
    canGetNextPage: false,
    data: activities2,
  };

  const [activities, setActivities] = useState<ActivitiesPageProps>(data1);


  const handlePreviousPage = () => {
    setActivities(data1);
  };

  const canGetPreviousPage = activities?.canGetPreviousPage ? false : true;
  const canGetNextPage = activities?.canGetNextPage ? false : true;
  
  const handleNextPage = () => {
    setActivities(data2);
  };
  return (
    <div className="group grow p-4 dark:text-zinc-50 container">
      <h1 className="text-4xl font-bold">Atividades</h1>
      <p>Visualizando todas as atividades</p>
      <div>
        <DataTable columns={columns} data={activities.data} />
        <div className="flex flex-row justify-between py-4">
          <p className="text-sm text-center">
            Página {activities.page} de {activities.totalPages}
          </p>
          <div className="flex items-center justify-end space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={canGetPreviousPage}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={canGetNextPage}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;

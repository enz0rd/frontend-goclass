import DataTable from "@/components/app/DataTable";
import {
  Activity,
  columns as colTabela,
} from "@/components/app/activities/columns";
import SentOrPendingIndicator from "@/components/app/activities/SentOrPendingIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, SearchIcon } from "lucide-react";
import { useState } from "react";
import ActivitiesPerSubject from "@/components/app/activities/ActivitiesPerSubject/ActivitiesPerSubject";

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
  },
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
  },
];

type ActivitiesPageProps = {
  page: number;
  totalPages: number;
  canGetPreviousPage: boolean;
  canGetNextPage: boolean;
  data: Activity[];
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

  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState<ActivitiesPageProps>(data1);

  // Implementar a lógica para a página anterior na API
  const handlePreviousPage = () => {
    setActivities(data1);
  };

  const canGetPreviousPage = activities?.canGetPreviousPage ? false : true;
  const canGetNextPage = activities?.canGetNextPage ? false : true;

  // Implementar a lógica para a próxima página na API
  const handleNextPage = () => {
    setActivities(data2);
  };

  // Implementar lógica para buscar na API
  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Implementar lógica para buscar dados na API
  const chartData = {
    total: 43,
    atividades: {
      atrasadas: 5,
      pendentes: 17,
      entregues: 26,
    },
  };

  return (
    <div className="group grow p-4 flex gap-2 flex-col dark:text-zinc-50 container">
      <div>
        <h1 className="text-4xl font-bold mb-5">Atividades</h1>
        <p>Visualizando todas as atividades</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SentOrPendingIndicator {...chartData} />
        </div>
        <div className="lg:col-span-2">
          <ActivitiesPerSubject />
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center py-4 gap-5 mt-5">
          <Input
            placeholder="Filtrar dados..."
            className="max-w-sm border-zinc-500"
            id="search"
          />
          <Button
            className="flex flex-row gap-2"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            ) : (
              <div className="flex flex-row gap-3">
                <SearchIcon className="w-4 h-4" />
                <p className="text-md">Buscar</p>
              </div>
            )}
          </Button>
        </div>
        <DataTable
          columns={colTabela}
          data={activities.data}
          showSearch={false}
        />
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

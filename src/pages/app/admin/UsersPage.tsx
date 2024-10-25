import DataTable from "@/components/app/DataTable";
import PaginationFooter from "@/components/app/PaginationFooter";
import {
  User,
  columns as cols,
} from "@/components/app/users/columnsInstitution";
import RegisterLinkButton from "@/components/app/users/RegisterLinkButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const users1 = [
  {
    id: "1",
    name: "João",
    role: "Colaborador",
    email: "joao@mail.com",
  },
  {
    id: "2",
    name: "Maria",
    role: "Gestor",
    email: "maria@mail.com",
  },
  {
    id: "3",
    name: "Enzo",
    role: "Colaborador",
    email: "enzo@mail.com",
  },
  {
    id: "4",
    name: "Luana",
    role: "Professora",
    email: "luana@mail.com",
  },
];

const users2 = [
  {
    id: "5",
    name: "Cleber",
    role: "Colaborador",
    email: "cleber@mail.com",
  },
  {
    id: "6",
    name: "Clóvis",
    role: "Professor",
    email: "clovinhos@mail.com",
  },
  {
    id: "7",
    name: "Paulo",
    role: "Professor",
    email: "paulao@mail.com",
  },
  {
    id: "4",
    name: "Hugo",
    role: "Professor",
    email: "hugogoss@mail.com",
  },
];

type UsersPageProps = {
  page: number;
  totalPages: number;
  canGetPreviousPage: boolean;
  canGetNextPage: boolean;
  data: User[];
};

const UsersPage = () => {
  const data1: UsersPageProps = {
    page: 1,
    totalPages: 2,
    canGetPreviousPage: false,
    canGetNextPage: true,
    data: users1,
  };

  const data2: UsersPageProps = {
    page: 2,
    totalPages: 2,
    canGetPreviousPage: true,
    canGetNextPage: false,
    data: users2,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UsersPageProps>(data1);

  // Implementar a lógica para a página anterior na API
  const handlePreviousPage = () => {
    setUsers(data1);
  };

  const canGetPreviousPage = users?.canGetPreviousPage ? false : true;
  const canGetNextPage = users?.canGetNextPage ? false : true;

  // Implementar a lógica para a próxima página na API
  const handleNextPage = () => {
    setUsers(data2);
  };

  // Implementar lógica para buscar na API
  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="group grow p-4 dark:text-zinc-50 container">
      <h1 className="text-4xl font-bold mb-5">Usuários</h1>
      <p>Visualizando os usuários cadastrados na instituição</p>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center py-4 gap-2">
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
              <div className="flex flex-row gap-3" title="Buscar">
                <SearchIcon className="w-4 h-4" />
              </div>
            )}
          </Button>
        </div>
        <div className="mb-4">
          <RegisterLinkButton />
        </div>
        
      </div>
      <DataTable showSearch={false} columns={cols} data={users.data} />
      <PaginationFooter page={users.page} totalPages={users.totalPages} onPrevious={handlePreviousPage} canGetPrevious={canGetPreviousPage} onNext={handleNextPage} canGetNextPage={canGetNextPage} />
    </div>
  );
};

export default UsersPage;

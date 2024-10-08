import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { NavLink } from "react-router-dom";

export type Activity = {
  id: string;
  title: string;
  date_post: string;
  date_end: string;
  status: string;
};

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div className="flex justify-center flex-grow">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Título
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="text-ellipsis overflow-hidden">{row.original.title}</p>
      );
    },
  },
  {
    accessorKey: "date_post",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Criação
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center w-[7rem]">
          {new Date(row.original.date_post).toLocaleDateString()}
        </div>
      );
    },
  },
  {
    accessorKey: "date_end",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Envio
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center w-[7rem]">
          {new Date(row.original.date_end).toLocaleDateString()}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-center"
          >
            Status
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      if (row.getValue("status") === "Atrasado") {
        return (
          <div className="text-center w-[7rem]">
            <span className="text-red-500">Atrasado</span>
          </div>
        );
      } else if (row.getValue("status") === "Pendente") {
        return (
          <div className="text-center w-[7rem]">
            <span className="text-yellow-500">Pendente</span>
          </div>
        );
      } else {
        return (
          <div className="text-center w-[7rem]">
            <span className="text-green-500">Entregue</span>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const activity = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="dark:bg-zinc-900">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  window.location + "/" + activity.id
                )
              }
            >
              Copiar link da atividade
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <NavLink to={window.location.pathname + "/" + activity.id}>Ver atividade</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={`/entregar?atividade=${activity.id}&name=${activity.title}`}>Entregar atividade</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

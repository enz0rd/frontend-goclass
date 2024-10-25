import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil } from "lucide-react";
import { NavLink } from "react-router-dom";

export type User = {
  id: string;
  name: string;
  role: string;
  email: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-10">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            #
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center w-10">
          <p className="text-ellipsis overflow-hidden mx-auto">
            {row.original.id}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex flex-grow">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="text-ellipsis overflow-hidden">{row.original.name}</p>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Cargo
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center w-[7rem]">{row.original.role}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center w-[7rem]">{row.original.email}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: () => {
        return (
            <div className="flex">
                <span className="mx-auto">Ações</span>
            </div>
        );
    },
    cell: ({ row }) => {
      const user = row.original;

      return (
        <NavLink to={window.location.pathname + "/" + user.id} title="Editar">
          <Pencil className="mx-auto h-4 w-4" />
        </NavLink>
      );
    },
  },
];

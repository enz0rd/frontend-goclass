import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type SubjectActivity = {
  id: string;
  subject: string;
  pending: number;
  late: number;
  done: number;
};

export const columns: ColumnDef<SubjectActivity>[] = [
  {
    accessorKey: "subject",
    header: ({ column }) => {
      return (
        <div className="flex justify-center flex-grow">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Matéria
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="text-ellipsis overflow-hidden">{row.original.subject}</p>
      );
    },
  },
  {
    accessorKey: "pending",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Pendentes
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center w-[7rem] text-yellow-500">
          {row.original.pending}
        </div>
      );
    },
  },
  {
    accessorKey: "late",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem]">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Atrasadas
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center w-[7rem] text-red-500">
          {row.original.late}
        </div>
      );
    },
  },
  {
    accessorKey: "done",
    header: ({ column }) => {
      return (
        <div className="flex justify-center w-[7rem] ">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Entregues
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center w-[7rem] text-green-500">
          {row.original.done}
        </div>
      );
    },
  },
];

import Attachment from "@/components/app/activities/Attachment";
import { ArrowLeftCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Description {
  type: "text" | "link";
  content: string;
}

interface Attachment {
  id: number;
  type: "image" | "file";
  name: string;
  url?: string;
  bytes?: string;
}

interface Activity {
  id: number;
  title: string;
  description: Description[];
  date: string;
  due: string;
  status: string;
  activityType: string;
  teacher: string;
  attachments?: Attachment[];
}

const SingleActivityPage = () => {
  // pegar o ID da rota
  // const teste = window.location.pathname.split("/")[2];

  const atividade: Activity = {
    id: 1,
    title: "Redação sobre o tema: Agro no Sul do Brasil",
    description: [
      {
        type: "text",
        content: "Escrever uma redação sobre o tema: Agro no Sul do Brasil",
      },
      {
        type: "text",
        content: "Ter no mínimo 30 linhas, e no máximo 50 linhas",
      },
      {
        type: "text",
        content: "Entregar até 30/09/2021",
      },
      {
        type: "link",
        content: "https://www.google.com",
      }
    ],
    date: "2024/10/30",
    due: '2024/11/12',
    status: "Pendente",
    activityType: "Prova",
    teacher: "João da Silva",
    attachments: [
      {
        id: 1,
        type: "file",
        name: "Arquivo de anexo gerado pelo professor",
        url: "https://www.google.com",
      },
      {
        id: 2,
        type: "image",
        name: "Imagem 1",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbuqWjG-_axdFzKEIhF-toNedjyu0WSsPTA&s" 
      },
      {
        id: 3,
        type: "image",
        name: "Imagem de teste",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbuqWjG-_axdFzKEIhF-toNedjyu0WSsPTA&s" 
      }
    ]
  };

  const dataEntrega = new Date(atividade.due).toLocaleDateString();

  return (
    <div className="container p-5 dark:text-zinc-50">
      <div className="mb-5 flex justify-between align-middle flex-wrap">
        <NavLink to="/aluno/atividades" className=" hover:bg-primary px-4 py-2 rounded-full self-center hover:text-zinc-50 transition-[.2s] w-fit text-zinc-500 flex flex-row gap-2 mb-2">
          <ArrowLeftCircle className="cursor-pointer" />
          Voltar
        </NavLink>
        <div className="flex flex-col group text-right">
          <h1 className="text-4xl font-bold">{atividade.title}</h1>
          <span className="text-zinc-500">{atividade.teacher}</span>
          <span className="text-zinc-500">Postado em {atividade.date}</span>

        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">Descrição:</h2>
        {atividade.description.map((line) => {
          if (line.type === "text") {
            return <p>{line.content}</p>;
          } else {
            return <a href={line.content} className="text-primary underline">{line.content}</a>;
          }
        })}
      </div>
      {atividade.attachments && (
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl font-bold my-5">Anexos:</h5>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {atividade.attachments.map((attachment) => (
              <Attachment key={attachment.id} attachment={attachment} />
            ))}
          </div>
        </div>
      )}
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-2">Prazo:</h2>
        {atividade.status === "Entregue" ? (
          <p className="px-4 py-2 rounded-md w-fit font-bold text-zinc-950 bg-zinc-50">{dataEntrega}</p>
        ) : dataEntrega === new Date().toLocaleDateString() ? (
          <p className="px-4 py-2 rounded-md w-fit font-bold text-zinc-950 bg-yellow-500">{dataEntrega}</p>
        ) : dataEntrega < new Date().toLocaleDateString() ? (
          <p className="px-4 py-2 rounded-md w-fit font-bold text-zinc-950 bg-red-500">{dataEntrega}</p>
        ) : (
          <p className="px-4 py-2 rounded-md w-fit font-bold text-zinc-950 bg-green-500">{dataEntrega}</p>
        )}
      </div>
      {atividade.status === 'Entregue' ? (
        <div className="mt-5">
          <button disabled className="bg-green-500 cursor-not-allowed text-zinc-950 rounded-full px-5 py-2 hover:bg-primary-dark transition-[.2s]">Atividade entregue</button>
        </div>
      ) : (
        <NavLink to='/aluno/entregar?atividade=1'>
          <button className="bg-primary text-zinc-50 rounded-full px-5 py-2 mt-5 hover:bg-primary-dark transition-[.2s]">Entregar atividade</button>
        </NavLink>
      )}
    </div>
  );
};

export default SingleActivityPage;

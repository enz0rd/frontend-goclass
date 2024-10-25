import * as jose from "jose";
import { BookOpenText, CheckCircle, GraduationCap, LibraryBig, MailIcon, PanelRight, School, Shapes, Users, UsersRound } from "lucide-react";

export const getRole = () => {
  const auth = localStorage.getItem("authToken");
  if (!auth) return window.location.href = "/login";
  const decodedToken = jose.decodeJwt(auth) as { data: { role: string } };
  const role = decodedToken.data.role;
  return role;
};

export type RotaProps = {
  nome: string;
  icone: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  rota: string;
}

export const getPropsBasedOnRole = (role: string) => {
  if(role === "admin" || role === "colaborador") role = "admin";
  switch (role) {
    case "admin": {
      return [
          {
            nome: "Dashboard",
            icone: PanelRight,
            rota: "/instituicao/dashboard"
          },
          {
            nome: "Instituição",
            icone: School,
            rota: "/instituicao/perfil"
          },
          {
            nome: "Usuários",
            icone: Users,
            rota: "/instituicao/usuarios"
          },
          {
            nome: "Cursos",
            icone: LibraryBig,
            rota: "/instituicao/cursos"
          },
          {
            nome: "Turmas",
            icone: Shapes,
            rota: "/instituicao/turmas"
          },
          {
            nome: "Mensagens",
            icone: MailIcon,
            rota: "/instituicao/mensagens"
          }
        ];
    }
    case "aluno": {
      return [
          {
            nome: "Dashboard",
            icone: PanelRight,
            rota: "/aluno/dashboard"
          },
          {
            nome: "Atividades",
            icone: BookOpenText,
            rota: "/aluno/atividades"
          },
          {
            nome: "Notas",
            icone: GraduationCap,
            rota: "/aluno/notas"
          },
          {
            nome: "Entregar",
            icone: CheckCircle,
            rota: "/aluno/entregar"
          },
          {
            nome: "Mensagens",
            icone: MailIcon,
            rota: "/aluno/mensagens"
          }
        ];
    }
    case "professor": {
      return [
          {
            nome: "Dashboard",
            icone: PanelRight,
            rota: "/professor/dashboard"
          },
          {
            nome: "Turmas",
            icone: UsersRound,
            rota: "/professor/turmas"
          },
          {
            nome: "Atividades",
            icone: BookOpenText,
            rota: "/professor/atividades"
          },
          {
            nome: "Notas",
            icone: GraduationCap,
            rota: "/professor/notas"
          },
          {
            nome: "Mensagens",
            icone: MailIcon,
            rota: "/professor/mensagens"
          }
        ];
    }
    case "responsavel": {
      return [
          {
            nome: "Dashboard",
            icone: PanelRight,
            rota: "/pais/dashboard"
          },
          {
            nome: "Notas",
            icone: GraduationCap,
            rota: "/pais/notas"
          },
          {
            nome: "Atividades",
            icone: BookOpenText,
            rota: "/pais/atividades"
          },
          {
            nome: "Mensagens",
            icone: MailIcon,
            rota: "/pais/mensagens"
          }
        ];
    }
  }
}
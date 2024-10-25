import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MainIndicator from "./Indicators/MainIndicator";

const IndicatorsGroup = ({ role } : { role: string}) => {
    var titles = [];
    switch (role) {
        case "admin":
            titles = ["Próxima Mensalidade", "Mensalidades pendentes", "Alunos ativos", "Mensagens"];
            break;
        case "teacher":
            titles = ["Atividades Pendentes", "Atividades concluídas", "Avaliações", "Mensagens"];
            break;
        case "student":
            titles = ["Atividades Pendentes", "Novas atividades", "Avaliações", "Mensagens"];
            break;
        default:
            titles = ["Atividades Pendentes", "Mensalidades pendentes", "Avaliações", "Mensagens"];
            break;
    }
    
    return (
        <div className="w-[100%] flex justify-center mx-auto align-middle">
            <ScrollArea className="p-4 overflow-x-auto whitespace-nowrap group dark:text-zinc-50">
                <div className="flex space-x-4">
                    <MainIndicator title={titles[0]} number={5} colorStyle={{ "light": "via-red-300/40", "dark": "dark:via-red-700/40" }} />
                    <MainIndicator title={titles[1]} number={2} colorStyle={{ "light": "via-yellow-300/40", "dark": "dark:via-yellow-700/40" }} />
                    <MainIndicator title={titles[2]} number={1} colorStyle={{ "light": "via-green-300/40", "dark": "dark:via-green-700/40" }} />
                    <MainIndicator title={titles[3]} number={10} colorStyle={{ "light": "via-primary/40", "dark": "dark:via-primary/40" }} />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

export default IndicatorsGroup;

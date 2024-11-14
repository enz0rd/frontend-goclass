import { ScrollArea } from "@/components/ui/scroll-area";
import Activity from "./Indicators/Activity";
import { BookOpenText } from 'lucide-react'
import { NavLink } from "react-router-dom";
import { getRole } from "../utils";

const ActivitiesGroup = () => {
    let role = getRole();
    role === 'admin' ? role = 'instituicao' : role = role;

    return (
        <div className="justify-center align-middle pb-6">
            <div className="mx-auto flex flex-col gap-3">
                <div className="flex justify-between align-middle">
                    <h1 className="text-2xl lg:text-3xl md:text-4xl dark:text-zinc-50">Últimas atividades:</h1>
                    <NavLink to={`/${role}/atividades`} className="text-muted-foreground my-auto">Ver mais</NavLink>
                </div>
                <ScrollArea className="p-4 overflow-x-auto whitespace-nowrap group dark:text-zinc-50">
                    <div className="flex flex-col gap-2">
                        <Activity to={`/${role}/atividades/${Math.random()}`} title="Nova Atividade" icon={<BookOpenText className="m-auto" />}  time='10:00'/>
                        <Activity to={`/${role}/atividades/${Math.random()}`} title="Nova Atividade" icon={<BookOpenText className="m-auto" />}  time='10:00'/>
                        <Activity to={`/${role}/atividades/${Math.random()}`} title="Nova Atividade" icon={<BookOpenText className="m-auto" />}  time='10:00'/>
                        <Activity to={`/${role}/atividades/${Math.random()}`} title="Nova Atividade" icon={<BookOpenText className="m-auto" />}  time='10:00'/>
                        <Activity to={`/${role}/atividades/${Math.random()}`} title="Nova Atividade" icon={<BookOpenText className="m-auto" />}  time='10:00'/>
                    </div>
                </ScrollArea>
            </div>
        </div>

    )
}

export default ActivitiesGroup;

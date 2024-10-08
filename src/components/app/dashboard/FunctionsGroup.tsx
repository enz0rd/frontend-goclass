import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Function from "./Indicators/Function";
import { MailIcon, CheckCircle, GraduationCap, BookOpenText } from 'lucide-react'

const FunctionsGroup = () => {
    return (
        <div className="justify-center align-middle pb-6">
            <div className="mx-auto flex flex-col gap-3">
                <h1 className="text-2xl lg:text-3xl md:text-4xl dark:text-zinc-50">Funções:</h1>
                <ScrollArea className="p-4 overflow-x-auto whitespace-nowrap group dark:text-zinc-50">
                    <div className="flex space-x-4 justify-center flex-grow">
                        <Function to="/atividades" title="Atividades" icon={<BookOpenText size={50} className="my-auto" />} colorStyle={{ "light": "via-red-300/40", "dark": "dark:via-red-700/40" }} />
                        <Function to="/notas" title="Notas" icon={<GraduationCap size={50} className="my-auto" />} colorStyle={{ "light": "via-yellow-300/40", "dark": "dark:via-yellow-700/40" }} />
                        <Function to="/entregar" title="Entregar" icon={<CheckCircle size={50} className="my-auto" />} colorStyle={{ "light": "via-green-300/40", "dark": "dark:via-green-700/40" }} />
                        <Function to="/mensagens" title="Mensagens" icon={<MailIcon size={50} className="my-auto" />} colorStyle={{ "light": "via-primary/40", "dark": "dark:via-primary/40" }} />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>

    )
}

export default FunctionsGroup;

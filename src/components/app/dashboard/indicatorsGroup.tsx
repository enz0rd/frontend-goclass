import MainIndicator from "./Indicators/MainIndicator";

const IndicatorsGroup = () => {
    return (
        <div className="flex space-x-4">
            <MainIndicator title="Atividades Pendentes" number={5} colorStyle={{ "light": "via-red-300/40", "dark": "dark:via-red-700/40" }} />
            <MainIndicator title="Novas atividades" number={2} colorStyle={{ "light": "via-yellow-300/40", "dark": "dark:via-yellow-700/40" }} />
            <MainIndicator title="Avaliações" number={1} colorStyle={{ "light": "via-green-300/40", "dark": "dark:via-green-700/40" }} />
            <MainIndicator title="Mensagens" number={10} colorStyle={{ "light": "via-primary/40", "dark": "dark:via-primary/40" }} />
        </div>
    )
}

export default IndicatorsGroup;

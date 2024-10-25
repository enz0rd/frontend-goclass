import { DatePickerWithRange } from "@/components/app/grades/DatePicker";
import GradeIndicator from "@/components/app/grades/GradeIndicators";
import { DateRange } from "react-day-picker";

const GradesPage = () => {

  const subjects = [
    {
      name: "Matemática",
      grade: "A",
      percentage: 92,
      history: [
        { activity: 1, name: "Atividade de 1", score: 7.5 },
        { activity: 2, name: "Atividade de 2", score: 9.0 },
        { activity: 3, name: "Atividade de 3", score: 8.5 },
        { activity: 4, name: "Atividade de 4", score: 9.2 },
        { activity: 5, name: "Atividade de 5", score: 9.5 },
        { activity: 6, name: "Atividade de 6", score: 10 },
      ],
    },
    {
      name: "Ciências",
      grade: "B+",
      percentage: 87,
      history: [
        { activity: 1, name: "Atividade de 1", score: 8.2 },
        { activity: 2, name: "Atividade de 2", score: 8.5 },
        { activity: 3, name: "Atividade de 3", score: 8.8 },
        { activity: 4, name: "Atividade de 4", score: 8.8 },
      ],
    },
    {
      name: "Inglês",
      grade: "A-",
      percentage: 90,
      history: [
        { activity: 1, name: "Atividade de 1", score: 9.1 },
        { activity: 2, name: "Atividade de 2", score: 8.9 },
        { activity: 3, name: "Atividade de 3", score: 9.2 },
        { activity: 4, name: "Atividade de 4", score: 10 },
      ],
    },
    {
      name: "História",
      grade: "B",
      percentage: 84,
      history: [
        { activity: 1, name: "Atividade de 1", score: 9.0 },
        { activity: 4, name: "Atividade de 2", score: 8.2 },
      ],
    },
    {
      name: "Artes",
      grade: "C",
      percentage: 98,
      history: [
        { activity: 1, name: "Atividade de 1", score: 4.0 },
        { activity: 2, name: "Atividade de 2", score: 7.0 },
        { activity: 4, name: "Atividade de 3", score: 5.0 },
      ],
    },
    {
      name: "Educação Física",
      grade: "A",
      percentage: 93,
      history: [
        { activity: 1, name: "Atividade de 1", score: 8.5 },
        { activity: 2, name: "Atividade de 2", score: 7.5 },
        { activity: 3, name: "Atividade de 3", score: 9.4 },
        { activity: 4, name: "Atividade de 4", score: 9.4 },
      ],
    },
  ];

  const handleDateFilter = (date: DateRange | undefined) => {
    alert(JSON.stringify(date))
  }

  return (
    <div className="group grow p-4 dark:text-zinc-50 container">
      <h1 className="text-4xl font-bold mb-5">Notas</h1>
      <p>Visualizando o seu desempenho escolar com base no período escolhido</p>
      <div className="mt-5 flex flex-col  gap-2">
        <span className="text-sm mx-auto">Filtrar período</span>
        <div className="mx-auto">
          <DatePickerWithRange onChange={handleDateFilter} />
        </div>
      </div>
      <GradeIndicator subjects={subjects} />
    </div>
  );
};

export default GradesPage;

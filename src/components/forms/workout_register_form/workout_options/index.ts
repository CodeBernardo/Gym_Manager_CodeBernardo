import { SelectOpt } from "../../inputs";

// const goals: SelectOpt[] = [
//   {
//     value:
//       "Levantamento de cargas mais pesadas, com períodos de descanso mais longos entre as séries.",
//     label: "Força",
//   },
//   {
//     value:
//       "Levantamento de cargas moderadas a pesadas para promover o aumento do tamanho muscular.",
//     label: "Hipertrofia",
//   },
//   {
//     value:
//       "Levantamento de cargas mais leves com maior número de repetições para melhorar a resistência muscular.",
//     label: "Resistência",
//   },
//   {
//     value:
//       "Pode envolver movimentos rápidos e dinâmicos com menor resistência para melhorar a resistência cardiovascular.",
//     label: "Cardio",
//   },
//   {
//     value: "Movimentos explosivos para desenvolver a potência muscular.",
//     label: "Potência",
//   },
// ];

const reps: SelectOpt[] = [
  { value: "4 x 1-6", label: "Força" },
  { value: "4 x 8-12", label: "Hipertrofia" },
  { value: "3 x 15+", label: "Resisência Múscular" },
  { value: "3 x 12-20", label: "Cardio" },
  { value: "3 x 1-5", label: "Potência Muscular" },
];

const days: SelectOpt[] = [
  { value: "Sunday", label: "Domingo" },
  { value: "Monday", label: "Segunda-feira" },
  { value: "Tuesday", label: "Terça-feira" },
  { value: "Wednesday", label: "Quarta-feira" },
  { value: "Thursday", label: "Quinta-feira" },
  { value: "Friday", label: "Sexta-feira" },
  { value: "Saturday", label: "Sábado" },
];

export { reps, days };

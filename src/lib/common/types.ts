
import { Period, Parameter, PeriodParameter } from "./interfaces";

export const PeriodTable: Period[] = [
    { id: "P1", name: "1週" },
    { id: "P2", name: "4週" },
    { id: "P3", name: "4週SP" },
    { id: "P4", name: "中間前追い込み" },
    { id: "P5", name: "中間" },
    { id: "P6", name: "最終まで6週" },
    { id: "P7", name: "最終まで6週SP" },
    { id: "P8", name: "最終まで4週" },
    { id: "P9", name: "最終まで4週SP" },
    { id: "P10", name: "最終まで3週" },
    { id: "P11", name: "最終まで3週SP" },
    { id: "P12", name: "追い込み"}
  ];


export const ParameterTable: Parameter[] = [
  { id: "A", value: 60 },
  { id: "B", value: 60 },
  { id: "C", value: 90 },
  { id: "D", value: 90 },
  { id: "E", value: 20 },
  { id: "F", value: 110 },
  { id: "G", value: 170 },
  { id: "H", value: 120 },
  { id: "I", value: 200 },
  { id: "J", value: 150 },
  { id: "K", value: 220 },
  { id: "L", value: 165 }
]


export const currentPeriodParameterTable: PeriodParameter[] = [
    { periodId: "P1", valueId: "A", nextPeriodId: "P3" },
    { periodId: "P2", valueId: "B", nextPeriodId: "P4" },
    { periodId: "P3", valueId: "C", nextPeriodId: "P4" },
    { periodId: "P4", valueId: "D", nextPeriodId: "P5" },
    { periodId: "P5", valueId: "E", nextPeriodId: "P7" },
    { periodId: "P6", valueId: "F", nextPeriodId: "P9" },
    { periodId: "P7", valueId: "G", nextPeriodId: "P9" },
    { periodId: "P8", valueId: "H", nextPeriodId: "P11" },
    { periodId: "P9", valueId: "I", nextPeriodId: "P11" },
    { periodId: "P10", valueId: "J", nextPeriodId: "P12" },
    { periodId: "P11", valueId: "K", nextPeriodId: "P12" },
    { periodId: "P12", valueId: "L" } // 最後の期間には次の期間がない
  ];



// function calculateTotalValueFromChain(startPeriodId: string): number {
//     let totalValue = 0;
//     let currentPeriodId: string | undefined = startPeriodId;
  
//     while (currentPeriodId) {
//       const periodParameter = currentPeriodParameterTable.find(pp => pp.periodId === currentPeriodId);
//       if (periodParameter) {
//         const parameter = parameterTable.find(p => p.id === periodParameter.valueId);
//         if (parameter) {
//           totalValue += parameter.value;
//         }
//         currentPeriodId = periodParameter.nextPeriodId;
//       } else {
//         break; // 見つからない場合はループを終了
//       }
//     }
  
//     return totalValue;
//   }
  
//   // 使用例
//   const startPeriodId = "P1"; // 開始期間ID
//   const totalValue = calculateTotalValueFromChain(startPeriodId);
  
//   console.log(`Total Value: ${totalValue}`);
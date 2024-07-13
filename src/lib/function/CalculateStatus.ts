import { RecoilValue, useRecoilValue, useRecoilState } from 'recoil';
import { 
    currentVoState, 
    currentDaState, 
    currentViState,
    afterVoState,
    afterDaState,
    afterViState,
    nextVoState,
    nextDaState,
    nextViState,
    nextNextVoState,
    nextNextDaState,
    nextNextViState,
    nextNextNextVoState,
    nextNextNextDaState,
    nextNextNextViState
 } from '../../state/StatusState';
import { voLessonBonusState, daLessonBonusState, viLessonBonusState } from '../../state/LessonBonusState';
import {PeriodTable,ParameterTable, currentPeriodParameterTable} from '../../lib/common/types'


export const useAfterLessonStatus = (selectedPeriod: string, selectedLessonType:string, aggregatedValues:{[key: string]: number}) => {
    const params = currentPeriodParameterTable.find(period => period.periodId === selectedPeriod);
    const rate = ParameterTable.find(parameter=>parameter.id === params?.valueId)
    const period = PeriodTable.find(period => period.id === selectedPeriod)
    let key = ""
    if(period?.name.includes("SP")){
        key += "SP"
    }else{
        key+= "通常"
    }
    key += "-" + selectedLessonType
    const aggregatedValue = aggregatedValues[key] ?? 0;
    // 現在のステータス
    const currentVo = useRecoilValue(currentVoState);
    const currentDa = useRecoilValue(currentDaState);
    const currentVi = useRecoilValue(currentViState);
  
    // 各レスボ
    const voLessonBonus = useRecoilValue(voLessonBonusState);
    const daLessonBonus = useRecoilValue(daLessonBonusState);
    const viLessonBonus = useRecoilValue(viLessonBonusState);

    let adjustedVoStatus = currentVo;
    let adjustedDaStatus = currentDa;
    let adjustedViStatus = currentVi;
  
    if (selectedLessonType === "Vocal" && params?.periodId !== "P5"){
        let inc = (rate?.value ?? 0) + ((rate?.value ?? 0) * voLessonBonus);
        adjustedVoStatus += inc +aggregatedValue;
    }else if(selectedLessonType === "Dance" && params?.periodId !== "P5"){
        let inc = (rate?.value ?? 0) + ((rate?.value ?? 0) * daLessonBonus);
        adjustedDaStatus += inc + aggregatedValue;
    }else if(selectedLessonType === "Visual" && params?.periodId !== "P5"){
        let inc = (rate?.value ?? 0) + ((rate?.value ?? 0) * viLessonBonus);
        adjustedViStatus += inc + aggregatedValue;
    }

    // 中間追い込み
    if(params?.periodId === "P4"){
        let incVo = (rate?.value ?? 0) + ((rate?.value ?? 0) * voLessonBonus);
        let incDa = (rate?.value ?? 0) + ((rate?.value ?? 0) * daLessonBonus);
        let incVi = (rate?.value ?? 0) + ((rate?.value ?? 0) * viLessonBonus);
        adjustedVoStatus +=  incVo +aggregatedValue;
        adjustedDaStatus += incDa + aggregatedValue;
        adjustedViStatus += incVi + aggregatedValue;
    }
    // 中間
    if(params?.periodId === "P5"){
        adjustedVoStatus += 20;
        adjustedDaStatus += 20;
        adjustedViStatus += 20;
    }
    // 最終追い込み
    if(params?.periodId === "P12"){
        let incVo = 145 + (145 * voLessonBonus);
        let incDa = 145 + (145 * daLessonBonus);
        let incVi = 145 + (145 * viLessonBonus);
        adjustedVoStatus +=  incVo +aggregatedValue;
        adjustedDaStatus += incDa + aggregatedValue;
        adjustedViStatus += incVi + aggregatedValue;
    }


    adjustedVoStatus = Math.min(Math.floor(adjustedVoStatus), 1500);
    adjustedDaStatus = Math.min(Math.floor(adjustedDaStatus), 1500);
    adjustedViStatus = Math.min(Math.floor(adjustedViStatus), 1500);
    // 値をセット
    return { afterVo: adjustedVoStatus, afterDa: adjustedDaStatus, afterVi: adjustedViStatus, nextPeriodId: params?.nextPeriodId };
  };
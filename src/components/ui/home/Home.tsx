import React,{ useEffect, useState} from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Avatar, Button,Drawer} from '@material-ui/core';
import { rateOfIncreaseState } from '../../../state/RateOfIncreaseState';
import RateOfIncreaseComponents from './home_components/RateOfIncreaseComponents';
import styles from "./styles/Home.module.css";
import AggregatedTable from './home_components/AggregatedTable';
import { daLessonBonusState, viLessonBonusState, voLessonBonusState } from '../../../state/LessonBonusState';
import LessonBonusComponents from './home_components/LessonBonusComponents';
import CurrentStatusComponents from './home_components/CurrentStatusComponents';
import { currentPeriodParameterTable, PeriodTable } from '../../../lib/common/types';
import PeriodDropdown from './home_components/PeriodDropdown';
import LessonTypeDropdown from './home_components/LessonTypeDropdown';
import IncreaseStatusComponents from './home_components/IncreaseStatusComponent'; 
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
 } from '../../../state/StatusState';
import { useAfterLessonStatus } from '../../../lib/function/CalculateStatus';


const Home:React.FC = () => {
    // 期間
    const [selectedPeriod, setSelectedPeriod] = useState<string>(PeriodTable[0].id);
    const [selectedLessonType, setSelectedLessonType] = useState<string>("Vocal");
    const [selectedNextLessonType, setSelectedNextLessonType] = useState<string>("Vocal");
    const [selectedNextNextLessonType, setSelectedNextNextLessonType] = useState<string>("Vocal");
    const [selectedNextNextNextLessonType, setSelectedNextNextNextLessonType] = useState<string>("Vocal");
    const rateOfIncrease = useRecoilValue(rateOfIncreaseState);

    const setAfterVoState = useSetRecoilState(afterVoState);
    const setAfterDaState = useSetRecoilState(afterDaState);
    const setAfterViState = useSetRecoilState(afterViState);

    // 同種のtypeとlessonごとにnumberを集計する関数
    const aggregateValues = () => {
        const aggregation: { [key: string]: number } = {};

        rateOfIncrease.forEach(item => {
        const key = `${item.type}-${item.lesson}`;
        if (!aggregation[key]) {
            aggregation[key] = 0;
        }
        aggregation[key] += item.number;
        });

        return aggregation;
    };

    const aggregatedValues = aggregateValues();
    
    // レッスン後ステータス
    const { afterVo, afterDa, afterVi, nextPeriodId } = useAfterLessonStatus(selectedPeriod, selectedLessonType, aggregatedValues);
    useEffect(() => {
        setAfterVoState(afterVo);
        setAfterDaState(afterDa);
        setAfterViState(afterVi);
      }, [afterVo, afterDa, afterVi, setAfterVoState, setAfterDaState, setAfterViState]);
    
    // 次回レッスン
    const nextPeriodParams =  currentPeriodParameterTable.find(period => period.periodId === nextPeriodId);
    const nextPeriod = PeriodTable.find(period => period.id === nextPeriodParams?.periodId)
    // 次々回レッスン
    const nextNextPeriodParams =  currentPeriodParameterTable.find(period => period.periodId === nextPeriodParams?.nextPeriodId);
    const nextNextPeriod = PeriodTable.find(period => period.id === nextNextPeriodParams?.periodId)
    // 次々次回レッスン
    const nextNextNextPeriodParams =  currentPeriodParameterTable.find(period => period.periodId === nextNextPeriodParams?.nextPeriodId);
    const nextNextNextPeriod = PeriodTable.find(period => period.id === nextNextNextPeriodParams?.periodId)

    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.home_body_container}>
                    {rateOfIncrease.map((_, index) => (
                        <RateOfIncreaseComponents key={index} id={index + 1} />
                    ))}
                </div>
                <AggregatedTable aggregatedValues={aggregatedValues} />
                <div className={styles.home_body_container}>
                    <LessonBonusComponents/>
                </div>
                <div className={styles.home_body_container}>
                    <CurrentStatusComponents/>
                </div>
                <div>
                    <PeriodDropdown selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
                    <LessonTypeDropdown selectedLessonType={selectedLessonType} setSelectedLessonType={setSelectedLessonType}/>
                </div>
                <div className={styles.home_body_container_output}>
                <div className={styles.output_title}>レッスン後</div>
                    <IncreaseStatusComponents
                        vocalValue={afterVo}
                        danceValue={afterDa}
                        visualValue={afterVi}
                    />
                </div>
                <LessonTypeDropdown selectedLessonType={selectedNextLessonType} setSelectedLessonType={setSelectedNextLessonType}/>
               
                
                {nextPeriodParams && (
                    <>
                        <div className={styles.home_body_container_output}>
                        <div className={styles.output_title}>◇未実装◇次回({nextPeriod?.name})</div>
                        <IncreaseStatusComponents
                             vocalValue={afterVo}
                             danceValue={afterDa}
                             visualValue={afterVi}
                        />
                        </div>
                    </>
                    )}
                <LessonTypeDropdown selectedLessonType={selectedNextNextLessonType} setSelectedLessonType={setSelectedNextNextLessonType}/>
                {nextNextPeriodParams && (
                    <>
                        <div className={styles.home_body_container_output}>
                        <div className={styles.output_title}>◇未実装◇次々回({nextNextPeriod?.name})</div>
                        <IncreaseStatusComponents
                            vocalValue={afterVo}
                            danceValue={afterDa}
                            visualValue={afterVi}
                        />
                        </div>
                    </>
                    )}
                <LessonTypeDropdown selectedLessonType={selectedNextNextNextLessonType} setSelectedLessonType={setSelectedNextNextNextLessonType}/>
                {nextNextNextPeriodParams && (
                    <>
                        <div className={styles.home_body_container_output}>
                        <div className={styles.output_title}>◇未実装◇次々次回({nextNextNextPeriod?.name})</div>
                        <IncreaseStatusComponents
                            vocalValue={afterVo}
                            danceValue={afterDa}
                            visualValue={afterVi}
                        />
                        </div>
                    </>
                    )}
            </div>
        </>
    )
}

export default Home

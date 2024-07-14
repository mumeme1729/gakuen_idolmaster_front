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
 } from '../../../state/StatusState';
import { useAfterLessonStatus } from '../../../lib/function/CalculateStatus';


const Home:React.FC = () => {
    // 期間
    const [selectedPeriod, setSelectedPeriod] = useState<string>(PeriodTable[0].id);
    const [selectedLessonType, setSelectedLessonType] = useState<string>("Vocal");
    const [selectedNextLessonType, setSelectedNextLessonType] = useState<string>("Vocal");
    const [selectedNextNextLessonType, setSelectedNextNextLessonType] = useState<string>("Vocal");
    const [selectedNextNextNextLessonType, setSelectedNextNextNextLessonType] = useState<string>("Vocal");
    const [afterStatusSum, setAfterStatusSum] = useState<number>(0);
    const [nextStatusSum, setNextStatusSum] = useState<number>(0);
    const [nextNextStatusSum, setNextNextStatusSum] = useState<number>(0);
    const [nextNextNextStatusSum, setNextNextNextStatusSum] = useState<number>(0);
    
    const rateOfIncrease = useRecoilValue(rateOfIncreaseState);

    // 現在のステータス
    const currentVo = useRecoilValue(currentVoState);
    const currentDa = useRecoilValue(currentDaState);
    const currentVi = useRecoilValue(currentViState);

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
    const { adjustedVoStatus: afterVo, adjustedDaStatus: afterDa, adjustedViStatus: afterVi } = useAfterLessonStatus(
        currentVo,
        currentDa,
        currentVi,
        selectedPeriod, 
        selectedLessonType, 
        aggregatedValues);

    
    // 次回レッスン
    const params = currentPeriodParameterTable.find(period => period.periodId === selectedPeriod);
    const nextPeriodParams =  currentPeriodParameterTable.find(period => period.periodId === params?.nextPeriodId);
    const nextPeriod = PeriodTable.find(period => period.id === nextPeriodParams?.periodId)
    const nextLesson = useAfterLessonStatus(
        afterVo,
        afterDa,
        afterVi,
        nextPeriodParams?.periodId ?? '',
        selectedNextLessonType,
        aggregatedValues
      );

    // 次々回レッスン
    const nextNextPeriodParams =  currentPeriodParameterTable.find(period => period.periodId === nextPeriodParams?.nextPeriodId);
    const nextNextPeriod = PeriodTable.find(period => period.id === nextNextPeriodParams?.periodId)
    const nextNextLesson = useAfterLessonStatus(
        nextLesson.adjustedVoStatus,
        nextLesson.adjustedDaStatus,
        nextLesson.adjustedViStatus,
        nextNextPeriodParams?.periodId ?? '',
        selectedNextNextLessonType,
        aggregatedValues
      );

    // 次々次回レッスン
    const nextNextNextPeriodParams =  currentPeriodParameterTable.find(period => period.periodId === nextNextPeriodParams?.nextPeriodId);
    const nextNextNextPeriod = PeriodTable.find(period => period.id === nextNextNextPeriodParams?.periodId)
    const nextNextNextLesson = useAfterLessonStatus(
        nextNextLesson.adjustedVoStatus,
        nextNextLesson.adjustedDaStatus,
        nextNextLesson.adjustedViStatus,
        nextNextNextPeriodParams?.periodId ?? '',
        selectedNextNextNextLessonType,
        aggregatedValues
    );


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
                    <div className={styles.status_field_selector}>
                        <div className={styles.total_text}>
                            合計: {currentVo+currentDa+currentVi}
                        </div>
                    </div>
                    <CurrentStatusComponents/>
                </div>
                <div>
                    <PeriodDropdown selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
                    <LessonTypeDropdown selectedLessonType={selectedLessonType} setSelectedLessonType={setSelectedLessonType}/>
                </div>
                <div className={styles.home_body_container_output}>
                <div className={styles.output_title}>レッスン後予想ステータス</div>
                    <div className={styles.status_field_selector}>
                        <div className={styles.total_text}>
                            合計: {afterStatusSum}
                        </div>
                    </div>
                    <IncreaseStatusComponents
                            vocalValue={afterVo}
                            danceValue={afterDa}
                            visualValue={afterVi}
                            preVocalValue={currentVo}
                            preDanceValue={currentDa}
                            preVisualValue={currentVi}
                            setStatusSum={setAfterStatusSum}
                        />
                </div>
                {nextPeriodParams && (
                    <>
                        <div className={styles.home_body_container_output}>
                        <div className={styles.output_title}>次回({nextPeriod?.name})後予想ステータス</div>
                        <div className={styles.status_field_selector}>
                            {
                                nextPeriodParams.periodId === "P5"
                                ?null
                                :
                                <LessonTypeDropdown
                                    selectedLessonType={selectedNextLessonType}
                                    setSelectedLessonType={setSelectedNextLessonType}
                                />
                            }
                            <div className={styles.total_text}>
                                合計: {nextStatusSum}
                            </div>
                        </div>
                        <IncreaseStatusComponents
                             vocalValue={nextLesson.adjustedVoStatus}
                             danceValue={nextLesson.adjustedDaStatus}
                             visualValue={nextLesson.adjustedViStatus}
                             preVocalValue={afterVo}
                             preDanceValue={afterDa}
                             preVisualValue={afterVi}
                             setStatusSum={setNextStatusSum}
                        />
                        </div>
                    </>
                    )}
                
                {nextNextPeriodParams && (
                    <>
                        <div className={styles.home_body_container_output}>
                        <div className={styles.output_title}>次々回({nextNextPeriod?.name})後予想ステータス</div>
                        <div className={styles.status_field_selector}>
                            {
                                nextNextPeriodParams.periodId === "P5"
                                ?null
                                :
                                <LessonTypeDropdown
                                    selectedLessonType={selectedNextNextLessonType}
                                    setSelectedLessonType={setSelectedNextNextLessonType}
                                />
                            }
                            <div className={styles.total_text}>
                                合計: {nextNextStatusSum}
                            </div>
                        </div>
                        <IncreaseStatusComponents
                            vocalValue={nextNextLesson.adjustedVoStatus}
                            danceValue={nextNextLesson.adjustedDaStatus}
                            visualValue={nextNextLesson.adjustedViStatus}
                            preVocalValue={nextLesson.adjustedVoStatus}
                            preDanceValue={nextLesson.adjustedDaStatus}
                            preVisualValue={nextLesson.adjustedViStatus}
                            setStatusSum={setNextNextStatusSum}
                        />
                        </div>
                    </>
                    )}
                {nextNextNextPeriodParams && (
                    <>
                        <div className={styles.home_body_container_output}>
                        <div className={styles.output_title}>次々々回({nextNextNextPeriod?.name})後予想ステータス</div>
                        <div className={styles.status_field_selector}>
                            {
                                nextNextNextPeriodParams.periodId === "P5"
                                ?null
                                :
                                <LessonTypeDropdown
                                    selectedLessonType={selectedNextNextNextLessonType}
                                    setSelectedLessonType={setSelectedNextNextNextLessonType}
                                />
                            }
                            <div className={styles.total_text}>
                                合計: {nextNextNextStatusSum}
                            </div>
                        </div>
                        <IncreaseStatusComponents
                            vocalValue={nextNextNextLesson.adjustedVoStatus}
                            danceValue={nextNextNextLesson.adjustedDaStatus}
                            visualValue={nextNextNextLesson.adjustedViStatus}
                            preVocalValue={nextNextLesson.adjustedVoStatus}
                            preDanceValue={nextNextLesson.adjustedDaStatus}
                            preVisualValue={nextNextLesson.adjustedViStatus}
                            setStatusSum={setNextNextNextStatusSum}
                        />
                        </div>
                    </>
                    )}
            </div>
        </>
    )
}

export default Home

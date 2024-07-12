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
import { PeriodTable } from '../../../lib/common/types';
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


const Home:React.FC = () => {
    // 期間
    const [selectedPeriod, setSelectedPeriod] = useState<string>(PeriodTable[0].id);
    const [selectedLessonType, setSelectedLessonType] = useState<string>("Vocal");
    const rateOfIncrease = useRecoilValue(rateOfIncreaseState);
    // ボーカルレスぼ
    const voLessonBonuse = useRecoilValue(voLessonBonusState);
    // ダンスレスボ
    const daLessonBonuse = useRecoilValue(daLessonBonusState);
    // ビジュアルレスボ
    const viLessonBonuse = useRecoilValue(viLessonBonusState);
    // 現在のボーカルステータス
    const currentVo = useRecoilValue(currentVoState);
    // 現在のダンスステータス
    const currentDa = useRecoilValue(currentDaState);
    // 現在のビジュアルステータス
    const currentVi = useRecoilValue(currentViState);

    // レッスン後ボーカルステータス
    const afterVo = useRecoilValue(afterVoState);
    // レッスン後ダンスステータス
    const afterDa = useRecoilValue(afterDaState);
    // レッスン後ビジュアルステータス
    const afterVi = useRecoilValue(afterViState);
    

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
            </div>
        </>
    )
}

export default Home

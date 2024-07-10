import React,{useEffect,useState }  from 'react'

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {supportCardsState} from '../../../state/SupportCardsState'
import { useNavigate, useLocation } from "react-router-dom";
import SupportCardContainer from "./SupportCardContainer"
import styles from './styles/SupportCard.module.css';

const SupportCardList:React.FC = () => {
    const navigate = useNavigate();
    const supportCards = useRecoilValue(supportCardsState);
    
    return (
        <>
           <div className={styles.card_list_container}>
           {supportCards && supportCards.map((supportCard) => (
                <div key={supportCard.id} >
                {supportCard && <SupportCardContainer supportCard={supportCard} />}
                </div>
            ))}
            </div>
        </>
    )
}

export default SupportCardList

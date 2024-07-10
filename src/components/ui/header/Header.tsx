import React,{useEffect, useState} from 'react'
import styles from "./styles/Header.module.css";
import HeaderDrawer from './HeaderDrawer';

import {RecoilRoot, useSetRecoilState} from "recoil"
import {supportCardsState} from '../../../state/SupportCardsState'
import { getSupportCards } from '../../../lib/api/SupportCardApi';

const Header:React.FC = () => {
    const setSupportCards = useSetRecoilState(supportCardsState);
    useEffect(() => {
        console.log("useEffect ヘッダー")
        const fetchLoader = async () => {
            try {
                const supportCards = await getSupportCards();
                console.log(supportCards)
                setSupportCards(supportCards);
            } catch (error) {
                alert(error)
            }
        };
        fetchLoader();
    }, []);

    return (
        <>
            <div className={styles.header_container}>
                <div className={styles.header_body}>
                    <div className={styles.header_body_left}>
                        <HeaderDrawer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header



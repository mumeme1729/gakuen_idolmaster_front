import React,{ useEffect, useState} from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Avatar, Button,Drawer} from '@material-ui/core';
import styles from "./styles/Home.module.css";



const Home:React.FC = () => {


    // useEffect(()=>{
    //     const fetchLoader = async ()=>{
    //         try {
    //             const loginUserInfoRes = await getLoginUserinfo()
    //             setLoginUserInfo(loginUserInfoRes)
    //             const loginUserTotalRecord = await getLoginUserTotalRecord(false);
    //             setLoginUserTotalRecord(loginUserTotalRecord)
    //             if(loginUser?.nick_name === null){
    //                 setIsProfileModalOpen(true);
    //             }else{
    //                 setIsProfileModalOpen(false);
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //    fetchLoader()
    // },[]);

    return (
        <>
            <div>
                準備中
            </div>
        </>
    )
}

export default Home

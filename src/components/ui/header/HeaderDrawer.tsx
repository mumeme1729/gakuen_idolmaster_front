import React,{useEffect, useState} from 'react'
import { Drawer} from '@material-ui/core';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles/Header.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CropPortraitRoundedIcon from '@mui/icons-material/CropPortraitRounded';

import { useSetRecoilState, useRecoilValue } from 'recoil';

const HeaderDrawer:React.FC = () => {
    const [isOpenMenu,setOpenMenu]=useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    return(
        <>
            <div onClick={()=>setOpenMenu(true)}>
                <MenuIcon fontSize="large"/>
            </div>
            <Drawer
                anchor="left"
                open={isOpenMenu}
                onClose={() => {
                    setOpenMenu(false)
                }}
            >   

                    <div className={styles.drawer}>
                    <div className={styles.header_navbar_menu} onClick={()=>{setOpenMenu(false);navigate("/")}}>
                        <HomeIcon/><h4 className={styles.header_navbar_menu_title}>ホーム</h4>
                    </div>
                    <div className={styles.header_navbar_menu} onClick={()=>{navigate("/support_cards");window.scrollTo(0, 0);setOpenMenu(false)}}>
                            <CropPortraitRoundedIcon/><h4 className={styles.header_navbar_menu_title}>サポカ一覧</h4>
                        </div>
                    </div>
            </Drawer>
        </>
    )
}

export default HeaderDrawer
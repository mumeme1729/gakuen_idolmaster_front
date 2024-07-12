
import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { currentVoState, currentDaState, currentViState } from '../../../../state/StatusState';
import styles from "../styles/Home.module.css";

  

  
  const CurrentStatusComponents: React.FC = () => {
    // ボーカルステータス
    const [currentVo, setCurrentVo] = useRecoilState(currentVoState);
    // ダンスステータス
    const [currentDa, setCurrentDa] = useRecoilState(currentDaState);
    // ビジュアルステータス
    const [currentVi, setCurrentVi] = useRecoilState(currentViState);
  
    const handleCurrentVoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentVo(Number(event.target.value));
    };
  
    const handleCurrentDaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentDa(Number(event.target.value));
    };

    const handleCurrentViChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentVi(Number(event.target.value));
    };
  
    return (
      <div className={styles.rate_of_inc_container}>
        <div className={styles.selector_container}>
          <TextField
            type="number"
            label="現在Voステ"
            defaultValue={currentVo}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
            onChange={handleCurrentVoChange}
          />
          <TextField
            type="number"
            label="現在Daステ"
            variant="standard"
            defaultValue={currentDa}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
            onChange={handleCurrentDaChange}
          />
          <TextField
            type="number"
            label="現在Viステ"
            defaultValue={currentVi}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
            onChange={handleCurrentViChange}
          />
        </div>
      </div>
    );
  };
  
  export default  CurrentStatusComponents;
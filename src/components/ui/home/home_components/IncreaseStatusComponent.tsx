
import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import styles from "../styles/Home.module.css";

interface IncreaseStatusProps {
  vocalValue: number;
  danceValue: number;
  visualValue: number;
  preVocalValue: number;
  preDanceValue: number;
  preVisualValue: number;
  setStatusSum: React.Dispatch<React.SetStateAction<number>>;
}

  
  const IncreaseStatusComponents: React.FC<IncreaseStatusProps> = ({ 
    vocalValue, 
    danceValue, 
    visualValue,
    preVocalValue, 
    preDanceValue, 
    preVisualValue,
    setStatusSum
  }) => {

    const MAX_VALUE = 1500;

    const adjustedVocalValue = Math.min(vocalValue, MAX_VALUE);
    const adjustedDanceValue = Math.min(danceValue, MAX_VALUE);
    const adjustedVisualValue = Math.min(visualValue, MAX_VALUE);
    setStatusSum(adjustedVocalValue+adjustedDanceValue+adjustedVisualValue);

    const vocalDiff = vocalValue - preVocalValue;
    const danceDiff = danceValue - preDanceValue;
    const visualDiff = visualValue - preVisualValue;

    const vocalOverflow = vocalValue > MAX_VALUE ? vocalValue - MAX_VALUE : 0;
    const danceOverflow = danceValue > MAX_VALUE ? danceValue - MAX_VALUE : 0;
    const visualOverflow = visualValue > MAX_VALUE ? visualValue - MAX_VALUE : 0;
   
    return (
      <div className={styles.rate_of_inc_container}>
        <div className={styles.selector_container}>
          <TextField
            type="number"
            label={`Vo(${vocalDiff >= 0 ? '+' : ''}${vocalDiff}) ${vocalOverflow > 0 ? `${vocalOverflow}over` : ''}`}
            value={adjustedVocalValue}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 1, width: 140 }}
          />
          <TextField
            type="number"
            label={`Da(${danceDiff >= 0 ? '+' : ''}${danceDiff}) ${danceOverflow > 0 ? `${danceOverflow}over` : ''}`}
            variant="standard"
            value={adjustedDanceValue}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 1, width: 140 }}
          />
          <TextField
            type="number"
            label={`Vi(${visualDiff >= 0 ? '+' : ''}${visualDiff}) ${visualOverflow > 0 ? `${visualOverflow}over` : ''}`}
            value={adjustedVisualValue}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 1, width: 120 }}
          />
        </div>
      </div>
    );
  };
  
  export default IncreaseStatusComponents;
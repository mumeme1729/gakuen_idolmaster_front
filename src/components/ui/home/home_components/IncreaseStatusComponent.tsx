
import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import styles from "../styles/Home.module.css";

interface IncreaseStatusProps {
  vocalValue: number;
  danceValue: number;
  visualValue: number;
}

  
  const IncreaseStatusComponents: React.FC<IncreaseStatusProps> = ({ vocalValue, danceValue, visualValue }) => {
   
    return (
      <div className={styles.rate_of_inc_container}>
        <div className={styles.selector_container}>
          <TextField
            type="number"
            label="Voステ"
            value={vocalValue}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
          />
          <TextField
            type="number"
            label="Daステ"
            variant="standard"
            value={danceValue}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
          />
          <TextField
            type="number"
            label="Viステ"
            value={visualValue}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
          />
        </div>
      </div>
    );
  };
  
  export default IncreaseStatusComponents;
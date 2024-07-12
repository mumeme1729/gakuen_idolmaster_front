
import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { voLessonBonusState, daLessonBonusState, viLessonBonusState } from '../../../../state/LessonBonusState';
import styles from "../styles/Home.module.css";

  
  interface RateOfIncreaseProps {
    id: number;
  }
  
  const LessonBonusComponents: React.FC = () => {
    // ボーカルレスぼ
    const [voLessonBonuse, setVoLessonBonuse] = useRecoilState(voLessonBonusState);
    // ダンスレスボ
    const [daLessonBonuse, setDaLessonBonuse] = useRecoilState(daLessonBonusState);
    // ビジュアルレスボ
    const [viLessonBonuse, setViLessonBonuse] = useRecoilState(viLessonBonusState);
  
    const handleVoLessonBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVoLessonBonuse(Number(event.target.value));
    };
  
    const handleDaLessonBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDaLessonBonuse(Number(event.target.value));
    };

    const handleViLessonBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setViLessonBonuse(Number(event.target.value));
    };
  
    return (
      <div className={styles.rate_of_inc_container}>
        <div className={styles.selector_container}>
          <TextField
            type="number"
            label="Voレスボ"
            defaultValue={voLessonBonuse}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
            onChange={handleVoLessonBonusChange}
          />
          <TextField
            type="number"
            label="Daレスボ"
            variant="standard"
            defaultValue={daLessonBonuse}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
            onChange={handleDaLessonBonusChange}
          />
          <TextField
            type="number"
            label="Viレスボ"
            defaultValue={viLessonBonuse}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 120 }}
            onChange={handleViLessonBonusChange}
          />
        </div>
      </div>
    );
  };
  
  export default  LessonBonusComponents;

import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { rateOfIncreaseState } from '../../../../state/RateOfIncreaseState';
import styles from "../styles/Home.module.css";
const lessons = [
    { value: 'SP', label: 'SP' },
    { value: '通常', label: '通常' },
  ];
  
  const lesson_types = [
    { value: 'Vocal', label: 'Vocal' },
    { value: 'Dance', label: 'Dance' },
    { value: 'Visual', label: 'Visual' },
  ];
  
  interface RateOfIncreaseProps {
    id: number;
  }
  
  const RateOfIncreaseComponents: React.FC<RateOfIncreaseProps> = ({ id }) => {
    const [rateOfIncrease, setRateOfIncrease] = useRecoilState(rateOfIncreaseState);

    const currentRate = rateOfIncrease.find(item => item.id === id);

    if (!currentRate) {
        return null; // 指定されたIDの状態が見つからない場合は何も表示しない
    }
  
    const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      const newState = rateOfIncrease.map(item =>
        item.id === id ? { ...item, type: event.target.value as string } : item
      );
      setRateOfIncrease(newState);
    };
  
    const handleLessonChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      const newState = rateOfIncrease.map(item =>
        item.id === id ? { ...item, lesson: event.target.value as string } : item
      );
      setRateOfIncrease(newState);
    };
  
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newState = rateOfIncrease.map(item =>
        item.id === id ? { ...item, number: parseInt(event.target.value) } : item
      );
      setRateOfIncrease(newState);
    };
  
    return (
      <div className={styles.rate_of_inc_container}>
        <div className={styles.selector_container}>
          <TextField
            select
            value={currentRate.type}
            SelectProps={{
              native: true,
            }}
            variant="standard"
            sx={{ display: 'flex',marginLeft:2,width: 90, minWidth: 90 }}
            onChange={handleTypeChange}
          >
            {lessons.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            select
            value={currentRate.lesson}
            SelectProps={{
              native: true,
            }}
            variant="standard"
            sx={{ display: 'flex', marginLeft: 3, width: 90, minWidth: 90 }}
            onChange={handleLessonChange}
          >
            {lesson_types.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            type="number"
            value={currentRate.number}
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ display: 'flex', marginLeft: 3, width: 90 }}
            onChange={handleNumberChange}
          />
        </div>
      </div>
    );
  };
  
  export default RateOfIncreaseComponents;
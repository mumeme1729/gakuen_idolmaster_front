// PeriodDropdown.tsx
import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { PeriodTable } from '../../../../lib/common/types';

interface PeriodDropdownProps {
  selectedPeriod: string;
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>;
}

const PeriodDropdown: React.FC<PeriodDropdownProps> = ({ selectedPeriod, setSelectedPeriod }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <TextField
      select
      label="期間"
      value={selectedPeriod}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      variant="standard"
      sx={{  margin: 1,minWidth: 100 }}
    >
      {PeriodTable.map((period) => (
        <option key={period.id} value={period.id}>
          {period.name}
        </option>
      ))}
    </TextField>
  );
};

export default PeriodDropdown;

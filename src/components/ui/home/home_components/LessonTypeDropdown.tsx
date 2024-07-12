
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

interface LessonTypeDropdownProps {
  selectedLessonType: string;
  setSelectedLessonType: React.Dispatch<React.SetStateAction<string>>;
}

const LessonTypeDropdown: React.FC<LessonTypeDropdownProps> = ({ selectedLessonType, setSelectedLessonType }) => {
  
    const lessonTypes = [
        { value: 'Vocal', label: 'Vocal' },
        { value: 'Dance', label: 'Dance' },
        { value: 'Visual', label: 'Visual' },
    ];
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLessonType(event.target.value);
  };

  
  return (
    <TextField
      select
      label="レッスン"
      value={selectedLessonType}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      variant="standard"
      sx={{ margin: 1, minWidth: 100 }}
    >
      {lessonTypes.map((lesson) => (
        <option key={lesson.label} value={lesson.value}>
          {lesson.value}
        </option>
      ))}
    </TextField>
  );
};

export default LessonTypeDropdown;

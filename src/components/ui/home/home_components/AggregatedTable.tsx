// AggregatedTable.tsx
import React from 'react';

interface AggregatedTableProps {
  aggregatedValues: { [key: string]: number };
}

const AggregatedTable: React.FC<AggregatedTableProps> = ({ aggregatedValues }) => {
  const lessons = ['SP', '通常'];
  const types = ['Vocal', 'Dance', 'Visual'];

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {types.map(type => (
            <th key={type}>{type}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lessons.map(lesson => (
          <tr key={lesson}>
            <td>{lesson}</td>
            {types.map(type => {
              const key = `${lesson}-${type}`;
              return (
                <td key={key}>{aggregatedValues[key] || 0}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AggregatedTable;

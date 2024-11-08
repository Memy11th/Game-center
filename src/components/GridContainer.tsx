import React from 'react';

export default function GridContainer({
  cols,
  children,
}: {
  cols: number;
  children: React.ReactNode;
}) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  }[cols];

  return (
    <div className={`grid ${gridClasses} gap-2 `}>
      {children}
    </div>
  );
}

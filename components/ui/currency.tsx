'use client';

import { FC, useState, useEffect } from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

interface CurrencyProps {
  value: string | number;
  lineThrough?: string;
}

const Currency: FC<CurrencyProps> = ({ value, lineThrough }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <p className="font-semibold">{formatter.format(Number(value))}</p>
      {lineThrough && (
        <div className="flex text-sm">
          <p className="line-through">
            {formatter.format(Number(lineThrough))}
          </p>
          &nbsp;
          <p> -10%</p>
        </div>
      )}
    </div>
  );
};

export default Currency;

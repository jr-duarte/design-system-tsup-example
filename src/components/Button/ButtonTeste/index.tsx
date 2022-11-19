import React, { useEffect, useState } from 'react';

type ButtonComponentProps = {
  children: string;
};

export default function ButtonTeste({ children }: ButtonComponentProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {children} {count}
    </button>
  );
}

import React,{useState} from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

  return <div>
      <div>{count}</div>
      <input type="button" value="Increase" onClick={increase} />
      <input type="button" value="Decrease" onClick={decrease} />
  </div>;
};

import { useState } from "react";

interface ICounter {
  defaultCount: number;
  onHandleChildData: (data: string) => void;
}

function Counter({ defaultCount, onHandleChildData }: Readonly<ICounter>) {
  const [count, setCount] = useState<number>(defaultCount);

  function handleCount() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <div>Count = {count}</div>
      <div className="mb-2.5">
        <button className="bg-gray-200 p-2" onClick={handleCount}>
          Increase Counter by 1
        </button>
      </div>
      <div>
        <button
          className="bg-gray-200 p-2"
          onClick={() => onHandleChildData("Hello Parent!")}
        >
          Send String to Homepage
        </button>
      </div>
    </div>
  );
}

export default Counter;

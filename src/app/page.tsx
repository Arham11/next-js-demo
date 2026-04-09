"use client";

import Counter from "./Counter";

export default function Home() {
  const handleChildData = (data: string) => {
    console.log("Received from child:", data);
  };
  return (
    <>
      <div>Home</div>
      <Counter defaultCount={10} onHandleChildData={handleChildData} />
    </>
  );
}

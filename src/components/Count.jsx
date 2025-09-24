import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick...");
    }, 1000);

    return () => clearInterval(timer); // cleanup when component unmounts
  }, []);

  return (
    <div className="my-10 px-6">
      <p>{count}</p>
      <button
        className="border-2 border-black p-2 rounded-xl"
        onClick={() => setCount((prev) => prev + 1)}
        onDoubleClick={() => {
          alert("double click function executed");
        }}
      >
        Increase count +1
      </button>
      <br />
      <br />
      <button
        onClick={() => setRetry((prev) => !prev)}
        className="border-2 border-black p-2 rounded-xl"
      >
        Retry
      </button>
    </div>
  );
};

export default Count;

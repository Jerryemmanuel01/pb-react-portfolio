import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  //   const IncreaseCount = (count) => {
  //     setCount(count + 1);
  //   };
  return (
    <div className="my-10 px-6">
      <p>{count}</p>
      <button
        className="border-2 border-black p-2 rounded-xl"
        onClick={() => setCount((prev) => prev + 1)}
        onDoubleClick={()=>{
          alert("double click function executed")
        }}
      >
        Increase count +1
      </button>
    </div>
  );
};

export default Count;

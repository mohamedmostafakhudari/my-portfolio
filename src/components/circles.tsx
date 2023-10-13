import React from 'react'
import Circle from "@/components/circle";
const Circles = () => {
  return (
    <div>
      <Circle i={0} />
      <Circle i={1} reverse />
      <Circle i={2} />
    </div>
  );
}

export default Circles
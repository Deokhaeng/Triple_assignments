import { useEffect, useState } from "react";

const CountUp = ({ end }) => {
  let start = 0;
  const duration = 2000;
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  const easeOutNum = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -9 * t);
  };

  useEffect(() => {
    const counter = setInterval(() => {
      const progress = easeOutNum(++start / totalFrame);
      setCount(Math.round(end * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [end, frameRate, start, totalFrame]);

  return count;
};

export default CountUp;

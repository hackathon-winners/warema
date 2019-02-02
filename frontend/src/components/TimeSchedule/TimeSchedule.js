import React, { useEffect, useState } from "react";

export default function() {
  const [time, setTime] = useState(150);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}

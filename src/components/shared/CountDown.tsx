"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CountDown({
  value,
  duration,
  className,
}: {
  value: number;
  duration: number;
  className?: string;
}) {
  // states
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let index: number = 0;
    let interval: any;

    let observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && index === 0 && value > 0) {
          interval = setInterval(() => {
            if (index === value) {
              clearInterval(interval);
            } else {
              value > 1000
                ? value > 10000
                  ? (index += 50)
                  : (index += 5)
                : index++;
            }
            setCount(index);
          }, duration / value);
        }
      });
    });

    // observe element
    countRef?.current && observe.observe(countRef?.current);

    return () => observe && observe.disconnect();
  }, [value, duration]);

  return <span ref={countRef}>{count}</span>;
}

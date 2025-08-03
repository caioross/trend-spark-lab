import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
}

export const CountdownTimer = ({ initialMinutes = 10 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-accent">
      <div className="bg-card border border-accent/20 rounded-lg px-3 py-2 min-w-[60px] text-center">
        {minutes.toString().padStart(2, '0')}
      </div>
      <span className="text-accent animate-pulse">:</span>
      <div className="bg-card border border-accent/20 rounded-lg px-3 py-2 min-w-[60px] text-center">
        {seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
};
import {useEffect, useState} from 'react';

export const useCountdown = () => {
  const [secondsLeft, setSecondsLeft] = useState(1668758400 / 60)

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft === 0) {
        clearInterval(interval)
        console.log('Times up!')
      } else {
        setSecondsLeft(secondsLeft - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const days = Math.floor(secondsLeft / 24 / 60 / 60)
  const hoursLeft = Math.floor(secondsLeft - days * 86400)
  const hours = Math.floor(hoursLeft / 3600)
  const minutesLeft = Math.floor(hoursLeft - hours * 3600)
  const minutes = Math.floor(minutesLeft / 60)
  const seconds = secondsLeft % 60

  return { days, hours, minutes, seconds }
};

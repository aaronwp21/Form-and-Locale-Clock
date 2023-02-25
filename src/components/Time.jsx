import React, {useState, useEffect} from 'react'
import DisplayTime from './DisplayTime';

function Time({locale}) {
  const [date, setDate] = useState(new Date());
  
  const currentTime = date.toLocaleTimeString(locale);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  },[])

  return (
    <DisplayTime currentTime={currentTime} />
  )
}

export default Time
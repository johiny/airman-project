import React from 'react'
import { useState, useEffect } from 'react'

const useCountDown = (initialCount) => {
    const [counter, setCounter] = useState(initialCount)
    useEffect(() => {
        if(counter > 0){
            setTimeout(() => {
            setCounter(counter - 1)
            }, 1000);
    }
    },[counter])
    return counter
}

export default useCountDown;
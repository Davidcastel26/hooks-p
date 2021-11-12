import { useState, useCallback } from "react";

export default function useCounter(){
    const [counter, setCounter] = useState(0)

    const add = useCallback (() => {
        setCounter((counter)=> counter + 1)
    },[setCounter])

    const remove = useCallback (() => {
        setCounter((counter)=> counter + 1)
    },[setCounter])


    return{counter}
}

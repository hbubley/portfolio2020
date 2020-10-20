import {useState} from 'react'

export default function({initialValue}){
    const [state, setState] = useState(initialValue)

    const handleToggleFade = () => {
        setState(!state)
    }
    return [state, handleToggleFade]
}
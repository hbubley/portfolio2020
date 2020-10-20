import {useState} from 'react'

export default function({initialValue}){
    const [state, setState] = useState(initialValue)

    const handleToggle = () => {
        setState(!state)
    }
    return [state, handleToggle]
}
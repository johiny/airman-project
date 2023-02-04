import Loader2 from "../Components/Loader2";
import { DataSectionSmall } from "../styles/stylesCollection";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { useTimeoutFn } from "react-use";
const Processing = () => {
    const navigate = useNavigate()
    const redirect = () => {
            let message;
            const result = Math.random() * 3 // get random number
            result >= 1 ? message = "success" : message = "error"
            navigate(`/confirmation/${message}`)
    }
    useTimeoutFn(redirect, 3000)
    return (
        <div className="py-44">
        <DataSectionSmall>
            <h1>Processing transaction</h1>
            <p>This may take a while...</p>
            <Loader2 />
        </DataSectionSmall>
        </div>
     );
}
 
export default Processing;
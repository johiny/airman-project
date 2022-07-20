import Loader2 from "../components/Loader2";
import { DataSectionSmall } from "../styles/stylesCollection";

const Processing = () => {
    return ( 
        <DataSectionSmall>
            <h1>Processing transaction</h1>
            <p>This may take a while...</p>
            <Loader2 />
        </DataSectionSmall>
     );
}
 
export default Processing;
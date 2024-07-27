import Button from "./ui/Button";
import {memo} from 'react'

/**
 *  memo | Memoization =>
 * Memoization is a powerful optimization technique used in React to improve the performance of applications by caching the   results of expensive function calls and returning the cached result when the same inputs occur again
 */

interface IProps {


}

const Counter =({}:IProps)=>{

    return(
        <>
            <h3>Counter : 0</h3>
            <div className="flex justify-center mb-10">
                <Button>Increase Counter Component</Button>
            </div>
        </>
    );
};

export default memo(Counter); // Accept function => Your Component (Counter and Child Components Don't re-render Again)
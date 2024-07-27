import { useState,useMemo } from "react";
import Input from "./ui/Input";

interface IProps {


}


const ExpebsiceFunction =({}:IProps)=>{
    const [value,setValue] = useState('');
    /**
     * 
     * THIS FUNCTION is consum time in calculations and when component re-render you notice delay in ui because this function
     * use useMemo Hook to Solve this problem because you need to catch value that returned form this function,otherwise function
     */
    const MomoizedexpensiveFN = useMemo(()=>{
        let total =0
        for (let count = 0; count < 1_000_000_00; count++) {
             total += count;
            
        }
        return total
    },[])
    // const total = MomoizedexpensiveFN(); this is cuase error 
    return(
        <>
            <Input placeholder="Value" value={value} onChange={e => setValue(e.target.value)}/>
            <h3>TotalL:{MomoizedexpensiveFN}</h3>
        </>
    );
};

export default ExpebsiceFunction;
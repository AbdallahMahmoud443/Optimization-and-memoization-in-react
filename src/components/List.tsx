interface IProps {


}

const List =({}:IProps)=>{
    return(
   
            <div>
        {Array.from({length:1000},(_,idx) => <h4>Row {idx}</h4>)}
       
            </div>
 
    );
};

export default List;
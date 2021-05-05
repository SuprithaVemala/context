import React ,{useContext} from 'react'
import {DataContext} from '../App'

 function ContextUser() {
    const data = useContext(DataContext)
    console.log(data.str)
    return (
        <div>
            <DataContext.Consumer>
                {data=>{
                   return <h5>{data.str}</h5>
                }}
            </DataContext.Consumer> 
            {data.str}
        </div>
    )
}

function ContextHeader(){
    return(
        <ContextUser></ContextUser>
    )
}

function ContextApp(){
    return(
        <ContextHeader></ContextHeader>
    )
}

export default ContextApp
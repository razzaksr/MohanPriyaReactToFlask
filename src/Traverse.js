import { useEffect, useState } from "react"
import { onDelete, onTraverse } from "./Connect"

export const Traverse=(props)=>{

    const[mylist,setMylist]=useState([])

    const loads=async()=>{
        const hai = await onTraverse()
        setMylist(hai.data)
    }

    useEffect(()=>{
        if(props.myown){
            setMylist(props.myown)
        }
        else{
            loads()
        }
    },[])

    return(
        <>
            <div className="mt-4 row justify-content-center">
                <p className="text-center display-5 text-warning">Available vehicles</p>
                <div className="col-lg-7 col-md-8 col-sm-12 p-3 shadow text-nowrap">
                    <div className="table-responsive">
                        <table className="table table-striped text-center" cellPadding="4px" cellSpacing="4px">
                            <thead>
                                <tr>
                                    <th>Registration Number</th>
                                    <th>Model of the vehicle</th>
                                    <th>Brand of the vehicle</th>
                                    <th>Year of the manufactured</th>
                                    <th>Engine Capacity in CC</th>
                                    <th>Cost of the vehicle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mylist.map((each)=>(
                                        <tr>
                                            <td>
                                                <a href={`/modify/${each.regno}`} className="text-warning">
                                                <span class="bi bi-pencil-fill"></span>
                                                </a>
                                                {each.regno}
                                                <button className="ms-2 btn btn-outline-danger" onClick={async()=>{
                                                    const ttt = await onDelete(each.regno)
                                                    alert(ttt.data)
                                                    window.location.assign("/")
                                                }}>
                                                <span class="bi bi-trash3-fill"></span>
                                                </button>
                                            </td>
                                            <td>{each.model}</td>
                                            <td>{each.brand}</td>
                                            <td>{each.year}</td>
                                            <td>{each.cc}</td>
                                            <td>{each.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
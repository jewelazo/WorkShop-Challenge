/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import { getHome1, getHome2 } from "../services/homeService";
const Container=styled.div`
    width:310px;
    img{
        height: 25px;
        width:  25px;
        cursor: pointer;
    }
`
const HomeFancy=styled.div`
    background-color:blue;
    display:flex;
    gap:10px;
    align-items:center;
    color: white;
`
const Plus=styled.div`
    display:flex;
    align-items:center;
    p{
        margin-top:0;
        margin-bottom:0;
    }
    gap:10px;
`
const Clock=styled.div`
    display:flex;
    gap:10px;
    align-items:center;

`
const Dollar=styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`

export const Home=()=>{

    const [id,setId]=useState(1)
    const [loading,setLoading]=useState(false)
    const [value,setValue]=useState(0)

    const HomeFetching=()=>{
        setLoading(false)
        const Fetching= async ()=>{
            setLoading(true)
            const data1= await getHome1(id)
            setLoading(false)
            if (data1!=="Not found"){
                //console.log(data1)
             setValue(data1.value)
            return;
            }
            //console.log(data1)
            const data2= await getHome2(id)
            setLoading(false)
            if (data2!=="Not found"){
            //setLoading(false)
            //console.log(data2)
            setValue(data2.value);
            return;
            }
            
            alert("no existe ese id")
            setValue('not exist')
            return;
            
            
        }
        
        Fetching()

    }
    return (
        <Container>
        <HomeFancy>
            <img src="/home.svg" alt="home"/>
            <p>Estimated Home Value</p>
        </HomeFancy>
        <Plus>
            <img src="/plus.svg" alt="plus" onClick={()=> setId(id+1)}/>
            <div>
            <p>Increment property id</p>
            <p>Current property id:{id}</p>
            </div>
        </Plus>
        
        <Clock>
            <img src="/clock.svg" alt="clock" onClick={HomeFetching}/>
            <p>Updated estimated value through API</p>
        </Clock>
        <Dollar>
            <img src="/dollar.svg" alt="dollar" />
            {loading && "loading"}
             {!loading && <p>{`Estimated value ${value}`} </p> }
        </Dollar>
        </Container>
    )
}
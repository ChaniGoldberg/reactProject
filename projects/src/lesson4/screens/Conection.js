import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import img from "../assests/צילום מסך 2025-01-08 020227.png"
export default function Conection()
{
    const navigate=useNavigate();
    const goToThanks=()=>{
            navigate('/thanks');
    }
    return(
            <>
            <img src={img} alt></img>
            <button onClick={goToThanks}>for connecting us...</button>
            </>
    );
}
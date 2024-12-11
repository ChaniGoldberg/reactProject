import React, { useState } from 'react';
import a from '../assests/a.png'
import b from '../assests/b.png'
import c from '../assests/c.png'
import d from '../assests/d.png'
import e from '../assests/e.png'
function DisplayPic() {
   const [pictures, setPictures] = useState([a, b, c,d, e])
   const [index, setIndex] = useState(0)
   const prev = () => {
       {
         if (index != 0)
            setIndex(index-1);
      }

   }
   const next = () => {
      if (index != pictures.length - 1) {
         setIndex(index+1);
      }

   }
   return (
      <>
         <button onClick={()=>prev()} disabled={index==0}>prev</button>
         <img src={pictures[index]} id="img" ></img>
         <button onClick={()=>next()} disabled={index==pictures.length-1}>next</button>
      </>
   )
}
export default DisplayPic;
import logo from '../assests/logo192.png'
function Welcome(props)
{
   return (
    <>
    <h1 style={{color:"red" }}>hi {props.name} you are {props.age} years old, welcome to this page!!!!</h1>
    <p>❤️❤️❤️</p>
    <img src={logo}></img>
    </>
   ) 
}
export default Welcome;
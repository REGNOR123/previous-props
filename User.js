import React,{useEffect,useRef} from "react";
function User(prop)
{
  const lastval=useRef();
  useEffect(()=> 
  {
    lastval.current=prop.data
  })
  const prevprop=lastval.current
  return(
    <>
    <h3>This is User Component</h3>
    <h6>Previous Props Value</h6>
    
    <h4>PREVIOUS PROPS DATA: {prevprop}</h4>
    <h4>CURRENT PROPS DATA: {prop.data}</h4>
    </>
  );
}
export default User;
const Sidebar = ({Count ,setCount , first , second}:{Count:number ,setCount:(arg:number)=>void , first:string , second:string}) => {

    return (
      <div className=" w-full mt-10 flex flex-col gap-5 text-center">
        <h2 onClick={()=>setCount(1)} className={`${Count ===1 ? `border-green-400 border-b-8 text-xl`: `border-b-4`}  text-white  w-[70%] mx-auto cursor-pointer mt-10`}>{first}</h2>
        <h2 onClick={()=>setCount(2)} className={`${Count ===2 ? `border-green-400 border-b-8  text-xl`: `border-b-4`} text-white  w-[70%] mx-auto cursor-pointer `}>{second}</h2>
     
     
      </div>
    )
  };
  
  export default Sidebar;
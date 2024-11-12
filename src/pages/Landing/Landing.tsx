import React, { useState } from 'react'
import Sidebar from '../../component/sideBar/SideBar';

const Landing = () => {
  const [Count, setCount] = useState(1);


  return (
    <div className='  border-2 border-t min-h-[640px] bg-green-100'>
        <div className='flex min-h-[500px] w-10/12 mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl'>
            <div className='w-[20%] bg-[#01CEC9]'>
                <Sidebar setCount={setCount} Count={Count} first='Simple ' second='pro'/>
            </div>
            <div  className='w-[80%] border bg-gray-100 pb-20'>
              fuk
                {/* {Count === 1 && <NotMemoParent/>} */}
                {/* {Count === 2 && <MemoParent/>} */}
            </div>
        </div> 
    </div>
  )
}

export default Landing
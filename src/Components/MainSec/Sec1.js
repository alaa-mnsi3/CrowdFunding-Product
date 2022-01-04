import React, { useContext, useState } from 'react'
import { DataContext } from './Main'
import PopupSec1 from './PopupSec1'
function Sec1() {
    // when click Back this Project
    const [open,Setopen]=useState(false);

    // Data that creating in MainSec.js
    const {data}=useContext(DataContext);

    return (
        <>
            <div className='Sec1'>
                <h2 className='text-center'>
                    MasterCrafet Bamboo Monter Riser
                </h2>
                <p className='text-center'>
                    A beautiful & handCrafted monitor stand to reduce neck and eye strain
                </p>
                <div className='d-flex justify-content-between align-items-center Sec1-btns'>
                    <button onClick={()=>Setopen(true)} className='d-inline-block Sec1-btns-btn1'>
                        Back this Project
                    </button>
                    <div className='Sec1-btns-btn2 d-flex align-items-center'>
                        <button className='d-flex justify-content-center align-items-center'>
                            <i className="fas fa-bookmark"></i>
                        </button>
                        <button className='d-none d-sm-flex'>
                            Bookmarked
                        </button>
                    </div>
                </div>
            </div>
            {/* Component that appearing when click button "Back this Project" */}
            <PopupSec1 data={data} Setopen={Setopen} open={open}/>
        </>
    )
}


export default Sec1

import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import check from '../../images/icon-check.svg'
import close from '../../images/icon-close-modal.svg'

function PopupSec1({Setopen,open,data}) {
    // if Clicked Got it
    const [openBack , setopenBack]=useState(false)
    // click radio to put value Radio
    const [openDiv,setopenDiv]=useState('')

    // close <Popup/>
    const handleClose=()=>
    {
        Setopen(false);
        setopenBack(false);
        setopenDiv('')
    }

    return ReactDOM.createPortal(
        <>
        {/* if Click Back this project */}
        {open?
            <div className='overlay'>
                <div className={openBack?'Popup':'Popup active'}>
                    {/* if not Clicked Got it */}
                    {!openBack?
                        // if openBack False ,Apper this section
                        <div className='Popup-Check d-flex flex-column align-items-center'>
                            <div>
                                <img src={check}/>
                            </div>
                            <h2>Thanks for your support</h2>
                            <p className='text-center'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide . You will get an email once our campaign is completed</p>
                            <button onClick={()=>setopenBack(true)}>Got it</button>
                        </div>:
                        // if openBack True ,Apper this section
                        <div className='Popup-pledge'>
                            <button onClick={handleClose} className='w-100 justify-content-end d-flex'>
                                <img src={close}/>
                            </button>
                            <h2>Back this project</h2>
                            <p>Want to support us in bringing MasterCrafet Bamboo Monitor Riser out in the world?</p>
                            <div className='Popup-pledge-parent d-flex flex-column'>
                                {data.map((item,index) => 
                                    <div key={index} className='Popup-pledge-parent-sec d-flex flex-column'>
                                        <div className='Popup-pledge-parent-sec-wrapper d-flex justify-content-between align-items-start'>
                                            <div className='Popup-pledge-parent-sec-wrapper-check'>
                                                <input 
                                                type="radio" 
                                                name='type'
                                                value={item.radio} 
                                                onChange={(e)=>setopenDiv(e.target.value)}
                                                />
                                            </div>
                                            <div className='d-flex flex-column Popup-pledge-parent-sec-wrapper-info'>
                                                <div className='Popup-pledge-parent-sec-wrapper-info-Header text-left d-flex'>
                                                    <h3>{item.header}</h3>
                                                    <h3>{item.span}</h3>
                                                </div>
                                                <p>
                                                    {item.pragraph}
                                                </p>  
                                                {item.nums?<span className='Popup-pledge-parent-sec-wrapper-info-nums'>{item.nums} <span>left</span></span>:null}
                                            </div> 
                                        </div> 

                                        {/* to appear this section ,Must openDiv true ,Click checkbox */}
                                        {openDiv===item.radio?
                                            <form className='d-flex justify-content-between w-100 Popup-pledge-parent-sec-form'>
                                                    <input placeholder='Enter Your Pledge'/>
                                                    <div className='d-flex Popup-pledge-parent-sec-form-btns'>
                                                        <button className='d-flex align-items-center'>$25 <span>|</span></button>
                                                        <button>continue</button>
                                                    </div>
                                            </form>:null
                                        } 
                                    </div>
                                )}    
                            </div>    
                        </div>
                    }
                </div>
            </div>
        :null}
        </>,
        document.getElementById('root-Sec1')
    )
}

export default PopupSec1

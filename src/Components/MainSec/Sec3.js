import React,{useContext} from 'react'
import { DataContext } from './Main'

function Sec3() {
    const {data}=useContext(DataContext);

    //I  want from index 1 to 4 from data 
    const dataSlice=data.slice(1,4);
    
    return (
        <div className='Sec3'>
            <h2>
                About this project
            </h2>
            <p>
                The MaseterCraft Bamboo Monitor Riser is astudy and stylish platform that elevates
                your screen to a more comfortable viewing height . Placing your monitor to eye level has
                the potentional to imporve your posture and make you more comfortable while at work,
                helping you stay focused on the task at hand 
            </p>
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
                youe computer to allow notepads , pens , and USB sticks to be stored under the stand
            </p>
            <div className='Sec3-Data d-flex flex-column justify-content-center'>
                {dataSlice.map((item,index) => 
                    <div key={index} className='Popup-pledge-parent-sec'>
                        <div className='Popup-pledge-parent-sec-wrapper d-flex justify-content-between align-items-baseline'>
                            <div className='d-flex flex-column Popup-pledge-parent-sec-wrapper-info w-100'>
                                <div className='text-left d-flex justify-content-between Popup-pledge-parent-sec-wrapper-info-Header'>
                                    <h3>{item.header}</h3>
                                    <h3>{item.span}</h3>
                                </div>
                                <p>
                                    {item.pragraph}
                                </p> 
                                <div className='d-flex justify-content-between Sec3-footer'> 
                                    <span className='Popup-pledge-parent-sec-wrapper-info-nums Sec3-num'>{item.nums} <span>left</span></span>
                                    <button className='Sec3-Btn'>{item.btn}</button>
                                </div>
                            </div>    
                        </div>
                    </div>
                )}   
            </div>
        </div>
    )
}

export default Sec3

import React, { useContext, useEffect, useState } from 'react'
import {stickyContext} from '../../App'

function Sec2() {
    const {Sticky,SetSticky}=useContext(stickyContext)

    // to animation Progress
    const [Active,setActive]=useState(false)

    //to creadte Sticky Navbar And animation Progress 
    useEffect(()=>
    {
        const Sec2=document.querySelector('.Sec2');
        window.onscroll=()=>
        {
            if(window.scrollY > 0)
            {
                setActive(false)
                SetSticky(true)
            }
            if(window.scrollY >= (Sec2.offsetTop-300))
            {
                SetSticky(true)
                setActive(true)
            }
            if(window.scrollY=== 0)
            {
                SetSticky(false)
            }
        }
    },[Active,Sticky])

    // Data for sec2
    const dataSec2=[
        {
            h3:'$89,914',
            p:'of $100,000'
        },
        {
            h3:'5,007',
            p:'total brackets'
        },
        {
            h3:'56',
            p:'days left'
        },
    ]
    
    return (
        <div className='Sec2'>
            <div className='Sec2-wrapper'>
                <ul className='d-flex Sec2-wrapper-ul'>
                    {dataSec2.map((item)=>(
                        <React.Fragment key={Math.random()}>
                            <li className='Sec2-wrapper-ul-li d-flex flex-column'>
                                <h2>{item.h3}</h2>
                                <p>{item.p}</p>
                            </li>
                            <span className='space-li'></span>
                        </React.Fragment>
                    ))}
                </ul>
                <div className={Active?'Sec2-wrapper-progress active':'Sec2-wrapper-progress'}/>
            </div>
        </div>
    )
}

export default Sec2

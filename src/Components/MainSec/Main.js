import React from 'react'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import '../../css/main.css'

export const DataContext=React.createContext(); 

// Main that Contains 3 components sec1 and sec2 and sec3
function Main() {

     // Data using for sec3.js and PopupSec1.js
    const data=[
        {
            header:'Pledge with no reward',
            pragraph:'Choose to support us without a reward if you simply blieve in our projrct , As a backer , you will be signed up to recieve product updates via email',
            radio:'value1',
        },
        {
            header:'Bamboo Stand',
            span:'pledge $25 or more',
            pragraph:'You get an ergonomic stand made of natural bbamboo . You have helped us lanuch our promotional campaign , and you will be added to a special Backer member list',
            nums:'101',
            radio:'value2',
            btn:'Select Reward',
        },
        {
            header:'Black Edition Stand',
            span:'pledge $75 or more',
            pragraph:'You get aBlack Special Edition computer stand and a personal thank you. You will be added to our Backer member list . Shipping is included',
            nums:'64',
            radio:'value3',
            btn:'Select Reward',
        },
        {
            header:'Maghogany Special Edition',
            span:'pledge $200 or more',
            pragraph:'You get aBlack Special Edition computer stand and a personal thank you. You will be added to our Backer member list . Shipping is included',
            nums:'0',
            radio:'value4',
            btn:'Out of stok',
        },
    ]

    return (
        <div className='Sec-Main d-flex flex-column align-items-center'>
            <DataContext.Provider value={({'data':data})}>
                <Sec1/>
                <Sec2/>
                <Sec3/>
            </DataContext.Provider>
        </div>
    )
}

export default Main

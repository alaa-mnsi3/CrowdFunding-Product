import React from 'react'
import BackgroundSec from './BackgroundSec'
import Nav from './Nav'
import '../../css/main.css'

// include navbar and background
// scss/components/Header.scss has two component
export default function Header() {
    return (
        <div className='Header'>
            <Nav/>
            <BackgroundSec/>
        </div>
    )
}

import React, { useState,useContext } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {stickyContext} from '../../App'

// Navbar component
function Nav() {
    // for sticky navbar
    const {Sticky}=useContext(stickyContext)

    // when click Toggle Mob in mobile to appear items in navbar
    const [openNav,SetopenNav]=useState(false);

    return (
        <div className={Sticky?'Nav Sticky':'Nav'}>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    {/* Brand Nav Bar */}
                    <Link to='/' className='d-inline-block Brand'>
                        crowdfund
                    </Link>

                    {/* Toggle Mob that appears in mobile */}
                    <button onClick={()=>SetopenNav(!openNav)}
                    className='d-flex d-lg-none Nav-ToggleBtn-parent'>
                        <span className={openNav?'ToggleBtn active':'ToggleBtn'}></span>
                    </button>

                    {/* left items in navbar */}
                    <ul className={openNav?'navItems d-lg-flex d-md-block active':'navItems d-lg-flex d-md-block'}>
                        <li className='navItems-item'>
                            <NavLink to='/About'>
                                About
                            </NavLink>
                        </li>
                        <li className='navItems-item'>
                            <NavLink to='/Discover'>
                                Discover
                            </NavLink>
                        </li>
                        <li className='navItems-item'>
                            <NavLink to='/GetStarted'>
                                GetStarted
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav

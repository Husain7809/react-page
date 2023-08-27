import React from 'react'
import {BsFillPersonPlusFill, BsFillPersonFill,BsFillPatchQuestionFill } from 'react-icons/bs';


const Header = () => {
    return (
        <div className='header col-12 p-0'>
            <div className="row p-3 m-0">
                <div className="header-logo d-flex col-6">
                    <h2 className='pl-3'>Website logo</h2>
                    <h3 className='pl-2'>website link</h3>
                </div>
                <div className="header-profile d-flex col-6 justify-end">
                    <p className='pr-2'><BsFillPersonPlusFill/></p>
                    <p className='pr-2'><BsFillPatchQuestionFill/></p>
                    <p className='pr-2'><BsFillPersonFill/></p>
                </div>
            </div>
            <hr className='bg-gray-400'/>
        </div>
    )
}

export default Header

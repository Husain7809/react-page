import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div id='nav-bar'>
            <div className="nav-title m-1">
                <h2 className='text-center'>Chat Dashboard <span className='pl-3'>11</span></h2>
            </div>
            <div className='achive-chat text-center '>
                <div id="accordion">
                    <div className="active-chat-dropdown">
                        <div className="header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Active Chats
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show mb-2" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className='user block'>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-gray-400' />

            <div className="inactive-chat text-center my-1">
                <div id="inactive-chat">
                    <div className="inactive-chat-dropdown">
                        <div className="header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Inactive Chats
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#inactive-chat">
                            <div className='user-list'>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                                <p>
                                    <NavLink to="/">Jack Test</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar

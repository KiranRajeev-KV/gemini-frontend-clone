    import React from 'react'
    import './Main.css'
    import { assets } from '../../assets/assets'

    const Main = () => {
    return (
            <div className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.user_icon} alt="" />
                </div>
                <div className="main-container">
                    <div className="hello-msg">
                        <p>
                            <span>Welcome, Kiran.</span>
                        </p>
                        <p>
                            How can I help you today?
                        </p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Any text 1</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Any text 2</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Any text 3</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Any text 4   </p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder="Enter Prompt Here"/>
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <img src={assets.send_icon} alt="" />
                            </div>
                        </div>
                        <p className="bottom-info">
                                Clone of Gemini
                        </p>
                    </div>
                </div>
            </div>
    )
    }

    export default Main
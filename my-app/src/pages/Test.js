import * as React from 'react';
import Me from "../images/me_profile.jpg";
import Natto from "../images/Natto.png";
export default function App() {
    return (
        <div className="h-screen bg-yellow-50 flex grid px-20">
            <div className="row flex flex-wrap items-center gap-2 content-center">
                <div>
                    <ul className="menu bg-base-100 rounded-box">
                        <li>
                            <a className="tooltip hover:tooltip-open tooltip-right hover:bg-gradient-to-r bg-sky-200 text-black hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white tooltip-info" data-tip="Home">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </a>
                        </li>
                        <li>
                            <a className="tooltip hover:tooltip-open tooltip-right hover:bg-gradient-to-r bg-sky-200 text-black hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white tooltip-info" data-tip="Portfolio">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a className="tooltip hover:tooltip-open tooltip-right hover:bg-gradient-to-r bg-sky-200 text-black hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-sky-100 hover:text-white tooltip-info" data-tip="Misc.">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Natto} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Natto
                            <div className="badge badge-outline">C#</div>
                            <div className="badge badge-outline">Unity</div>
                        </h2>
                        <p>Obstacle Course based off Natto</p>
                        <div className="card-actions py-2 justify-end">
                            <button
                                className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                                github.io
                            </button>
                            <div>
                                <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Natto} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Natto
                            <div className="badge badge-outline">C#</div>
                            <div className="badge badge-outline">Unity</div>
                        </h2>
                        <p>Obstacle Course based off Natto</p>
                        <div className="card-actions py-2 justify-end">
                            <button
                                className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                                github.io
                            </button>
                            <div>
                                <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Natto} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Natto
                            <div className="badge badge-outline">C#</div>
                            <div className="badge badge-outline">Unity</div>
                        </h2>
                        <p>Obstacle Course based off Natto</p>
                        <div className="card-actions py-2 justify-end">
                            <button
                                className="text-sm border rounded py-2 px-4 bg-sky-100 hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300  border-sky-100 hover:text-white">
                                github.io
                            </button>
                            <div>
                                <button className="btn btn-sm border-sky-300 bg-sky-300 hover:border-sky-400 hover:bg-sky-400 btn-circle text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-44 rounded-full ring ring-sky-300 ring-offset-base-100 ring-offset-2">
                        <img src={Me}/>
                    </div>
                </div>

            </div>
        </div >
    )
}


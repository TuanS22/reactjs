import React from 'react';

function Content(props) {
    return (
        <div className='content w-1170'>
            <table style={{ backgroundColor: "#ddd", width: "100%", height: "500px" }}>
                <tr>
                    <td colSpan="2" rowSpan="2">
                        <div>
                            <img src='' />
                        </div>
                        <div>
                            <h3>Name</h3>
                            <div>
                                <h5>Price</h5>
                                <div>
                                    <button>Cart</button>
                                    <button>Like</button>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <img src='' />
                        </div>
                        <div>
                            <h3>Name</h3>
                            <div>
                                <h5>Price</h5>
                                <div>
                                    <button>Cart</button>
                                    <button>Like</button>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <img src='' />
                        </div>
                        <div>
                            <h3>Name</h3>
                            <div>
                                <h5>Price</h5>
                                <div>
                                    <button>Cart</button>
                                    <button>Like</button>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <img src='' />
                        </div>
                        <div>
                            <h3>Name</h3>
                            <div>
                                <h5>Price</h5>
                                <div>
                                    <button>Cart</button>
                                    <button>Like</button>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <img src='' />
                        </div>
                        <div>
                            <h3>Name</h3>
                            <div>
                                <h5>Price</h5>
                                <div>
                                    <button>Cart</button>
                                    <button>Like</button>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Content;
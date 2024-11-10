import React from 'react';

function Login(props) {
    let isLogin = false;
    return (
        <>
            {isLogin ? (
                <div>Bạn đã đăng nhập thành công</div>
            ) : (
                <div>Bạn chưa đăng nhập!</div>
            )}

            {
                isLogin && <div>Avatar</div>
            }
        </>
    )
}

export default Login;
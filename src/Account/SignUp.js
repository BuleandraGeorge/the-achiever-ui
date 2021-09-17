import React from 'react';

export default class SignUp extends from React.Component
{
    render()
    {
        return(
            <div className="container">
                <h1>SignUp to benefit the latest features</h1>
                <h2>You can do it by using you Google account too.</h2>
                <div className="container d-flex justify-content-center">
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label for="pass">Password</label>
                        <input type="password" id="pass" />
                    </div>
                    <div>
                        <label for="confirm-pass">Confirm Password</label>
                        <input type="password" id="confirm-pass" />
                    </div>
                </div>
            </div>
        )
    }
}
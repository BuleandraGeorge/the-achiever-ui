import React from 'react';

export default class SignUp extends React.Component
{
    render()
    {
        return(
            <div className="container mt-5 pt-4">
                <h1 className="mb-4">Sign Up to benefit the latest features</h1>
                <h2 className="mb-4">You can do it using your Google account too.</h2>
                <form className="row" onSubmit={this.handleSubmit}>
                    <div class="col-s-12 col-md-6 col-lg-4">
                        <div className="bg-dark text-white p-4 rounded-3">
                            <label for="email">Email</label>
                            <input className="form-control mb-3" type="email" id="email" />
                            <label for="pass">Password</label>
                            <input className="form-control mb-3" type="password" id="pass" />
                            <label for="confirm-pass">Confirm Password</label>
                            <input className="form-control mb-4" type="password" id="confirm-pass" />
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-info "> Sign Up</button>
                                <button className="btn btn-danger">Google Accounts</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
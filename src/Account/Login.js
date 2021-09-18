import React from 'react';

export default class Login extends React.Component
{
    render()
    {
        return(
            <div className="container mt-5 pt-4">
                <h1 className="mb-4 text-center">Hello, stranger! What's the password?</h1>
                <form className="row d-flex justify-content-center" onSubmit={this.handleSubmit}>
                    <div class="col-s-12 col-md-6 col-lg-4">
                        <div className="bg-dark text-white p-4 rounded-3">
                            <label for="email">Email</label>
                            <input className="form-control mb-3" type="email" id="email" />
                            <label for="pass">Password</label>
                            <input className="form-control mb-4" type="password" id="confirm-pass" />
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-info ">Log in</button>
                                <button className="btn btn-danger">Google Accounts</button>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-4 text-center">
                        Haven't got an account yet? Sign up <a className="link-warning text-decoration-none" href="/sign-up">here</a>.
                    </h2>
                </form>
            </div>
        )
    }
}
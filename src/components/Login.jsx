const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="">Username</label>
                                <input type="text" className="form-control" name="username"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Password</label>
                                <input type="text" className="form-control" name="username"></input>
                            </div>
                            <div className="mb-3">
                        <input type="submit" className="btn btn-danger" name="send"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
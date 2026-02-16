export default function Auth() {
    return <div className="page">
        <div className="container">
            <div className="auth-container">
                <h1 className="page-title">Sign Up</h1>
                <form className="auth-form">
                   <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" id="email"/>
                    </div> 
                    <div>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-input" type="password" id="password"/>
                    </div> 
                </form>
            </div>
        </div>
    </div>;
} 
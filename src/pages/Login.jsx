import { useState } from "react";

//This is the first real design decision. Since Login and Admin are two separate page components, and the token needs to be known by both (Login creates it, Admin needs to use it), it can't just live inside one component's own useState — neither page can see the other's state directly.
//The simplest fix for now: lift the token state up into App.jsx, and pass it down to whichever page needs it.

function Login({ onLogin }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ password }),
        });

        if (!response.ok) {
            setError("Invalid password");
            return;
        }

        const data = await response.json();
        onLogin(data.token)
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Log In</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
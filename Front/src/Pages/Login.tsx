import axios from "axios";
import { Button } from "../components/buttonComponent/buttonComponent";
import { Input } from "../components/inputComponent/inputComponent"
import type { BodyRequestLogin } from "../types";
import { useState } from "react";

async function login(email: string, password: string) {
    const body: BodyRequestLogin = {
        Email: email,
        Password: password
    }
    await axios.post('https://localhost:44346/api/Login', body).then((res) => console.log(res)).catch((err) => console.log(err))
}

export function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-800">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                <form className="space-y-5">
                    <Input label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button label="Entrar" className="w-full" onClick={(e) => {
                        e.preventDefault()
                        login(email, password)
                    }} />
                </form>
            </div>
        </div>
    );
}
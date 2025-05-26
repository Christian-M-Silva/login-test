import axios, { AxiosError } from "axios";
import { Button } from "../components/buttonComponent/buttonComponent";
import { Input } from "../components/inputComponent/inputComponent"
import type { BodyRequestLogin, LoginErrorResponse } from "../types";
import { useState } from "react";
import { useNavigate } from "react-router";

async function login(email: string, password: string, navigate: ReturnType<typeof useNavigate>
) {
    const body: BodyRequestLogin = {
        Email: email,
        Password: password
    }
    try {
        await axios.post('https://localhost:44346/api/Login', body)
        navigate("/dashboard");
    } catch (err) {
        const error = err as AxiosError<LoginErrorResponse>;
        alert(error.response?.data.message)
    }
}

export function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-800">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                <form className="space-y-5">
                    <Input label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button label="Entrar" className="w-full" onClick={(e) => {
                        e.preventDefault()
                        login(email, password, navigate)
                    }} />
                </form>
            </div>
        </div>
    );
}
import { Button } from "../components/buttonComponent/buttonComponent";
import { Input } from "../components/inputComponent/inputComponent"

export function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-800">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                <form className="space-y-5">
                    <Input label="E-mail" />
                    <Input label="Password" />
                    <Button label="Entrar" className="w-full" />
                </form>
            </div>
        </div>
    );
}
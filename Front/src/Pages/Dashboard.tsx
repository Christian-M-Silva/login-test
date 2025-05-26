import { useNavigate } from "react-router";
import { Button } from "../components/buttonComponent/buttonComponent";

export function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center flex-col gap-1 justify-center bg-emerald-800">
            <h1 className="text-2xl">Bem-vindo, admin!</h1>
            <Button label="Sair" onClick={() => navigate('/')}/>
        </div>
    );
}
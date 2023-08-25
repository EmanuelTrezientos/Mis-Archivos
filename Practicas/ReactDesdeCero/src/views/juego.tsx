import { useState } from 'react';
import './App.css';
import BotonAumentar from '../components/atoms/Aumentar';
import BotonReducir from '../components/atoms/Reducir';
import BienesContainer from '../components/molecules/Bienes';

const Inicio = () => {
    return function App() {
        const [dinero, setDinero] = useState(0);
        const [objetosComprados, setObjetosComprados] = useState<string[]>([]);

        const nombresObjetos = [
            'Celular', 'Pc', 'Consola', 'PrimerCasa', 'Familia', 'Coche', 'Casa', 'Deportivo', 'Anciano', 'Ataud'
        ];

        const incrementar = () => {
            setDinero(dinero + 1);
        };

        const comprar = (precio: number, objeto: string) => {
            if (dinero >= precio && !objetosComprados.includes(objeto)) {
                setDinero(dinero - precio);
                setObjetosComprados([...objetosComprados, objeto]);
            }
        };

        const mostrarAlertaFinal = () => {
            if (objetosComprados.length === nombresObjetos.length) {
                alert('Felicidades, tienes todo en la vida. Ahora solo te queda morir.');
            }
        };

        return (
            <div className="app-container">
                <div className="logo">
                    <img src="src/img/Moneda.png" width={100} height={100} alt="Moneda" />
                </div>
                <h1>Dinero: {dinero}</h1>
                <h2>Bienvenido al juego de la vida, gana dinero trabajando y gastalo comprando cosas</h2>

                <h1>Bienes:</h1>
                <BienesContainer objetos={nombresObjetos} />

                <h2>Precios: 10,20,30,40,50,60,70,80,90,100 </h2>

                <div className="acciones">
                    <img src="src/img/Trabajar.png" width={100} height={100} alt="Trabajar" />
                    <BotonAumentar nombre="Trabajar" darClick={incrementar} />

                    <img src="src/img/Gastar.png" width={100} height={100} alt="Comprar" />
                    <BotonReducir
                        nombre="Comprar"
                        darClick={() => {
                            comprar((objetosComprados.length + 1) * 10, nombresObjetos[objetosComprados.length] || nombresObjetos[0]);
                            mostrarAlertaFinal();
                        }}
                    />

                    <img src="src/img/Calavera.png" width={100} height={100} alt="Morir" />
                    <button><a href="">Morir</a></button>
                </div>

                <h1>Tus bienes:</h1>
                <BienesContainer objetos={objetosComprados} />
            </div>
        );
    }
};

export default Inicio;
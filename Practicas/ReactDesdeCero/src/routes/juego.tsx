import { Route } from 'react-router-dom';
import juego from '../views/juego.tsx'; // Asegúrate de que el nombre del componente sea en mayúscula

const Inicio = () => {
    return <Route path="/juego" Component={juego} />;
};

export default Inicio;

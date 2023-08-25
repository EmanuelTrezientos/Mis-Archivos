import React from 'react';
import { Route } from 'react-router-dom';
import Ejemplo from '../views/ejemplo.tsx'; // Asegúrate de que el nombre del componente sea en mayúscula

const Inicio = () => {
    return <Route path="/ejemplo" component={Ejemplo} />;
};

export default Inicio;

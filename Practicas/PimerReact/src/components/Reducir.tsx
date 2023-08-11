interface Iprops {
    nombre: string;
    darClick: () => void;
}

const BotonReducir = ( prop: Iprops ) => {
    return (
    <button onClick={prop.darClick}>
        {prop.nombre}
    </button>
    );
};

export default BotonReducir;
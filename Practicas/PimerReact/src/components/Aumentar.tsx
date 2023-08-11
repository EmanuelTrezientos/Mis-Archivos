interface Iprops {
    nombre: string;
    darClick: () => void;
}

const BotonAumentar = ( prop: Iprops ) => {
    return (
    <button onClick={prop.darClick}>
        {prop.nombre} 
    </button>
    );
};

export default BotonAumentar;
interface Iprops {
    objetos: string[];
}

const BienesContainer = ({ objetos }: Iprops) => {
    return (
        <div className="bienes-container">
            {objetos.map((objeto, index) => (
                <img
                    key={index}
                    src={`src/img/${objeto}.jpg`}
                    width={60}
                    height={60}
                    alt={objeto}
                />
            ))}
        </div>
    );
};

export default BienesContainer;
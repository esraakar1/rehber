const Field = ({label, name}) => {
    return (
        <div className="field">
            <label htmlFor="">{label}</label>
            <input type="text" name={name} />
        </div>
    );
};

export default Field;
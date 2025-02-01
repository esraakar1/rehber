const Field = ({label, name, value}) => {
    return (
        <div className="field">
            <label htmlFor="">{label}</label>
            <input type="text" name={name} defaultValue={value}/>
        </div>
    );
};

export default Field;
const RadioInput = ({name,id,checked,value,onChange,label}) => {
    return (
        <div>
            <input
                type="radio"
                name={name}
                id={id}
                checked={checked}
                value={value}
                onChange={onChange}
                className="form-radio cursor-pointer rounded-full border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
            />
            <label htmlFor={id} className="cursor-pointer">{label}</label>
        </div>
    );
};

export default RadioInput;

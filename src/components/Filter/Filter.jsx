

export const Filter = ({ id, value, onChange}) => { 
    return (
      <div>
        <label htmlFor={id}>Find contacts by name</label>
        <input type="text" id={id} value={value} onChange={onChange} />
      </div>
    );
}
import {useState} from "react";

function SearchHeader({search}) {

    const [valueInput, setValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        search(valueInput);
    };

    const handleChange = (event) => {
       setValue(event.target.value);
    }

    return (
        <div className="searchDiv" >
            <form className="form" onSubmit={handleFormSubmit} >
                <label className="label" >Ne arıyorsunuz ?</label>
                <input className="input" type = "text" value={valueInput} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchHeader;
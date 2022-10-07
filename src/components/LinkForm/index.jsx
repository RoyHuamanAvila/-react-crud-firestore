import { useState } from "react";

const LinkForm = () => {
    const initialState= {
        url: '',
        name: '',
        description: '',
    };

    const [values, setValues] = useState(initialState);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values,[name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }

    return(
        <form className="card card-body">
            <div className="form-group input-group mb-3">
                <div className="input-group-text bg-light">
                      <i className="material-icons">insert_link</i>
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="https://someurl.com"
                    name="url"
                    onChange={handleInputChange}
                    />
            </div>

            <div className="form-group input-group mb-3">
                <div className="input-group-text bg-light">
                      <i className="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Website name" 
                    name="name"
                    onChange={handleInputChange}
                    />
            </div>

            <div className="form-group mb-3">
                <textarea 
                    name="description" 
                    rows="3"
                    className="form-control" 
                    placeholder="Write a description"
                    onChange={handleInputChange}
                    >

                </textarea>
            </div>

            <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                Save
            </button>
        </form>
    )
}

export default LinkForm;

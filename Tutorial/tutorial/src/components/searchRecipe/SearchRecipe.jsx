import React, {useState} from "react";
import TutorialDataService from "../../services/TutorialService.jsx";


export default function SearchRecipe(){

    const [searchTitle, setSearchTitle] = useState("");
    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const findByTitle = () => {
        TutorialDataService.findByTitle(searchTitle)
            .then(response => {
                setTutorials(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return(
        <>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title"
                    value={searchTitle}
                    onChange={onChangeSearchTitle}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={findByTitle}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}
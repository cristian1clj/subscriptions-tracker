import { useState } from "react";

const FormAddMoney = ({ setBudget, setIsValid }) => {
    const [newBudget, setNewBudget] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();

        if(newBudget === "" || Number(newBudget) < 0){
            setError(true);
        } else {
            setError(false);
            setBudget(Number(newBudget));
            setIsValid(true);
        }
    }

    return (
        <section className="form-add-money">
            <form onSubmit={ handleForm }>
                <label htmlFor="new-budget">Add budget</label>
                <input name="new-budget" id="new-budget" type="number" placeholder="$100" onChange={e => setNewBudget(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <div className="messages">
                {error ? <p className="error">Invalid budget</p> : null}
            </div>
        </section>
    );
}

export default FormAddMoney;
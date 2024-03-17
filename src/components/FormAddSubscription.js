import { useEffect, useState } from "react";

const FormAddSubscrition = ({ available, setAvailable, services, subscriptions, setSubscriptions, isEditing, setIsEditing }) => {
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(false);
    const [insufficientBudget, setInsufficientBudget] = useState(false);

    useEffect(() => {
        if (isEditing !== null){
            setService(subscriptions[isEditing].service);
            setPrice(subscriptions[isEditing].price);
        }
    }, [isEditing, subscriptions]);

    const handleForm = e => {
        e.preventDefault();

        if (service === '' || price === '' || Number(price) <= 0){
            setError(true);
        } else if (available < Number(price)){
            setInsufficientBudget(true);
        } else {
            setError(false);
            setInsufficientBudget(false);
            if (isEditing === null){
                setAvailable(available - Number(price));
                setSubscriptions([...subscriptions, {service: service, price: price}]);
            } else {
                const priceDifference = price - subscriptions[isEditing].price;
                setAvailable(available - priceDifference);
                subscriptions[isEditing].service = service;
                subscriptions[isEditing].price = price;
                setSubscriptions(subscriptions);
                setIsEditing(null);
            }
            setService('');
            setPrice('');
        }
    }

    return (
        <div className="form-add-subscription">
            <h2>Add subscriptions</h2>
            <form onSubmit={ handleForm }>
                <label htmlFor="service">Service</label>
                <select 
                    name="service" 
                    id="service" 
                    value={ service } 
                    onChange={e => setService(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    {
                        services.map(service => <option value={service.value}>{service.name}</option>)
                    }
                </select>
                <label htmlFor="price">Price</label>
                <input 
                    type="number" 
                    name="price" 
                    id="price" 
                    placeholder="$100" 
                    value={ price } 
                    onChange={e => setPrice(e.target.value)} 
                />
                { isEditing === null ? <button type="submit">Add</button> : <button type="submit">Save</button> }
            </form>
            <div className="messages">
                { error ? <p className="error">Invalid fields</p> : null }
                { insufficientBudget ? <p className="error">Insufficient budget</p> : null }
            </div>
        </div>
    );
}

export default FormAddSubscrition;
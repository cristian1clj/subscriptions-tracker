import { useState } from "react";
import BalanceSheet from "./BalanceSheet";
import FormAddSubscrition from "./FormAddSubscription";
import SubscriptionsList from "./SubscriptionsList";

const MainControl = ({ budget }) => {
    const services = [
        {name: 'Netflix', value: 'netflix'},
        {name: 'Disney Plus', value: 'disneyplus'},
        {name: 'HBO Max', value: 'hbomax'},
        {name: 'Star Plus', value: 'starplus'},
        {name: 'Prime Video', value: 'primevideo'},
        {name: 'Spotify', value: 'spotify'},
        {name: 'Apple TV', value: 'appletv'}
    ];
    const [available, setAvailable] = useState(budget);
    const [subscriptions, setSubscriptions] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    const deleteSubscription = positionInArray => {
        setAvailable(available + Number(subscriptions[positionInArray].price));
        subscriptions.splice(positionInArray, 1);
    };

    return (
        <section className="main-form">
            <BalanceSheet budget={budget} available={available} />
            <FormAddSubscrition 
                available={available} 
                setAvailable={setAvailable} 
                services={services} 
                subscriptions={subscriptions} 
                setSubscriptions={setSubscriptions} 
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />
            <SubscriptionsList subscriptions={subscriptions} setIsEditing={setIsEditing} deleteSubscription={deleteSubscription} />
        </section>
    );
}

export default MainControl;
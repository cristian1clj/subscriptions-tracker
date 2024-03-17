import SubscriptionItem from "./SubscriptionItem";

const SubscriptionsList = ({ subscriptions, setIsEditing, deleteSubscription }) => {
    return (
        <>
            <h2>All subscriptions</h2>
            <div className="subscription-list">
                {
                    subscriptions.map(subscription => {
                        return <SubscriptionItem 
                            subscription={subscription} 
                            subPosition={subscriptions.indexOf(subscription)} 
                            setIsEditing={setIsEditing}
                            deleteSubscription={deleteSubscription}
                        />
                    })
                }
            </div>
        </>
    );
}

export default SubscriptionsList;
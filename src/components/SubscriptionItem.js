const SubscriptionItem = ({ subscription, subPosition, setIsEditing, deleteSubscription }) => {
    const imagePath = `/images/${subscription.service}.png`;

    const editItem = e => {
        e.preventDefault();
        setIsEditing(subPosition);
    }
    const deleteItem = e => {
        e.preventDefault();

        if (window.confirm('Are you sure you want to unsubscribe?')){
            deleteSubscription(subPosition);
        }
    }
    
    return (
        <div className="subscription-item">
            <img src={imagePath} alt="" />
            <p>Price: ${subscription.price}</p>
            <button type="button" onClick={editItem}>Edit</button>
            <button type="button" onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default SubscriptionItem;
const BalanceSheet = ({ budget, available }) => {
    return (
        <div className="balance-sheet">
            <p>Budget: ${budget}</p>
            <p>Available: ${available}</p>
            <p>Spent: ${budget - available}</p>
        </div>
    );
}

export default BalanceSheet;
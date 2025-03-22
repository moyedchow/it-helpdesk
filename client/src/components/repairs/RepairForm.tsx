import React, { useState } from 'react';

const RepairForm: React.FC = () => {
    const [assetId, setAssetId] = useState('');
    const [repairDescription, setRepairDescription] = useState('');
    const [repairDate, setRepairDate] = useState('');
    const [cost, setCost] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., API call to log the repair
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="assetId">Asset ID:</label>
                <input
                    type="text"
                    id="assetId"
                    value={assetId}
                    onChange={(e) => setAssetId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="repairDescription">Repair Description:</label>
                <textarea
                    id="repairDescription"
                    value={repairDescription}
                    onChange={(e) => setRepairDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="repairDate">Repair Date:</label>
                <input
                    type="date"
                    id="repairDate"
                    value={repairDate}
                    onChange={(e) => setRepairDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="cost">Cost:</label>
                <input
                    type="number"
                    id="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="notes">Notes:</label>
                <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </div>
            <button type="submit">Log Repair</button>
        </form>
    );
};

export default RepairForm;
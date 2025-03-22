import React, { useEffect, useState } from 'react';
import { fetchRepairHistory } from '../../utils/api';

const RepairHistory: React.FC<{ assetId: string }> = ({ assetId }) => {
    const [repairHistory, setRepairHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRepairHistory = async () => {
            try {
                const history = await fetchRepairHistory(assetId);
                setRepairHistory(history);
            } catch (err) {
                setError('Failed to fetch repair history');
            } finally {
                setLoading(false);
            }
        };

        getRepairHistory();
    }, [assetId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Repair History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Downtime</th>
                    </tr>
                </thead>
                <tbody>
                    {repairHistory.map((repair) => (
                        <tr key={repair.id}>
                            <td>{new Date(repair.date).toLocaleDateString()}</td>
                            <td>{repair.description}</td>
                            <td>{repair.cost}</td>
                            <td>{repair.downtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RepairHistory;
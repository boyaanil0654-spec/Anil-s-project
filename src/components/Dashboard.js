import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = ({ history }) => {
  const exportHistory = () => {
    const dataStr = JSON.stringify(history);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'spin-history.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="dashboard panel glassmorphism">
      <h2>Spin History</h2>
      <button onClick={exportHistory} className="export-button magnetic">Export History</button>
      <ul>
        {history.map((result, i) => (
          <motion.li key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            {result.name} - {result.color}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

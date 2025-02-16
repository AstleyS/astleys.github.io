import { useState } from 'react';

const MaintenancePage = () => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(true);

  if (!isUnderMaintenance) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">🚧 We're Under Maintenance 🚧</h1>
        <p className="text-lg text-gray-600 mb-6">
          We're working hard to improve your experience. Please check back soon!
        </p>
        <p className="text-sm text-gray-500">
          Need help? Contact us at <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a>
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;

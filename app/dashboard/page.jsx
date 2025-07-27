import ProtectedRoute from 'lib/ProtectedRoute';
export default function DashboardPage(){
  return (
    <ProtectedRoute>
      <main className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Streak tracker placeholder.</p>
      </main>
    </ProtectedRoute>
  );
}

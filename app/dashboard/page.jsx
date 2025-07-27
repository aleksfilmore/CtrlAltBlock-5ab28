import ProtectedRoute from 'lib/ProtectedRoute';
export default function DashboardPage(){
  return (
    <ProtectedRoute>
      <main className="p-8"><h1 className="text-3xl font-bold mb-4">Dashboard</h1><p>Placeholder.</p></main>
    </ProtectedRoute>
  );
}
import ProtectedRoute from 'lib/ProtectedRoute';
export default function ClosurePage(){
  return (
    <ProtectedRoute>
      <main className="p-8"><h1 className="text-3xl font-bold mb-4">Closure</h1><p>Placeholder.</p></main>
    </ProtectedRoute>
  );
}
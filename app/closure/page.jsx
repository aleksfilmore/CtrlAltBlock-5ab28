import ProtectedRoute from 'lib/ProtectedRoute';
export default function ClosurePage(){
  return (
    <ProtectedRoute>
      <main className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">AI Closure Simulator</h1>
        <p>Token meter placeholder (3 free messages).</p>
      </main>
    </ProtectedRoute>
  );
}

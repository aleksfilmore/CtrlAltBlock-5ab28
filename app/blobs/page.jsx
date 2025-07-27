import ProtectedRoute from 'lib/ProtectedRoute';
export default function BlobsPage(){
  return (
    <ProtectedRoute>
      <main className="p-8"><h1 className="text-3xl font-bold mb-4">Blobs</h1><p>Placeholder.</p></main>
    </ProtectedRoute>
  );
}
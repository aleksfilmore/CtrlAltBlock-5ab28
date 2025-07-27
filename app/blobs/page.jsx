import ProtectedRoute from 'lib/ProtectedRoute';
export default function BlobsPage(){
  return (
    <ProtectedRoute>
      <main className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Blob Submissions</h1>
        <p>No blobs yet.</p>
      </main>
    </ProtectedRoute>
  );
}

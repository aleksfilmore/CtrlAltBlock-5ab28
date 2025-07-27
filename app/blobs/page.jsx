import { listShapesAction } from './actions';
export const dynamic = 'force-dynamic';

export default async function BlobsPage() {
  let keys = [];
  try {
    keys = await listShapesAction();
  } catch (err) {
    console.error('Error fetching blobs:', err);
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blob Submissions</h1>

      {keys.length === 0 ? (
        <p className="text-gray-400">No blobs yet.</p>
      ) : (
        <ul className="space-y-2">
          {keys.map((k) => (
            <li key={k} className="rounded bg-gray-800 p-2 font-mono text-xs break-all">
              {k}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

import { listShapesAction } from './actions';
export const dynamic = 'force-dynamic';

export default async function BlobsPage() {
  let shapes = [];
  try {
    shapes = await listShapesAction();
  } catch (e) {
    console.error('Blobs unavailable at build time:', e?.message);
  }
  if (!shapes.length) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Blobs</h1>
        <p className="text-sm text-gray-400">Blobs storage not yet ready. Check back later.</p>
      </main>
    );
  }
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blobs</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shapes.map((id)=>(
          <li key={id} className="border rounded p-2 text-xs break-all">{id}</li>
        ))}
      </ul>
    </main>
  );
}

import { listShapesAction } from './actions';
export const dynamic = 'force-dynamic';

export default async function BlobsPage() {
  let keys = [];
  try {
    keys = await listShapesAction();
  } catch (err) {
    console.error(err);
  }

  return (
    <main style={{padding:'2rem', color:'white'}}>
      <h1>Blob Submissions</h1>
      {keys.length === 0 ? (
        <p>No blobs yet.</p>
      ) : (
        <ul>
          {keys.map(k=> <li key={k}>{k}</li>)}
        </ul>
      )}
    </main>
  );
}

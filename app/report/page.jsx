import ProtectedRoute from 'lib/ProtectedRoute';
export default function ReportPage(){
  return (
    <ProtectedRoute>
      <main className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Monthly Reformat Report</h1>
        <p>SVG graph coming soon.</p>
      </main>
    </ProtectedRoute>
  );
}

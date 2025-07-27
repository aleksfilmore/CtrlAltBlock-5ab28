import ProtectedRoute from 'lib/ProtectedRoute';
export default function ReportPage(){
  return (
    <ProtectedRoute>
      <main className="p-8"><h1 className="text-3xl font-bold mb-4">Report</h1><p>Placeholder.</p></main>
    </ProtectedRoute>
  );
}
function ContextAlertComponent({ children }) {
  return (
    <div className="my-4 rounded border border-yellow-400 bg-yellow-50 p-4 text-yellow-800">
      {children}
    </div>
  );
}

export function ContextAlert(props) { return <ContextAlertComponent {...props} />; }

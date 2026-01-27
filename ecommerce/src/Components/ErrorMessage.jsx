const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-red-800 font-semibold">Error</p>
          <p className="text-red-700 text-sm mt-1">
            {message || 'Something went wrong. Please try again.'}
          </p>
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition whitespace-nowrap"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;

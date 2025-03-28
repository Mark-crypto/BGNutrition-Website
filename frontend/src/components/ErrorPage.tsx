const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="mt-2 text-gray-700">Please try again later.</p>
    </div>
  );
};

export default ErrorPage;

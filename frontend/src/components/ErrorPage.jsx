const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-purple-200 to-blue-300">
      <div className="max-w-md w-full text-center bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
          Oops!
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

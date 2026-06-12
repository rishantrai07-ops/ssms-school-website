export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <h1 className="text-7xl font-bold text-[#800020] mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-8 text-center">
        The page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="bg-[#800020] text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </a>
    </div>
  );
}
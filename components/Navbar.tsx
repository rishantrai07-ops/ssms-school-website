export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <h1 className="text-2xl font-bold text-[#800020]">
        Sunshine Model School
        </h1>
        <button className="bg-[#800020] text-white px-4 py-2 rounded-lg">
            Admissions Open
            </button>

        <ul className="flex gap-8">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/notices">Notices</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
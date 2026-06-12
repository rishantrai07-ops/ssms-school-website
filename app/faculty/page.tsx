import PageHeader from "../../components/PageHeader";
export default function FacultyPage() {
  const faculty = [
    {
      name: "Principal Name",
      designation: "Principal",
    },
    {
      name: "Teacher 1",
      designation: "Mathematics",
    },
    {
      name: "Teacher 2",
      designation: "Science",
    },
    {
      name: "Teacher 3",
      designation: "English",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Faculty</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {faculty.map((teacher) => (
          <div
            key={teacher.name}
            className="border rounded-xl p-6 shadow-sm"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>

            <h2 className="text-xl font-semibold">
              {teacher.name}
            </h2>

            <p className="text-gray-600">
              {teacher.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
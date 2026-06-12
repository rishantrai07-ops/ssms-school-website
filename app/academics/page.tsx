import PageHeader from "../../components/PageHeader";
export default function AcademicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">
        Academics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Primary School
          </h2>
          <p>Classes I to V</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Middle School
          </h2>
          <p>Classes VI to VIII</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Secondary School
          </h2>
          <p>Classes IX to XII</p>
        </div>
      </div>
    </div>
  );
}
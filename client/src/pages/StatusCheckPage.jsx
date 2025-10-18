import { useState } from "react";
import PublicLayout from "../components/layout/PublicLayout";

export default function StatusCheckPage() {
  const [code, setCode] = useState("");
  const [report, setReport] = useState(null);

  // Static report data for simulation
  const dummyReports = [
    { code: "ABC123", title: "Corruption Report", status: "Pending", officialNotes: "Under review" },
    { code: "XYZ789", title: "Misconduct Report", status: "Resolved", officialNotes: "Action taken" },
    { code: "LMN456", title: "Fraud Report", status: "In Progress", officialNotes: "" },
  ];

  const handleCheck = () => {
    const found = dummyReports.find(r => r.code.toUpperCase() === code.toUpperCase());
    if (found) {
      setReport(found);
    } else {
      setReport(null);
      alert("Report not found");
    }
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto space-y-4 text-center">
        <input
          className="border p-2 w-full"
          placeholder="Enter your report code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={handleCheck}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Check Status
        </button>

        {report && (
          <div className="p-4 mt-4 border rounded bg-white text-left">
            <h3 className="font-bold">{report.title}</h3>
            <p><strong>Status:</strong> {report.status}</p>
            {report.officialNotes && <p><strong>Notes:</strong> {report.officialNotes}</p>}
          </div>
        )}
      </div>
    </PublicLayout>
  );
}

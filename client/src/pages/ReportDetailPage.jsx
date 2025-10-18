import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminLayout from "../components/layout/AdminLayout";

export default function ReportDetailPage() {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  const navigate = useNavigate();

  // Dummy reports (should match IDs used in AdminDashboard)
  const dummyReports = [
    {
      _id: "1",
      code: "ABC123",
      title: "Corruption Report",
      description: "Details about corruption in office.",
      status: "Pending",
      officialNotes: "Under review",
      evidenceUrl: "https://example.com/evidence1.pdf",
    },
    {
      _id: "2",
      code: "XYZ789",
      title: "Misconduct Report",
      description: "Employee misconduct reported.",
      status: "Resolved",
      officialNotes: "Action taken",
      evidenceUrl: "",
    },
    {
      _id: "3",
      code: "LMN456",
      title: "Fraud Report",
      description: "Fraud detected in transactions.",
      status: "In Progress",
      officialNotes: "",
      evidenceUrl: "https://example.com/evidence3.pdf",
    },
  ];

  useEffect(() => {
    const found = dummyReports.find((r) => r._id === id);
    setReport(found);
  }, [id]);

  const handleUpdate = () => {
    if (!report) return;
    const newStatus = prompt("Enter new status", report.status);
    const notes = prompt("Add notes", report.officialNotes || "");
    // Update local state only
    setReport({ ...report, status: newStatus || report.status, officialNotes: notes || report.officialNotes });
    alert("Report updated locally! (No backend interaction)");
  };

  if (!report) return <AdminLayout>Loading...</AdminLayout>;

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-4">{report.title}</h2>
      <p>{report.description}</p>
      <p><strong>Status:</strong> {report.status}</p>
      {report.officialNotes && <p><strong>Notes:</strong> {report.officialNotes}</p>}
      {report.evidenceUrl && (
        <a
          href={report.evidenceUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          View Evidence
        </a>
      )}
      <div className="mt-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Status
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </div>
    </AdminLayout>
  );
}

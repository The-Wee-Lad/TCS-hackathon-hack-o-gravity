import { useState, useEffect } from "react";
import { FileText, CheckCircle, Clock, AlertCircle, Plus, Menu, Bell, User, Search, Filter } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function DepartmentDashboard() {
  const [reports, setReports] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy report data for department
  const dummyReports = [
    { _id: "1", code: "ABC123", title: "Corruption Report", status: "Pending", date: "2025-10-10", priority: "High" },
    { _id: "2", code: "XYZ789", title: "Misconduct Report", status: "Resolved", date: "2025-10-08", priority: "Medium" },
    { _id: "3", code: "LMN456", title: "Fraud Report", status: "In Progress", date: "2025-10-12", priority: "High" },
    { _id: "4", code: "DEF321", title: "Policy Violation", status: "Pending", date: "2025-10-14", priority: "Low" },
    { _id: "5", code: "GHI654", title: "Harassment Case", status: "Resolved", date: "2025-10-05", priority: "High" },
    { _id: "6", code: "JKL987", title: "Embezzlement", status: "In Progress", date: "2025-10-11", priority: "Critical" },
    { _id: "7", code: "MNO234", title: "Safety Concern", status: "Pending", date: "2025-10-13", priority: "Medium" },
    { _id: "8", code: "PQR567", title: "Ethics Violation", status: "In Progress", date: "2025-10-09", priority: "High" },
  ];

  useEffect(() => {
    setReports(dummyReports);
  }, []);

  // Calculate statistics
  const stats = {
    total: reports.length,
    pending: reports.filter(r => r.status === "Pending").length,
    inProgress: reports.filter(r => r.status === "In Progress").length,
    resolved: reports.filter(r => r.status === "Resolved").length,
  };

  // Filter reports
  const filteredReports = reports.filter(report => {
    const matchesStatus = filterStatus === "All" || report.status === filterStatus;
    const matchesSearch = report.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "Critical": return "bg-red-100 text-red-800 border-red-300";
      case "High": return "bg-orange-100 text-orange-800 border-orange-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Low": return "bg-green-100 text-green-800 border-green-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
              <NavLink to={'/'}>
              SafeSpeak
              </NavLink>
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Department Admin</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
              <p className="text-gray-600 mt-1">Manage and track all department reports</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Reports</p>
                  <p className="text-4xl font-bold mt-2">{stats.total}</p>
                  <p className="text-blue-100 text-xs mt-2">All time</p>
                </div>
                <FileText className="text-blue-200" size={48} opacity={0.8} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">Pending</p>
                  <p className="text-4xl font-bold mt-2">{stats.pending}</p>
                  <p className="text-amber-100 text-xs mt-2">Needs attention</p>
                </div>
                <AlertCircle className="text-amber-200" size={48} opacity={0.8} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">In Progress</p>
                  <p className="text-4xl font-bold mt-2">{stats.inProgress}</p>
                  <p className="text-blue-100 text-xs mt-2">Active cases</p>
                </div>
                <Clock className="text-blue-200" size={48} opacity={0.8} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Resolved</p>
                  <p className="text-4xl font-bold mt-2">{stats.resolved}</p>
                  <p className="text-green-100 text-xs mt-2">Completed</p>
                </div>
                <CheckCircle className="text-green-200" size={48} opacity={0.8} />
              </div>
            </div>
          </div>
          {/* Reports Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">My Reports</h2>
              
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by code or title..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReports.map((r) => (
                    <tr key={r._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{r.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{r.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded border ${getPriorityColor(r.priority)}`}>
                          {r.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{r.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          r.status === "Resolved" ? "bg-green-100 text-green-800" :
                          r.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                          "bg-amber-100 text-amber-800"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button 
                          className="text-indigo-600 hover:text-indigo-900 font-medium transition-colors"
                          onClick={() => alert(`Viewing report ${r._id}`)}
                        >
                          View Details →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredReports.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No reports found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
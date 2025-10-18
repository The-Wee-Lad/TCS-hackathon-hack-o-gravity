import React, { useState } from 'react'
import { FileText, Eye, Download, Search, Filter } from 'lucide-react'

const WhistleBlowerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  
  // Random complaint data
  const complaints = [
    {
      id: 'WB-2024-001',
      title: 'Financial Irregularities in Procurement',
      description: 'Suspected fraudulent activities in vendor selection process. Multiple invoices show inflated prices and possible kickback schemes.',
      status: 'Under Investigation',
      date: '2024-10-10',
      file: 'procurement_evidence.pdf',
      fileSize: '2.4 MB'
    },
    {
      id: 'WB-2024-002',
      title: 'Safety Protocol Violations',
      description: 'Repeated violations of workplace safety standards. Management ignoring OSHA requirements putting workers at risk.',
      status: 'Pending Review',
      date: '2024-10-12',
      file: 'safety_photos.zip',
      fileSize: '15.7 MB'
    },
    {
      id: 'WB-2024-003',
      title: 'Data Privacy Breach',
      description: 'Unauthorized access to customer personal data. Security protocols bypassed by senior staff members.',
      status: 'Resolved',
      date: '2024-09-28',
      file: 'access_logs.xlsx',
      fileSize: '890 KB'
    },
    {
      id: 'WB-2024-004',
      title: 'Discrimination and Harassment',
      description: 'Multiple instances of workplace discrimination based on gender. HR department failed to take appropriate action.',
      status: 'Under Investigation',
      date: '2024-10-08',
      file: 'complaint_documentation.pdf',
      fileSize: '1.2 MB'
    },
    {
      id: 'WB-2024-005',
      title: 'Environmental Compliance Violation',
      description: 'Company disposing hazardous waste improperly. Multiple violations of EPA regulations documented.',
      status: 'Pending Review',
      date: '2024-10-14',
      file: 'environmental_evidence.pdf',
      fileSize: '5.6 MB'
    },
    {
      id: 'WB-2024-006',
      title: 'Timesheet Fraud',
      description: 'Systematic manipulation of employee timesheets. Supervisors approving fraudulent overtime claims.',
      status: 'Under Investigation',
      date: '2024-10-11',
      file: 'timesheet_analysis.xlsx',
      fileSize: '3.1 MB'
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Under Investigation': return 'bg-yellow-100 text-yellow-800'
      case 'Pending Review': return 'bg-blue-100 text-blue-800'
      case 'Resolved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || complaint.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Whistleblower Dashboard</h1>
          <p className="text-slate-600">Manage and track all reported complaints</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-slate-600 text-sm font-medium mb-1">Total Complaints</div>
            <div className="text-3xl font-bold text-slate-800">{complaints.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-slate-600 text-sm font-medium mb-1">Under Investigation</div>
            <div className="text-3xl font-bold text-yellow-600">
              {complaints.filter(c => c.status === 'Under Investigation').length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-slate-600 text-sm font-medium mb-1">Pending Review</div>
            <div className="text-3xl font-bold text-blue-600">
              {complaints.filter(c => c.status === 'Pending Review').length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-slate-600 text-sm font-medium mb-1">Resolved</div>
            <div className="text-3xl font-bold text-green-600">
              {complaints.filter(c => c.status === 'Resolved').length}
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search complaints..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="Under Investigation">Under Investigation</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-slate-500">{complaint.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(complaint.status)}`}>
                        {complaint.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{complaint.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{complaint.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-slate-500">
                      <span className="font-medium">Date:</span> {complaint.date}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FileText size={16} />
                      <span className="font-medium">{complaint.file}</span>
                      <span>({complaint.fileSize})</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Eye size={16} />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredComplaints.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No complaints found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WhistleBlowerDashboard
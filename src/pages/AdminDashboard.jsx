import React, { useState, useEffect } from 'react';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('view'); // 'view', 'edit', 'delete'

  // Load inquiries from localStorage
  useEffect(() => {
    loadInquiries();
  }, []);

  // Filter inquiries based on search
  useEffect(() => {
    if (searchTerm) {
      const filtered = inquiries.filter(inquiry =>
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.phone.includes(searchTerm)
      );
      setFilteredInquiries(filtered);
    } else {
      setFilteredInquiries(inquiries);
    }
  }, [searchTerm, inquiries]);

  const loadInquiries = () => {
    const stored = localStorage.getItem('inquiries');
    if (stored) {
      const parsed = JSON.parse(stored);
      setInquiries(parsed);
      setFilteredInquiries(parsed);
    }
  };

  const saveInquiries = (updatedInquiries) => {
    localStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
    setInquiries(updatedInquiries);
  };

  // Calculate stats
  const stats = {
    totalInquiries: inquiries.length,
    pendingInquiries: inquiries.filter(i => i.status === 'pending').length,
    contactedInquiries: inquiries.filter(i => i.status === 'contacted').length,
    completedInquiries: inquiries.filter(i => i.status === 'completed').length
  };

  // CRUD Operations
  const handleView = (inquiry) => {
    setSelectedInquiry(inquiry);
    setModalMode('view');
    setShowModal(true);
  };

  const handleEdit = (inquiry) => {
    setSelectedInquiry({ ...inquiry });
    setModalMode('edit');
    setShowModal(true);
  };

  const handleDelete = (inquiry) => {
    setSelectedInquiry(inquiry);
    setModalMode('delete');
    setShowModal(true);
  };

  const confirmDelete = () => {
    const updated = inquiries.filter(i => i.id !== selectedInquiry.id);
    saveInquiries(updated);
    setShowModal(false);
    setSelectedInquiry(null);
  };

  const handleSaveEdit = () => {
    const updated = inquiries.map(i =>
      i.id === selectedInquiry.id ? selectedInquiry : i
    );
    saveInquiries(updated);
    setShowModal(false);
    setSelectedInquiry(null);
  };

  const handleStatusChange = (inquiryId, newStatus) => {
    const updated = inquiries.map(i =>
      i.id === inquiryId ? { ...i, status: newStatus } : i
    );
    saveInquiries(updated);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedInquiry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.adminDashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1>Inamdar & Co.</h1>
            <span>Admin Dashboard</span>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.refreshBtn} onClick={loadInquiries}>
              <i className="fas fa-sync-alt"></i>
              <span>Refresh</span>
            </button>
            <button className={styles.logoutBtn}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className={styles.dashboardContainer}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <button
              className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="fas fa-chart-line"></i>
              <span>Dashboard</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === 'inquiries' ? styles.active : ''}`}
              onClick={() => setActiveTab('inquiries')}
            >
              <i className="fas fa-envelope"></i>
              <span>Inquiries</span>
              {stats.pendingInquiries > 0 && (
                <span className={styles.badge}>{stats.pendingInquiries}</span>
              )}
            </button>
            <button
              className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {activeTab === 'dashboard' && (
            <div className={styles.dashboardView}>
              <h2 className={styles.pageTitle}>Dashboard Overview</h2>

              {/* Stats Cards */}
              <div className={styles.statsGrid}>
                <div className={`${styles.statCard} ${styles.statTotal}`}>
                  <div className={styles.statIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.statContent}>
                    <h3>Total Inquiries</h3>
                    <p className={styles.statNumber}>{stats.totalInquiries}</p>
                  </div>
                </div>

                <div className={`${styles.statCard} ${styles.statPending}`}>
                  <div className={styles.statIcon}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className={styles.statContent}>
                    <h3>Pending</h3>
                    <p className={styles.statNumber}>{stats.pendingInquiries}</p>
                  </div>
                </div>

                <div className={`${styles.statCard} ${styles.statContacted}`}>
                  <div className={styles.statIcon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className={styles.statContent}>
                    <h3>Contacted</h3>
                    <p className={styles.statNumber}>{stats.contactedInquiries}</p>
                  </div>
                </div>

                <div className={`${styles.statCard} ${styles.statCompleted}`}>
                  <div className={styles.statIcon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className={styles.statContent}>
                    <h3>Completed</h3>
                    <p className={styles.statNumber}>{stats.completedInquiries}</p>
                  </div>
                </div>
              </div>

              {/* Recent Inquiries */}
              <div className={styles.recentSection}>
                <h3>Recent Inquiries</h3>
                {inquiries.length === 0 ? (
                  <div className={styles.emptyState}>
                    <i className="fas fa-inbox"></i>
                    <p>No inquiries yet</p>
                    <small>Inquiries from the contact form will appear here</small>
                  </div>
                ) : (
                  <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Service</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inquiries.slice(0, 5).map(inquiry => (
                          <tr key={inquiry.id}>
                            <td>{inquiry.name}</td>
                            <td>{inquiry.service}</td>
                            <td>{inquiry.date}</td>
                            <td>
                              <span className={`${styles.statusBadge} ${styles[inquiry.status]}`}>
                                {inquiry.status}
                              </span>
                            </td>
                            <td>
                              <div className={styles.actionButtons}>
                                <button
                                  className={styles.viewBtn}
                                  onClick={() => handleView(inquiry)}
                                  title="View Details"
                                >
                                  <i className="fas fa-eye"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className={styles.inquiriesView}>
              <div className={styles.pageHeader}>
                <h2 className={styles.pageTitle}>All Inquiries ({inquiries.length})</h2>
                <div className={styles.pageActions}>
                  <input
                    type="search"
                    placeholder="Search inquiries..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {filteredInquiries.length === 0 ? (
                <div className={styles.emptyState}>
                  <i className="fas fa-search"></i>
                  <p>{searchTerm ? 'No inquiries found' : 'No inquiries yet'}</p>
                  <small>{searchTerm ? 'Try a different search term' : 'Inquiries from the contact form will appear here'}</small>
                </div>
              ) : (
                <div className={styles.tableContainer}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.map(inquiry => (
                        <tr key={inquiry.id}>
                          <td>#{inquiry.id.toString().slice(-4)}</td>
                          <td>{inquiry.name}</td>
                          <td>{inquiry.email}</td>
                          <td>{inquiry.phone}</td>
                          <td>{inquiry.service}</td>
                          <td>{inquiry.date}</td>
                          <td>
                            <select
                              value={inquiry.status}
                              onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                              className={`${styles.statusSelect} ${styles[inquiry.status]}`}
                            >
                              <option value="pending">Pending</option>
                              <option value="contacted">Contacted</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                          <td>
                            <div className={styles.actionButtons}>
                              <button
                                className={styles.viewBtn}
                                onClick={() => handleView(inquiry)}
                                title="View Details"
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                              <button
                                className={styles.editBtn}
                                onClick={() => handleEdit(inquiry)}
                                title="Edit"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                className={styles.deleteBtn}
                                onClick={() => handleDelete(inquiry)}
                                title="Delete"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className={styles.settingsView}>
              <h2 className={styles.pageTitle}>Settings</h2>
              <div className={styles.settingsCard}>
                <h3>Database Management</h3>
                <p>Manage your inquiry database</p>
                <div className={styles.settingsActions}>
                  <button
                    className={styles.exportBtn}
                    onClick={() => {
                      const dataStr = JSON.stringify(inquiries, null, 2);
                      const dataBlob = new Blob([dataStr], { type: 'application/json' });
                      const url = URL.createObjectURL(dataBlob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = `inquiries-${new Date().toISOString().split('T')[0]}.json`;
                      link.click();
                    }}
                  >
                    <i className="fas fa-download"></i>
                    Export Data
                  </button>
                  <button
                    className={styles.clearBtn}
                    onClick={() => {
                      if (window.confirm('Are you sure you want to clear all inquiries? This cannot be undone.')) {
                        localStorage.removeItem('inquiries');
                        setInquiries([]);
                      }
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                    Clear All Data
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>
                {modalMode === 'view' && 'Inquiry Details'}
                {modalMode === 'edit' && 'Edit Inquiry'}
                {modalMode === 'delete' && 'Delete Inquiry'}
              </h3>
              <button
                className={styles.closeBtn}
                onClick={() => setShowModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className={styles.modalBody}>
              {modalMode === 'delete' ? (
                <div className={styles.deleteConfirm}>
                  <i className="fas fa-exclamation-triangle"></i>
                  <p>Are you sure you want to delete this inquiry?</p>
                  <p className={styles.deleteName}>{selectedInquiry?.name}</p>
                  <small>This action cannot be undone.</small>
                </div>
              ) : (
                <div className={styles.inquiryDetails}>
                  <div className={styles.detailRow}>
                    <label>Name:</label>
                    {modalMode === 'view' ? (
                      <span>{selectedInquiry?.name}</span>
                    ) : (
                      <input
                        type="text"
                        name="name"
                        value={selectedInquiry?.name || ''}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  <div className={styles.detailRow}>
                    <label>Email:</label>
                    {modalMode === 'view' ? (
                      <span>{selectedInquiry?.email}</span>
                    ) : (
                      <input
                        type="email"
                        name="email"
                        value={selectedInquiry?.email || ''}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  <div className={styles.detailRow}>
                    <label>Phone:</label>
                    {modalMode === 'view' ? (
                      <span>{selectedInquiry?.phone}</span>
                    ) : (
                      <input
                        type="tel"
                        name="phone"
                        value={selectedInquiry?.phone || ''}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  <div className={styles.detailRow}>
                    <label>Service:</label>
                    {modalMode === 'view' ? (
                      <span>{selectedInquiry?.service}</span>
                    ) : (
                      <input
                        type="text"
                        name="service"
                        value={selectedInquiry?.service || ''}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  <div className={styles.detailRow}>
                    <label>Status:</label>
                    {modalMode === 'view' ? (
                      <span className={`${styles.statusBadge} ${styles[selectedInquiry?.status]}`}>
                        {selectedInquiry?.status}
                      </span>
                    ) : (
                      <select
                        name="status"
                        value={selectedInquiry?.status || 'pending'}
                        onChange={handleInputChange}
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                      </select>
                    )}
                  </div>

                  <div className={styles.detailRow}>
                    <label>Message:</label>
                    {modalMode === 'view' ? (
                      <p className={styles.messageText}>{selectedInquiry?.message || 'No message'}</p>
                    ) : (
                      <textarea
                        name="message"
                        value={selectedInquiry?.message || ''}
                        onChange={handleInputChange}
                        rows="4"
                      />
                    )}
                  </div>

                  <div className={styles.detailRow}>
                    <label>Date:</label>
                    <span>{selectedInquiry?.date}</span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              {modalMode === 'view' && (
                <button
                  className={styles.closeModalBtn}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              )}
              {modalMode === 'edit' && (
                <>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.saveBtn}
                    onClick={handleSaveEdit}
                  >
                    <i className="fas fa-save"></i>
                    Save Changes
                  </button>
                </>
              )}
              {modalMode === 'delete' && (
                <>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.confirmDeleteBtn}
                    onClick={confirmDelete}
                  >
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

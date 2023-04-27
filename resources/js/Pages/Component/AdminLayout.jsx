import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar';

export default function AdminLayout({ children }) {
    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <AdminNavbar />
            {children}
        </div>
    )
}

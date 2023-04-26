import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {

    return (
        <div style={{ fontFamily: 'Roboto' }}>
            <Navbar/>
            {children}
        </div>
    )
}

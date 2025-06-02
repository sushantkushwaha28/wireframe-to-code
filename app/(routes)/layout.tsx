import React from 'react'
import DashboardProvider from './provider';
import ImageUpload from './dashboard/_components/ImageUpload';


function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <DashboardProvider>
            {children}
        </DashboardProvider>
    )
}

export default DashboardLayout
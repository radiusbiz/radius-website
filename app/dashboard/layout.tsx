"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/firebase/authContext';
import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (!loading && !user) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [user, loading, router]);

  // Only show loading state for the first 2 seconds
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // If we have a user, show the dashboard
  if (user) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-8">{children}</div>
      </div>
    );
  }

  // If not loading and no user, return null (will redirect in useEffect)
  return null;
}

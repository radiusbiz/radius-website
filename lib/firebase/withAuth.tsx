"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, ComponentType } from 'react';
import { useAuth } from './authContext';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace('/login'); // Redirect to login if not authenticated
      }
    }, [user, loading, router]);

    if (loading || !user) {
      // You can return a loader here if you want
      return <p>Loading...</p>; // Or any other loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  // Set a display name for the HOC for better debugging
  ComponentWithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
};

export default withAuth; 
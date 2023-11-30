import type { ErrorInfo, ReactNode } from 'react';
import React, { Suspense } from 'react';
import ErrorPage from 'src/widgets/ErrorPage/ui/ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    const { fallback } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;

// resources/js/Shared/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("React ErrorBoundary caught an error:", error, errorInfo);
  }

  handleDismiss = () => {
    this.setState({ hasError: false, error: undefined });
  };

  parseComponentStack = (stack: string) => {
    return stack
      .split("\n")
      .filter((line) => line.trim().startsWith("at"))
      .map((line) => line.trim().replace(/^at\s+/, ""));
  };

  render() {
    const { error } = this.state;
    if (this.state.hasError) {
      const stackTrace = this.parseComponentStack(error?.stack ?? "");

      return (
        <div className="fixed inset-0 h-screen z-50 bg-black bg-opacity-60 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-gray-300 rounded-2xl p-6 w-full max-w-2xl shadow-xl border border-red-500 relative">
            <h2 className="text-xl font-bold text-red-700 mb-4">
              💥 React Rendering Error
            </h2>

            <div className="space-y-2 text-sm text-gray-800 max-h-[60vh] overflow-y-auto">
              <div>
                <strong className="text-red-600">Message:</strong>
                <pre className="whitespace-pre-wrap">{error?.message}</pre>
              </div>

              {error?.stack && (
                <div>
                  <strong className="text-red-600">Stack Trace:</strong>
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {error.stack}
                  </pre>
                </div>
              )}

              {stackTrace.length && (
                <div className="mb-4">
                  <strong>Component Trace:</strong>
                  <ul className="mt-1 pl-4 text-sm list-disc text-gray-600">
                    {stackTrace.map((line, idx) => (
                      <li
                        key={idx}
                        className={
                          idx === 0
                            ? "text-red-500 font-semibold"
                            : "text-gray-700"
                        }
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-gray-500 mt-2">
                Tip: Check your route name, props, or exported page. This often
                happens when the page doesn’t export a valid React component or
                the page name is misspelled.
              </p>
            </div>

            <button
              onClick={this.handleDismiss}
              className="absolute top-2 right-2 px-3 py-1.5 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition"
            >
              ✖ Close
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

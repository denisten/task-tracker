import React from 'react'

class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    return <>{this.props.children}</>
  }
}
export { ErrorBoundary }

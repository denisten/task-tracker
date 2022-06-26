import React from 'react'
import './index.css'
import {
  TaskList,
  ButtonsPanel,
  CreateTaskModal,
  EditTaskModal,
} from './components'
import { LocalStorageContainer, ErrorBoundary } from './containers'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LocalStorageContainer>
        <div className="container">
          <div className="content">
            <EditTaskModal />
            <CreateTaskModal />
            <ButtonsPanel />
            <TaskList />
          </div>
          <div id="bottomSlider" />
        </div>
      </LocalStorageContainer>
    </ErrorBoundary>
  )
}

export default App

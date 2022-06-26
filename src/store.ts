import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { generalUIReducer } from './features/generalUI'
import { taskReducer } from './features/tasks'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  tasks: taskReducer,
  generalUI: generalUIReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store

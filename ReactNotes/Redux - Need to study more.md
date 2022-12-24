https://blog.logrocket.com/understanding-redux-tutorial-examples/#what-redux
Simply put, Redux is used to maintain and update data across your applications for multiple components to share, all while remaining independent of the components.
There are three core components in Redux — actions, store, and reducers.

[[Actions]]
Redux actions are events Actions can be objects.
They are the only way you can send data from your application to your Redux store. The data can be from user interactions, API calls, or even form submissions.
-   a `type` property to indicate the type of action to be carried out, and
-   a `payload` object that contains the information that should be used to change the state.

[[Reducers]]
Reducers are pure functions that take the current state of an application, perform an action, and return a new state. The reducer handles how the state (application data) will change in response to an action.

[[Store]]
The store is a “container” (really a JavaScript object) that holds the application state, and the only way the state can change is through actions dispatched to the store. Redux allows individual components connect to the store and apply changes to it by dispatching actions.

[[createSlice()]]
useSelector() recives a function
createSlice() 
useDispatch()   In **Redux**, if we want to modify the state that is maintained by the **store**, we use the **dispatch()** method of the **store**. it returns a function
Middleware

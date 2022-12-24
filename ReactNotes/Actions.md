Here’s an example of an action:

{ 
  type: "LOGIN",
  payload: {
    username: "foo",
    password: "bar"
  }
}

Here is an example of an action creator:

const setLoginStatus = (username, password) => {
  return {
    type: "LOGIN",
    payload: {
      username, // "foo"
      password // "bar" }
  }
}
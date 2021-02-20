import ApolloClient from "apollo-boost"
import {ApolloProvider, Query} from "react-apollo"
import {Switch, Route, Link} from "react-router-dom"

import Homepage from "./pages/Homepage"
import Posts from "./components/Posts"
import Post from "./components/Post"
import AddPost from "./components/AddPost"
import EditPost from "./components/EditPost"

const defaultState = {
  isEditMode: true
}

const client = new ApolloClient({
  uri: "https://sheltered-journey-32195.herokuapp.com/",
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="/create" component={AddPost}/>
          <Route path="/edit/:id" component={EditPost}/>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;

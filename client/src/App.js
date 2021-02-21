import ApolloClient from "apollo-boost"
import {ApolloProvider, Query} from "react-apollo"
import {Switch, Route, Link} from "react-router-dom"

import Homepage from "./pages/Homepage"
import Layout from "./components/Layout/index"

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
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage}/>
          </Switch>
        </Layout>
    </ApolloProvider>
  );
}

export default App;

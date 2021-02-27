import React from "react"
import ApolloClient from "apollo-boost"
import {ApolloProvider, Query} from "react-apollo"
import {Switch, Route, Link} from "react-router-dom"
import NavbarThemeContext from "./context/NavbarTheme"

import Homepage from "./pages/Homepage"
import CreatePost from "./pages/CreatePost"
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

class App extends React.Component {
  state = {
    navbarColorTheme: 'dark',
    changeColorTheme: (theme) => {
      console.log(theme)
      this.setState({
        navbarColorTheme: theme
      })
    }
  }

  render(){
    return (
      <ApolloProvider client={client}>
        <NavbarThemeContext.Provider value={this.state}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/create" component={CreatePost} />
            </Switch>
          </Layout>
        </NavbarThemeContext.Provider>
      </ApolloProvider>
    )
  }
}

export default App;

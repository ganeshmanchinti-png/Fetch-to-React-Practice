import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import About from './About'
import Contact from './Contact'
import BlogList from './BlogList'
import BlogItemDetails from './BlogItemDetails'
import NotFound from './NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={BlogList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
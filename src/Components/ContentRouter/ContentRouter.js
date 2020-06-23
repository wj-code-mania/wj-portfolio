import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'

const ContentRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/index' component={MainPage} />
    </Switch>
  )
}

export default ContentRouter

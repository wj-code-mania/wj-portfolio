import React from 'react'
import Layout from './Components/Layout/Layout'
import AppHeader from './Components/AppHeader/AppHeader'
import AppFooter from './Components/AppFooter/AppFooter'
import ContentRouter from './Components/ContentRouter/ContentRouter'

function App () {
  return (
    <Layout
      header={<AppHeader />}
      content={<ContentRouter />}
      footer={<AppFooter />}
    />
  )
}

export default App

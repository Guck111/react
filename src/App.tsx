import React from "react"
import { hot } from "react-hot-loader/root"
import { withTranslation } from "react-i18next"

const AppComponent = () => {
  return <div></div>
}

export const App = hot(withTranslation()(AppComponent))

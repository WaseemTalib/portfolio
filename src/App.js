import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/landing'
import { CirclesWithBar } from 'react-loader-spinner'



const App = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    return
  }, [])

  return (
    <div className={'body-style'} style={{ overflow: loading ? 'hidden' : 'auto' }}>
      {loading ? (
        <div className='loader'>
          <CirclesWithBar
            height="100"
            width="100"
            color="#ED5565"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
          />
        </div>
      ) :
        (
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        )}
    </div>
  )

}

export default App;




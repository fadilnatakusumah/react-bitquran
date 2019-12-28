import React from 'react'

import Header from '../components/Header';

import ListSurah from '../components/ListSurah';
import Bookmarks from '../components/Bookmarks';

import '../App.css'

class Home extends React.Component {
  state = {
    active: 2,
  }

  switchTabs = (active) => this.setState({ active });
  
  render() {
    const { surahs, loading } = this.props
    return (
      <React.Fragment>
        <Header onClickTab={(active) => this.setState({ active })} />
        <div className="tab-panel-style">
          {this.state.active === 1
            ? <ListSurah loading={loading} surahs={surahs} />
            : <Bookmarks />}
        </div>
      </React.Fragment>
    )
  }
}

export default Home

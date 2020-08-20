import React from 'react'
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  state = {
    active: 1,
  }

  componentDidMount() {
    this.props.onClickTab(1);
  }

  switchTabs = (active) => {
    this.setState({ active })
    this.props.onClickTab(active);
  };

  toHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <Upper>
          <div onClick={this.toHome}>Quran</div>
        </Upper>
        <div className="tabs-style">
          <div className="tablist-style">
            <div onClick={() => this.switchTabs(1)} className={`tab-style ${this.state.active === 1 && "tab-selected-style"}`}>Surah</div>
            {/* <div onClick={() => this.switchTabs(2)} className={`tab-style ${this.state.active === 2 && "tab-selected-style"}`} >Bookmarks</div> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Upper = styled('div')`
  background-color: #e5e5e5;
  display:flex;
  align-items: flex-end;

  >div{
    font-size: 60px;
    padding: 18px;
    border-bottom: 3px solid #383838;
    height: 130px;
    line-height: 200px;

    @media (max-width:812px){
      line-height: unset;
      height: 35px;
      font-size: 35px;
    }
  }

`

export default withRouter(Header)

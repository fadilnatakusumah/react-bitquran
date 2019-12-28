import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

import Spinner from '../components/Spinner';
import API from '../helpers';
import DetailAyah from '../components/DetailAyah';


class DetailSurah extends Component {
  state = {
    ready: false,
    selectedSurah: {},
    noSurah: false,
  }

  async componentDidMount() {
    const { number } = this.props.match.params;
    const numberSurah = Number(number);
    if (!numberSurah) {
      return this.goBack();
    }

    API.getSurah(numberSurah)
      .then(res => {
        this.setState({ selectedSurah: res, ready: true, noSurah: false })
      })
      .catch(err => {
        this.setState({ noSurah: true, ready: true })
        console.log("err", err)
      });
  }

  goBack = () => this.props.history.replace('/');

  render() {
    const { ready, selectedSurah, noSurah } = this.state;
    if (!ready) {
      return (<Spinner />)
    }

    return (
      <React.Fragment>
        <HeaderSurah>
          <div onClick={this.goBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div>{!noSurah ? selectedSurah.englishName : "No surah"}</div>
        </HeaderSurah>
        <div className="tab-panel-style">
          {noSurah && (
            <div style={{ textAlign: 'center' }}>
              <h1>Surah not found</h1>
            </div>)}
          {!noSurah && selectedSurah.ayahs.map(ayah => (
            <DetailAyah key={ayah.number} ayah={ayah} />
          ))}
          {/* ))
          </ClassNames> */}
        </div>
      </React.Fragment>
    )
  }
}

const HeaderSurah = styled('div')`
  height: 80px;
  background-color:#E5E5E5;
  display: flex;

  > div:first-of-type{
    flex: 1;
    display: flex;
    align-items: center;
    padding: 25px;
    font-size: 30px;
    cursor: pointer;
  }

  >div:last-child{
    flex: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 115px;
    font-size: 30px;
    font-weight: 500;
  }
`

const AyahArabic = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  margin: 5px 0;

  > div:first-of-type{
    font-size: 20px;
    background-color:rgba(0,255,0,0.2);
    color:green;
    padding: 2px 8px;
    border-radius: 10px;
  }

  >div:last-child{
    font-size: 30px;
    text-align:right;
  }
`

const AyahTranslation = styled('div')`
  white-space: pre-wrap;
  padding: 15px;
  font-size: 20px;
  text-align: right;
  color:green;
`

const AyahOption = styled('div')`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid#e5e5e5;

  >div:first-of-type{
    padding: 10px 15px;
    background-color:#e5e5e5;
    border-radius: 15px;
    cursor: pointer;
    margin-right: 15px;
    display: flex;
    align-items: center;

    >div:last-child{
      margin-left: 5px;
      font-size: 20px;
    }
  }

  >div:last-child{
    padding: 10px 15px;
    background-color:#e5e5e5;
    border-radius: 15px;
    cursor: pointer;
    margin-right: 15px;
    display: flex;
    align-items: center;

    >div:last-child{
      margin-left: 5px;
      font-size: 20px;
    }
  }
`

export default withRouter(DetailSurah)

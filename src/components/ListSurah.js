import React from 'react'
import Spinner from './Spinner'
import { withRouter } from 'react-router-dom'

import '../App.css'

const ListSurah = ({ loading = false, surahs = [], history }) => {
  const onClick = (val) => history.push(`detail/${val}`);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {loading ? <Spinner />
        :
        surahs.map((surah, index) => (
          <div onClick={() => onClick(surah.number)} className="surah" key={`${surah.number}_${index}`}>
            <div>{surah.number}</div>
            <div>
              <span>{surah.englishName}</span>
              <span>{surah.englishNameTranslation} {`(${surah.numberOfAyahs})`}</span>
            </div>
            <div>
              {surah.name}
            </div>
          </div>
        ))}
    </div>
  )
}

export default withRouter(ListSurah)

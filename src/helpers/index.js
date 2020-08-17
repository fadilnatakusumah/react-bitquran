import axios from 'axios';

const API_URL = "https://api.alquran.cloud/v1"

export default {
  getSurahs() {
    return new Promise((res, rej) => {
      const localData = localStorage.getItem('surahs-bitquran');
      if (localData) {
        const parsedData = JSON.parse(localData);
        return res(parsedData);
      }

      axios.get(`${API_URL}/surah`)
        .then(({ data }) => {
          const stringify = JSON.stringify(data.data);
          localStorage.setItem('surahs-bitquran', stringify);
          res(data.data)
        })
        .catch(err => rej({
          error: true,
          details: err
        }));
    })
  },

  getSurah(id) {
    return new Promise((res, rej) => {
      const getLocalStorage = localStorage.getItem('surahs-detail-bitquran');
      if (getLocalStorage) {
        const parsedData = JSON.parse(getLocalStorage);
        const findSurah = parsedData.find(value => value.number === id);
        if (findSurah) {
          return res(findSurah);
        }
      }

      const reqSurahDetail = [
        axios(`${API_URL}/surah/${id}/ar.alafasy`),
        axios(`${API_URL}/surah/${id}/en.asad`)
      ]

      Promise.all(reqSurahDetail)
        .then(([audio, text]) => {
          const selectedSurah = {
            ...audio.data.data,
            ayahs: audio.data.data.ayahs.map((ayah, index) => ({
              ...ayah,
              translation: text.data.data.ayahs[index].text
            }))
          }

          if (getLocalStorage) {
            const parsedData = JSON.parse(getLocalStorage);
            parsedData.push(selectedSurah);
            const stringify = JSON.stringify(parsedData);
            localStorage.setItem('surahs-detail-bitquran', stringify)
            return res(selectedSurah);
          } else {
            const selectedSurahs = []
            selectedSurahs.push(selectedSurah);
            const stringify = JSON.stringify(selectedSurahs);
            localStorage.setItem('surahs-detail-bitquran', stringify)
            return res(selectedSurah);
          }
        })
        .catch((err) => {
          console.log("Err", err)
          rej({
            error: true,
            detail: {
              ...err,
              message: "There's an error when getting Surah's details"
            }
          })
        })

      // rej({
      //   error: true,
      //   detail: {
      //     // ...err,
      //     message: "There's an error in function for geting Surah's details"
      //   }
      // })
    })
  }
}
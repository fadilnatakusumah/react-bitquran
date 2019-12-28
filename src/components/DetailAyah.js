import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCopy, faPause } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as clipboard from "clipboard-polyfill";
// import ReactAudioPlayer from 'react-audio-player';

class DetailAyah extends React.Component {
  state = {
    play: false,
  }

  componentDidMount() {
    const { ayah } = this.props;
    // console.log("idAyah", idAyah)
    // console.log("this", this)
    // const player = document.getElementsByName(`ayah_${ayah.number}`)
    // if (player) {
    //   console.log("plauer", player)rn 
    //   // player.addEventListener("ended", this.pausePlayer);
    // }
  }

  playPlayer = () => {
    // const { state } = this;
    // const { ayah } = this.props;
    // this.setState({ ...state, play: true });
    // const player = document.getElementsByName(`ayah_${ayah.number}`);
    // if (player) {
    //   player.play()
    // } else {
    //   console.log("player", player)
    // }
  };

  // pausePlayer = () => {
  //   const { state } = this;
  //   const { ayah } = this.props;
  //   this.setState({ ...state, play: false });
  //   const player = document.getElementsByName(`ayah_${ayah.number}`);
  //   if (player) {
  //     player.pause()
  //   } else {
  //     console.log("player", player)
  //   }
  // }

  copyText = () => {
    const { ayah } = this.props;
    const string = `
      ${ayah.text} \n

      ${ayah.translation}
    `

    clipboard.writeText(string);
    toast('Ayah copied', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // Toastify({
    //   text: "Ayah copied",
    //   duration: 3000,
    //   gravity: "bottom", // `top` or `bottom`
    //   position: "center", // `left`, `center` or `right`
    //   backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    //   stopOnFocus: true, // Prevents dismissing of toast on hover
    //   style:{
    //     padding: "10px"
    //   }
    //   // onClick: function(){} // Callback after click
    // }).showToast();
  }

  render() {
    const { ayah } = this.props;
    const { copyText } = this;
    return (
      <div style={{ padding: '0 20px', width: '100%' }} key={`ayah_${ayah.number}`}>
       <ToastContainer/>
        <AyahArabic>
          <div>{ayah.juz}:{ayah.number}</div>
          <div>{ayah.text}</div>
        </AyahArabic>

        <AyahTranslation>
          {ayah.translation}
        </AyahTranslation>

        <AyahOption>
          {/* <div onClick={!state.play ? playPlayer : pausePlayer}>
            {!state.play ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
            <div>{!state.play ? "Play" : "Pause"}</div>
          </div> */}
          <div onClick={copyText}>
            <FontAwesomeIcon icon={faCopy} />
            <div>Copy</div>
          </div>
        </AyahOption>
        {/* {state.play && <div>

          <ReactAudioPlayer
            src={ayah.audio}
            // src="my_audio_file.ogg"
            autoPlay
            controls
          /> */}
        {/* <audio name={""} controls>
            <source  />
            Your browser does not support the audio element.
        </audio> */}
        {/* </div> */}
      </div>
    )
  }
}

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
    line-height: 55px;
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

  > div{
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



export default DetailAyah

import React from "react";
import styles from "./../styles/SongSearch.css";
import { fetchSongId } from "./../actions";
import { connect } from "react-redux";

class SongSearch extends React.Component {

  render(){
    let input;
    return (
      <div className = {styles.songSearch}>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }

          // this is where custom logic goes
          console.log("SEARCHED SONG:");
          console.log(input.value.trim());
          //

          input.value = "";
        }}>
        <input placeholder="Song Title" ref={node => {
            input = node;
          }}></input>
          <button>search</button>
        </form>
      </div>
    )
  }
}

export default connect()(SongSearch);

import React from 'react';

const SongDetail = (props) =>{
  if(!props.song) return null;
  return(
    <h2>{props.title}</h2>
  )

}

export default SongDetail;

// import React, { useEffect, useState } from 'react';

// const Anime = () => {
//   const [animeData, setAnimeData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://api.jikan.moe/v4/anime');
//       const data = await response.json();
//       setAnimeData(data.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div id='Addingfromscript'>
//       {animeData.map((anime) => (
//         <div className="card" key={anime.mal_id}>
//           <img src={anime.images.jpg.image_url} alt={anime.title} />
//           <h3>{anime.title}</h3>
//           <h4>Score: {anime.score}</h4>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Anime;


// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import response from './response.json';
import Animelist from './animelist';


const anime = () => {
  const [val,setValue]=useState("") 
  function fun1(e){
    setValue(e.target.value)
  }
  const animedata=response.data
  const filterlist= animedata.filter((ele)=>{
    console.log(val)
    return ele.title.toLowerCase().includes(val);
  })
  return (
    <div>
      <div className='container'>
        <h1>Anime List</h1>
        <input type="text" id='searching' onChange={fun1} value={val} placeholder='Search for an anime...' />
      </div>
      <div id="parent">
        < Animelist animedata={filterlist}/>
      </div>
    </div>
  )
}

export default anime

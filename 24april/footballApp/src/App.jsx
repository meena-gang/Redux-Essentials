import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Loading from './Loading'

function App() {
const[page, setPage] = useState(1);
const matches = useSelector(state => state.match);
const{isLoading, isError} = useSelector(state => state.fetch);

const dispatch = useDispatch();
const totalPages = 1159;

useEffect(() => { 
  const fetchData = async() => {
    try{
      dispatch({type:'FETCH'})
      const res  = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`);
      const data = await res.json();
      dispatch({type:'ADD',payload:data.data})
      dispatch({type:'FETCHED'})
    }catch(err){
      dispatch({type:'ERROR'})
      console.log(err);
    }
  }
  fetchData();
},[page]);

  return (
    <>
      <h2>List of Football Matches</h2>
      {isLoading ? <Loading/> : isError ? "Something went wrong" :
        matches.length >0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Competition</th>
              <th>Year</th>
              <th>Round</th>
              <th>Team1</th>
              <th>Team2</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match,i) => <tr key={i} >
              <td>{i+1}</td>
              <td>{match.competition}</td>
              <td>{match.year}</td>
              <td>{match.round}</td>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td><button onClick={() => dispatch({type:'DELETE',payload:i})}>Delete</button></td>
            </tr> )}
          </tbody>
    </table>
    ): "No matches found"}
      <br/>
      <button disabled={page==1 ? true : false} onClick={() => setPage(page-1)}>Prev</button>
      <button  disabled={page==totalPages ? true : false} onClick={() => setPage(page+1)}>Next</button>
    </>
  )
}

export default App

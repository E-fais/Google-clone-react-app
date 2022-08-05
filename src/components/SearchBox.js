import { Button, TextField, Stack } from '@mui/material'
import React, {useState } from 'react'
import { instance } from '../axios/axios'
import Results from './Results'

import '../App.css'
import Loader from './Loader'
function SearchBox() {
  const [search, setSearch] = useState('')
  const [userInput, setUserInput] = useState('')
  const [loader, setloader] = useState(false)
  


  const searchBtnHAndler = () => {
    window.scrollTo({ top: 150, behavior: 'smooth' })
    setSearch('')
    setloader(true)

    instance.get(`search/q=${userInput}&num=100`).then(res => {
      console.log(res.data)
      setSearch(res.data.results)
    }).finally(() => setloader(false))


  }
  console.log(loader)
  return (
    <div >
      <div className='searchBox'>
        <Stack gap={2} >
          <TextField
            value={userInput}
            onChange={(e) => { setUserInput(e.target.value) }}
          />
          <Button variant='contained'
            onClick={searchBtnHAndler}>
            search
          </Button>

        </Stack>

      </div>

      <Results search={search} setSearch={setSearch}  userInput={userInput}/>
      {loader && <Loader />}


    </div>
  )



}

export default SearchBox
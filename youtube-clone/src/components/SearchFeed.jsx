import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const SearchFeed = () => {

 
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }} >
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white',textAlign:'center' }}>
        Search Results for:<span style={{ color: '#F31503', marginLeft: '10px' }}>{searchTerm}</span>
      </Typography>
      <div style={{paddingLeft:"75px"}}>
      <Videos videos={videos}></Videos>
      </div>
    </Box>
  )
}

export default SearchFeed

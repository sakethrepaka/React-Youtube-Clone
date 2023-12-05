import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()


  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', zIndex: -10, height: '300px', }} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </div>
      </Box>

      <Box display="flex" p="2">
            <Box sx={{mr:{sm:'100px'}}}>
            </Box>
            <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}

export default ChannelDetail
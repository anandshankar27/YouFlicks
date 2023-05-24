import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import { Videos } from '../../components'

import { fetchFromAPI } from '../../utils/fetchFromAPI';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchText } = useParams();
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchText}`)
            .then((data) => setVideos(data.items))
    }, [searchText])

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                <span style={{ color: '#FC1503' }}>{searchText}</span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed
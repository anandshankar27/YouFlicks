import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then(data => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
            .then(data => setVideos(data?.items));

    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,28,121,1)35%,rgba(0,212,255,1)100%)',
                    zIndex: 10,
                    height: '300px'
                }}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
                </div>
            </Box>
            <Box display='flex'>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail
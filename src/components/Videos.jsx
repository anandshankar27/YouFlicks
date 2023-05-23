import React from 'react'
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return 'Loading..';
    const myVideos = videos.filter(video => !video.id.kind.includes('playlist'));
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {
                myVideos.map((item, idx) => {
                    return <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                })
            }
        </Stack>
    )
}

export default Videos
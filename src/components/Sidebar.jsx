import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants'

const selected = 'New';

const Sidebar = () => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { xs: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {
                categories.map((category) =>
                    <button
                        key={category.name}
                        className='category-btn'
                        style={{
                            color: 'white',
                            background: category.name === selected && '#FC1503'
                        }}
                    >
                        <span style={{
                            color: category.name === selected ? '#fff' : '#FC1503',
                            marginRight: '15px'
                        }}>{category.icon}</span>
                        <span style={{
                            opacity: category.name === selected ? 1 : 0.8
                        }}>{category.name}</span>
                    </button>
                )
            }
        </Stack>
    )
}

export default Sidebar
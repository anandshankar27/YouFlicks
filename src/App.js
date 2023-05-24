import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar } from './components';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './pages';


const App = () => {
    return (
        <Router>
            <Box sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                    <Route path="/search/:searchText" element={<SearchFeed />} />
                </Routes>
            </Box>
        </Router>
    )
}

export default App
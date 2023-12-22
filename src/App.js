import './App.css';
import 'remixicon/fonts/remixicon.css';
import './utils/Global.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import SignIn from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import Room from './pages/Room';
import Upload from './pages/Upload';
import { useEffect, useState, useRef } from 'react';
import Profile from './pages/Profile';
import Account from './pages/Account';
import About from './pages/About';
import ReportIssues from './pages/ReportIssues';
import { useAuth } from './utils/AuthContext';
import { AllPlaylist } from './pages/AllPlaylist';
import AllTopSong from './pages/AllTopSong';
import RoomDetails from './pages/RoomDetails';
import { AllArtist } from './pages/AllArtist';
import AlbumDetail from './pages/AlbumDetail';
import Player from './components/Player';
import { useMusicContext } from './utils/MusicContext';
import api from './api/Api';
import SongDetail from './pages/SongDetail';
import io from 'socket.io-client'
function App() {
    const [user, setUser] = useState(null)
    const {authUser, setAuthUser, socket, setSocket} = useAuth();
    const [loading, setLoading] = useState(true);
    const [isLoadFirst, setIsLoadFirst] = useState(true);
    const {isActive} = useMusicContext();
    const socketRef = useRef();
    useEffect( ()=>{//khong can fetchh user data o cho nay, luc login xong đã co user data set vao trong context
        const getUser = async ()=>{
            console.log("Hello")
            setIsLoadFirst(false);
            await api.get('/auth/success').then(respone => {
            if(respone.status === 200)
                return respone.data;
            return {user: null, isAuthentication: false }
        }).then( async (resObject)=>{
            if(resObject.user!==null)
            {

                //newSocket.emit('join_music',"Hello");
                setAuthUser(resObject.user.user);
                localStorage.setItem('accessToken',resObject.user.accessToken);
            }
                setLoading(false)
                setIsLoadFirst(true);
        })
        }
        if(isLoadFirst)
        {
            if (!socketRef.current) {
                socketRef.current = io.connect("http://localhost:8080");
                setSocket(socketRef.current);
            }
            getUser();
        }
        return () => {
            if (socket) {
                socket.disconnect();
            }
        }
    },[])
    return (
        loading ? (
        <div>
            <span class="loader"></span>
        </div>) :(<div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={authUser === null ?<SignIn />: <Navigate to='/profile'/>} />
                <Route path='/signup' element={authUser === null ?<SignUp />: <Navigate to='/profile'/>} />
                <Route path='/rooms' element={authUser !== null ? <Room />: <Navigate to= '/signin'/>} />
                <Route path='/upload' element={authUser !== null ? <Upload /> : <Navigate to='/signin'/>} />
                <Route path='/profile' element={authUser !== null ? <Profile />: <Navigate to='/signin'/>} />
                {/* khong can truyen user vaof trong element ntn, trong component, lay user data tu context */}
                <Route path='/accountsetting' element={authUser !== null ?<Account/>: <Navigate to='/signin'/>} />
                <Route path='/about' element={<About />} />
                <Route path='/report' element={<ReportIssues />} />
                <Route path='/AllPlaylists' element={<AllPlaylist />} />
                <Route path='/AllTopSongs' element={<AllTopSong  />} />
                <Route path='/AllArtist' element={<AllArtist />} />
                <Route path='/playlist-detail/:playlistName' element={<AlbumDetail />} />
                <Route path='/room-detail/:roomName' element={<RoomDetails/>} />
                <Route path='/song-detail/:id' element={<SongDetail/>} />
            </Routes>
            <div>
                {isActive && <Player />}
            </div>
        </div>)
    );
}

export default App;

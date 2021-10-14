import React from "react"
import youtube from "../apis/youtube"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    componentDidMount(){
        this.searchApi('buildings')

    }

    searchApi = async (searchTerm) => {
        // console.log(searchTerm)
        const response = await youtube.get("./search", {
            params: {
                q: searchTerm
            } 
        });
        // console.log(response)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
        // return console.log("APP", video)   
    }
    

    render(){
        return (
            <div className="ui container">                 
                <SearchBar onFormSubmit={this.searchApi} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                        <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='six wide column'>
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

}

export default App
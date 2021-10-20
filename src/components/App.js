import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component{

    state = {videos : []};

    onTermSubmit = async (term) => {
        // console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response);
        this.setState({videos: response.data.items});
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <h1>I have {this.state.videos.length} videos.</h1>
                <VideoDetail />
                <VideoList num="1"/>
                <VideoList num="2"/>
                <VideoList num="3"/>
            </div>
        )
    }

}

export default App;



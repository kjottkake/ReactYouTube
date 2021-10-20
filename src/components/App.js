import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component{
    onTermSubmit = (term) => {
        // console.log(term);
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail />
                <VideoList num="1"/>
                <VideoList num="2"/>
                <VideoList num="3"/>
            </div>
        )
    }

}

export default App;



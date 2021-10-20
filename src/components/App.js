import { render } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component{
    render() {
        return (
            <div className="ui container">
                <SearchBar />
                <VideoDetail />
                <VideoList num="1"/>
                <VideoList num="2"/>
                <VideoList num="3"/>
            </div>
        )
    }

}

export default App;



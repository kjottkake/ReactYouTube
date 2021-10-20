import React from "react";

class VideoDetail extends React.Component{

    render(){
        return(
            <div className="card">
                <div class="image">
                    <img style={{width: 250}} src="https://images.unsplash.com/photo-1634578681002-3b744a3f7f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"></img>
                </div>
                <div className="content">
                    <div class="header">Lamb Of God - Rersurrection Man(cover)</div>
                    <div class="meta">
                        <a>Deeznuts</a>
                    </div>
                    <div class="meta">
                        1.3M views
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;
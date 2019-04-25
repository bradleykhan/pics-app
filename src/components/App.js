import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization:
                    "Client-ID 9cd84eb81636fe08f99180eff0bdd2733cb39654cf39bd4f60e538b141862b98"
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;

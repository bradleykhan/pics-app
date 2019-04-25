import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    constructor() {
        super();
        this.state = { images: [] };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(term) {
        const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                params: { query: term },
                headers: {
                    Authorization:
                        "Client-ID 9cd84eb81636fe08f99180eff0bdd2733cb39654cf39bd4f60e538b141862b98"
                }
            }
        );

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;

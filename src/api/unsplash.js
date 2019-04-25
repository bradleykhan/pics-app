import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:
            "Client-ID 9cd84eb81636fe08f99180eff0bdd2733cb39654cf39bd4f60e538b141862b98"
    }
});

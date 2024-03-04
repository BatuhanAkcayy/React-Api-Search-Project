import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer dtPGYlD5ZLTTkHnjpkOrKnwvURGa1mL7Ey3iYGyybJnKvhy3OCIzK3YeaMZ5qiFlY4Bzi60oHHbjrn9psqJiNFsBfbrw7lSRzcH8eq2MbWbeq8NmoLOh_P_kza-dZXYx'
    }
});
import axios from "axios";
export default axios.create({
    baseUrl: "http://localhost:3006/api/v1/"

});
import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '324b81971a714540a9679c455d2617d6'
    }

})
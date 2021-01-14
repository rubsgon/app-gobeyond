import axios from 'axios'

const getBanners = () => axios.get('http://ec2-54-237-155-186.compute-1.amazonaws.com/api/sections/home/')

export default { getBanners }
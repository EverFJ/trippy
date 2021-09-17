const apiKey = process.env.REACT_APP_API_KEY

const config = {
    host: "http://localhost:3002",
    apiKey: null
}

const getHomeData = () => {
    return new Promise((resolve, reject) => {

        fetch(config.host + "/api/home")
            .then(res => res.json())
            .then(data => resolve(data.cities))
            .catch((err) => console.error(err));

    })
}

export {
    apiKey,
    config,
    getHomeData
}
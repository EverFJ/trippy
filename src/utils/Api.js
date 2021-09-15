const config = {
    host: "http://localhost:3002"
}

const getHomeData = () => {
    fetch(config.host + "/api/home")
        .then(res => res.json())
        .then(data => data.cities)
}

export {
    config,
    getHomeData
}
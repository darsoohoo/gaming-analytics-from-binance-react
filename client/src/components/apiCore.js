export const getRecommendations = () => {
    return fetch(`/recommendations`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
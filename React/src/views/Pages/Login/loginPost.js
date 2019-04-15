export function loginPost(type, userData) {
    let url = 'http://localhost:8080/beynusers/findbyuser?username=';
    return new Promise((resolve, reject) => {
        fetch(url + type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
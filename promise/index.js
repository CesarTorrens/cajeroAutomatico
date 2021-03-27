const somethinWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve("hey!");
        } else  {
            reject("ups!!!");
        }
    })
}


somethinWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))
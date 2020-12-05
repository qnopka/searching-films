async function getData(url = '', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) throw Error(response.status);

    return response.json();
}

// https://jsonplaceholder.typicode.com/posts

getData('https://jsonplaceholder.typicode.com/posts', {
    title: 'My custom title',
    body: 'My custom body text',
    userID: 100
})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
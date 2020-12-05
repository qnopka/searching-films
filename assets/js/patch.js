async function getData(url = '', data = {}){
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) throw Error(response.status);

    return response.json();
}

// https://jsonplaceholder.typicode.com/posts/1

getData('https://jsonplaceholder.typicode.com/posts/88', {
    // title: 'My custom title',
    // body: 'My custom body text',
    userId: 1111
})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
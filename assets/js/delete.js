async function getData(url = ''){
    const response = await fetch(url, {
        method: 'DELETE'
    });

    if (!response.ok) throw Error(response.status);

    return response.json();
}

// https://jsonplaceholder.typicode.com/posts/1

getData('https://jsonplaceholder.typicode.com/posts/88')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
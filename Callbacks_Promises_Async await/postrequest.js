async function postre() {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "my first post",
            body: "practice using fetch api usind post request",
            userId: 10
        })
    }
    let res = await fetch("https://jsonplaceholder.typicode.com/posts" , options);
    let data = await res.json();
    return data;
}

async function main() {
    let data = await postre();
    console.log(data);
}

main();
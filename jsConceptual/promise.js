const GITHUB_API = "https://api.github.com/users/yelkar-snehal";

const user = fetch(GITHUB_API);
console.log(user);

user.then((res) => res.json()).then((data) => console.log(data));

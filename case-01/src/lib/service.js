import axios from "axios";

export default async function getData(number) {
  let getUser = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );
  let obj1 = getUser.data;

  let payload = {
    posts: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat",
        body: "quia et suscipit suscipit recusandae",
      },
    ],
  };

  let res = await axios.post(
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`,
    payload
  );

  let data = res.data;
  let merged = { ...obj1, ...data };
  console.log(merged);
}

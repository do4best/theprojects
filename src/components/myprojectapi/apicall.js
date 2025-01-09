export const getData=async ()=>{
    const mydata = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await mydata.json()
}
export const getRandomUser=async ()=>{
    const myuser = await fetch("https://randomuser.me/api/",{
        method:"GET"
    });
    return await myuser.json()
}
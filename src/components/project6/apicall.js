export const getData= async ()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    return (await data).json()
}
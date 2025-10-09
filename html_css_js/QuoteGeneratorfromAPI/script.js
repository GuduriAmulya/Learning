function hello(){
    console.log("Hello");
}
document.getElementById("quote-btn").addEventListener("click", getQuote);
async function getQuote(){
    try{
        document.getElementById("quote").innerText="Loading..."
        document.getElementById("author").innerText="loading author..";
        const response=await fetch("https://api.api-ninjas.com/v1/quotes",{
            method:"GET",
            headers:{'X-Api-Key':'w0azNp2tqrzUc1n+ND0OLA==zPv0F6lGpkie868S'}
        });
        if(!response.ok){
            console.log("erro: ",response.statusText,response.status);
            return;
        }
        let data=await response.json();
        console.log("Quote: ",data);
        document.getElementById("quote").innerText=data[0].quote;
        document.getElementById("author").innerText=data[0].author;
        }
        catch(error){
            console.log("Error fetching");
            return "Error in fetching";

        }

}
getQuote()
// getQuote().then((data)=>{
//     const quote=data[0].quote;
//     const author=data[0].author;
//     document.getElementById("quote").innerHTML=quote;
//     document.getElementById("author").innerText=author;
//     console.log(quote,author);
// })

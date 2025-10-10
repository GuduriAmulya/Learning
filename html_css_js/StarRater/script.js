const stars=document.getElementsByClassName("star")
const output=document.getElementById("output")
console.log(stars)
function rate(n){
    removestars();
    for(let i=0;i<n;i++){
        if(n==1) cls="one";
        if(n==2) cls="two";
        if(n==3) cls="three";
        if(n==4) cls="four";
        if(n==5) cls="five";
        stars[i].className="star "+cls;

    }
    console.log(stars[n-1]);
    output.innerText="Rating is: "+n+"/5";
}
function removestars(){
    for(let i=0;i<5;i++){
        stars[i].className="star";
    }
}
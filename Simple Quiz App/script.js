const submitButton = document.querySelector('#submit');

submitButton.addEventListener("click" , () =>{
    checkinganswer();
})


function checkinganswer(){

    let score = 0 ; 

    if(document.querySelector("#correct1"))score++ ; 
    if(document.querySelector("#correct2"))score++ ; 

    document.write(`Your answer is ${score}`); 
}
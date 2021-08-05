
let profilesDiv = document.querySelector('#profiles');




    

for( i=1; i<22; i++) {

    
let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg= document.createElement('img');


text.innerHTML = "Name:" + profiles.results[i].name.first + " " + profiles.results[i].name.last + "<br>" + "Phone #:" + profiles.results[i].phone + "<br>" + "Email:" + profiles.results[i].email;

newImg.src = profiles.results[i].picture.large;


newDiv.appendChild(newImg);
newDiv.appendChild(text);

console.log(newDiv);

profilesDiv.appendChild(newDiv);
}


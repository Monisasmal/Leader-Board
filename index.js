
// store and show data
let data = [];


// fetch the class from HTML
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".score");
let button = document.querySelector("button");
let rightContainer = document.querySelector(".right-container");



// fill all value with out miss anyone
button.addEventListener("click", function(e){
  e.preventDefault();
    if(fname.value === "" || lname.value ==="" || pcountry.value==="" || pscore.value===""){
        alert("Please fill all the fields");
        return;
    }
    else{
    let playerObj = {
      fname : fname.value,
      lname : lname.value,
      country : pcountry.value,
      score: pscore.value
    };
    data.push(playerObj);

    updateDataOnUI();

    fname.value = "";
    lname.value = "";
    pcountry.value = "";
    pscore.value = "";
  }

});

// create function for updateDateUI for show data in browser

function updateDataOnUI(){
  data.sort((p1,p2) =>{
    return p2.score - p1.score;
  });
  
  
  let showData = `
  <div class="heading">
        <h2>😊Recent Score😊</h2>
        <button class="btn" id="refresh" style="background: linear-gradient(45deg, #c0b413, #9e890f);">Clear
          All</button>
        </div>
        <hr>
    <div class="items">
      <span>FNAME</span>
        <span>LNAME</span>
        <span>COUNTRY</span>
        <span>SCORE</span>
        <span>ADD</span>
        <span>SUB</span>
        <span>DEL</span>
    </div>
  `;

  data.forEach((player) =>{
        showData += `
        <div class = "btn-group">
        <span>${player.fname}</span>
        <span>${player.lname}</span>
        <span>${player.country}</span>
        <span>${player.score}</span>
        <button class="but1">+5</button>
        <button class ="but2">-5</button>
        <button class="del"> <img src="./delete.png" alt="Delete"></button>
        </div>
        `;
  });
      rightContainer.innerHTML = showData;

  // To clear all the data at a time using clear ALL btn
  const clearAll = document.getElementById("refresh");
  clearAll.addEventListener("click", function() {
    data = [];
    updateDataOnUI();
  })
  
        activateButton();

}




// for delete add and sub button
function  activateButton(){
  document.querySelectorAll(".btn-group").forEach((item, index) =>{
    
    item.addEventListener("click", (e) =>{
    

      
      // for +Button
      if(e.target.classList.contains("but1")){
        let scores = parseInt(data[index].score);
        scores += 5;
        data[index].score = scores;
        updateDataOnUI();
      }

      // for -button
      if(e.target.classList.contains("but2")){
        let scores = parseInt(data[index].score);
        scores -= 5;
        data[index].score = scores;
        updateDataOnUI();
      }

      // for delete the id
      if(e.target.classList.contains("del")){
        data.splice(index,1);
        updateDataOnUI();
     }
      
    });
  });
}





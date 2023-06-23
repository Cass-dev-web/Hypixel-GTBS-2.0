// Regex Search
var r2 = document.querySelector("#r2");
var db=false;
function ShowM(m){
  if(db){return}
  r2.innerHTML=m
  db=true
  r2.classList.remove("hide")
  setTimeout(() => {
    r2.classList.add("hide")
    db=false
  }, 1000);
}
$(document).ready(function () {
  
  var wordsArray = arrayData;
  var Count2 = document.querySelector("#count2");
  var Count3 = document.querySelector("#count3");

  Count3.innerHTML=wordsArray.length
  $("[name='username']").keyup(function () {
    var words = $(this).val().replace(/_/g, '.');

    console.log(words);
    try {
      var searchWord = words.toLowerCase()

      var reg = new RegExp(searchWord);
      $("#result").html('');
      
      var Words = 0;
      Count2.innerHTML="0"

      for (var j = 0; j < wordsArray.length; j++) {
        var value = wordsArray[j];
        var eachWord = value.toLowerCase()
        if (reg.test(eachWord)) {
          var i;
          if (searchWord.length != eachWord.length)
            continue;
          for (i = 0; i < searchWord.length; i++) {
            if (searchWord[i] == '.')
              continue;
            if (searchWord[i] != eachWord[i])
              break;
          }
          if (i == searchWord.length)
            // With copy button->> $("#result").append(value + ' <button onclick=\''+`navigator.clipboard.writeText("${value}"); alert("Copied ${value}!")`+'\'>Copy</button> <br>');
            $("#result").append(`<code class="res" onclick="navigator.clipboard.writeText('${value}'); ShowM('Copied ${value}!');">${value}</code>`);
            Words+=1;
            Count2.innerHTML=Words
        }
      }
      if(Words==0&&searchWord.length!=0){
        $("#result").html('<br><span class="error">No results were found!</span>');
      }
    }
    catch (e) {
      // regular expression error
    }

  });
});

// Help Modal
var helpModal = document.getElementById("help-modal");
var helpBtn = document.getElementById("help-btn");
var helpCloseBtn = document.getElementById("help-modal-close");
var ContactButton = document.querySelector("#contact")
var ContactModal = document.querySelector("#contactModal")
var missingWordModal = document.querySelector("#missingWordModal");


ContactButton.addEventListener("click",()=>{
  ContactModal.classList.toggle("hide")
})
document.querySelector("#contact-modal-close").addEventListener("click",()=>{
  ContactModal.classList.toggle("hide")
})
document.querySelector("#missing").addEventListener("click",()=>{
  missingWordModal.classList.toggle("hide")
})
document.querySelector("#missingWord-modal-close").addEventListener("click",()=>{
  missingWordModal.classList.toggle("hide")
})

helpBtn.addEventListener("click", function () {
  helpModal.style.display = "block";
});
helpCloseBtn.addEventListener("click", function () {
  helpModal.style.display = "none";
});


// Character Count
var count = document.getElementById("count")
var input = document.getElementById("input")

input.addEventListener("input", function (e) {
  count.innerHTML = e.target.value.length
})
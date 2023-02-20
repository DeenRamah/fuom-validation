//.match()
//Definition and Usage
//The match() method matches a string against a regular expression **
//The match() method returns an array with the matches.
//The match() method returns null if no match is found.
//.match() = is used to search for a value
//seraching
//let text = "The rain in SPAIN stays mainly in the plain";
//text.match(/ain/);

//global search
//let text = "The rain in SPAIN stays mainly in the plain";
//text.match(/ain/g);

//case sensitive global serach
//let text = "The rain in SPAIN stays mainly in the plain";
//text.match(/ain/gi);
const input = document.querySelector("input"),
      icon = document.querySelector(".icomboton")

      

        input.addEventListener("keyup", () => {
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

          if(input.value ===""){
           icon.classList.replace("uil-check-circle", "uil-envelope");
           icon.style.color = "#de0611"
       }
         if(input.value.match(pattern)){
           icon.classList.replace("uil-envelope", "uil-check-circle");
           return icon.style.color = "#4bb543"
        }
        icon.classList.replace("uil-check-circle", "uil-envelope");
        icon.style.color = "#de0611"
        }) 
//////////this will display icon red and valid green
     //**input.addEventListener("keyup", () => {
      //*  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      //  if(input.value ===""){
        //*return console.log("Input is empty")
      //  }
      // if(input.value.match(pattern)){
        //    icon.classList.replace("uil-envelope", "uil-check-circle");
          //  return icon.style.color = "#4bb543"
        //}
        //icon.classList.replace("uil-check-circle", "uil-envelope");
        //return icon.style.color = "#de0611"
    //*  }) */


       // let pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
        ///^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        //"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
        ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//*        if(input.value ===""){
    /**return */
             
       //** }
      //  if(input.value.match(pattern)){
   //         icon.classList.replace("uil-envelope","uil-check-circle");
      //  }
   //
import { automobil_backend } from "../../declarations/automobil_backend";
async function submitCarAd() {
    // Collect form data
    var make = document.getElementById("make").value;
    var model = document.getElementById("model").value;
    var year = document.getElementById("year").value;

    // Call the Internet Computer backend using fetch
    const response = await fetch("https://your-canister-id.ic0.app/api/submitCarAd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make: make,
        model: model,
        year: year,
      }),
    });

    if (response.ok) {
      // Submission successful, handle the response as needed
      const data = await response.json();
      console.log("Car Advertisement Submitted:", data);
    } else {
      // Submission failed, handle the error
      console.error("Failed to submit car advertisement");
    }
  }
  function turning(turn){
  
    let bElement = document.querySelector(turn);
   
    
    if(bElement.classList.contains('is-toggle')){
      if(bElement.innerText === 'Buy'){
        bElement.innerHTML = 'Added to PCart';
        bElement.classList.add('is-Purchased');
      }
      else{
        bElement.innerHTML = 'Buy';
        bElement.classList.remove('is-Purchased');
    }
    bElement.classList.remove('is-toggle');
  }
    else{
      if(bElement.innerText === 'Buy'){
        bElement.innerHTML = 'Added to PCart';
        bElement.classList.add('is-Purchased');
      }
      else{
        bElement.innerHTML = 'Buy';
        bElement.classList.remove('is-Purchased');
    }
    bElement.classList.add('is-toggle');
    
    }
  }
  function buy(turn){
    
    let buttonElement = document.querySelector(turn);
      if(buttonElement.innerText === 'Buy'){
        buttonElement.innerHTML = 'Added to PCart';
        buttonElement.classList.add('is-Purchased');
      }
      else{
        buttonElement.innerHTML = 'Buy';
        buttonElement.classList.remove('is-Purchased');
    }
  }


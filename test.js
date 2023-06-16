const body = document.querySelector("button")

console.log("connected successfully")

body.addEventListener('click',()=>{
  
        // Send a request to a server-side endpoint to log the IP address
        fetch('http://127.0.0.1:3000/log') // Replace with your server-side endpoint
          .then(response => response.text())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
})


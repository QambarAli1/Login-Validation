function onSignup() {
    // get input values
    var name = document.getElementById('name');
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var address = document.getElementById('address');
    var number = document.getElementById('number');
    var message = document.getElementById("message");

    var user = {
        name: name.value,
        email: email.value,
        password: password.value,
        address: address.value,
        number: number.value
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        message.innerHTML = user.email + " use in another account";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}

function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "dashboard.html";
    } else {
        message.innerHTML = "Invalid credentials";
        message.style.color='red';
        email.value = "";
        password.value="";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}

function onLogout() {
    // var message = document.getElementById("message");
    localStorage.removeItem("user");
    // message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 1000);
}

function getCurrentUser() {
    var detial = document.getElementById("detial");
    var currentUserName = document.getElementById('currentUserName');
    var currentUserEmail = document.getElementById('currentUserEmail');
    var currentUserAddress = document.getElementById('currentUserAddress');
    var currentUserNumber = document.getElementById('currentUserNumber');
    var user = JSON.parse(localStorage.getItem("user"));
    detial.innerHTML = user.name;
    currentUserName.innerHTML = user.name;
    currentUserEmail.innerHTML = user.email;
    currentUserAddress.innerHTML = user.address;
    currentUserNumber.innerHTML = user.number;
}




//Post items 

function post(){
    var title = document.getElementById('title');
    var  description = document.getElementById('description');

    var post = document.getElementById('postItem');
    var divMain = document.createElement('div');
    var h5 = document.createElement('h5');
    var divInner = document.createElement('div');
    var image = document.createElement('img');
    var para = document.createElement('p')
    

    divMain.setAttribute("class","card")
    divMain.setAttribute("style","width: 18rem;")
    image.setAttribute("class","card-img-top")
    image.setAttribute("src","2.jpg")
    divInner.setAttribute("class","card-body")
    h5.setAttribute("class","card-title")
    para.setAttribute("class","card-text")

    var h5Text = document.createTextNode(title.value);
    h5.appendChild(h5Text)
    var paraText = document.createTextNode(description.value);
    para.appendChild(paraText)
    divInner.appendChild(h5)
    divInner.appendChild(para)
    divMain.appendChild(image)
    divMain.appendChild(divInner);
    post.appendChild(divMain);
    
}

/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
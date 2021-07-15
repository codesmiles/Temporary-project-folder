function validate(){
    var password = document.forms['0'].password.value;
    var cpassword = document.forms['0'].cpassword.value;

    var pass_error = document.getElementById('pass_error');
    var pass_error2 = document.getElementById('pass_error2');

    

    if(password.length < 8){
    pass_error.style.display = "block";
    return false;
} 
if(cpassword !== password){
    pass_error2.style.display = "block";
    return false;
}

}

const validatePassword = () => {
    const password = document.forms['0'].password.value, 
    cPassword = document.forms['0'].cpassword.value,
    passwordError = document.getElementById('pass_error'),
    passwordError2 = document.getElementById('pass_error2');
    let response = true;
    if (password.length < 8)
        {passwordError.style.display = "block";
        response = false;}
    if (cPassword !== password)
        {passwordError2.style.display = "block";
        response = false;}
    return response;
}

const apiGet = async(apiConfigObject, data = {}) => {
    try {
        // Default options are marked with *
        const response = await fetch(apiConfigObject.url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log(error.message);
        return [{
            image: "https://iammastercraft.github.io/mobileFirstAid/svg/404.svg",
            title: "Error",
            content: "Couldn't communicate with API",
            author: "BackendService",
            dateGenerated: new Date(Date.now()),
            size: "12",
            path: true,
        }]
    }

}

const apiOthers = async(apiConfigObject, data = {}) => {
    try {
        // Default options are marked with *
        const response = await fetch(apiConfigObject.url, {
            method: apiConfigObject.method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiConfigObject.token ?? 'must-be-ment'}`
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
        console.log(error.message);
        return [{
            image: "https://iammastercraft.github.io/mobileFirstAid/svg/404.svg",
            title: "Error",
            content: "Couldn't communicate with API",
            author: "BackendService",
            dateGenerated: new Date(Date.now()),
            size: "12",
            path: true,
        }]
    }

}


const LoginToServer = () => {
    console.log(validatePassword())
    if (validatePassword()) {
        // everything is OK
        const first_name = document.getElementById("firstName").value,
        last_name = document.getElementById("lastName").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value,
        password2 = document.getElementById("cpassword").value;
        if (!first_name || !last_name || !email || !password || !password2)
            {alert("Omooooo, one or more required fields no get value...")
            return false;}
        apiOthers({
            url: "https://a-money-tracker.herokuapp.com/auth/signup",
            method: "POST"
        }, {
            first_name,
            last_name,
            email,
            password,
            password2,
        });
    } else {
        console.error("Password palava");
    }
}
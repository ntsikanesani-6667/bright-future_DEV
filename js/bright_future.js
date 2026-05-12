//PopUp Logic
const overlay = document.getElementById('overlay');
const overLay = document.getElementById('over-lay');
const openBTN = document.getElementById('open-login-btn');
const openbtn = document.getElementById('open-signup-btn');
const closeBTN = document.getElementById('CloseLoginBtn');
const closebtn = document.getElementById('CloseSignupBtn');
const STAGE = document.getElementById('stage');

//Popup cube when wondow starts
STAGE.classList.remove('Stage');

//Popup login form and close signup form
openBTN.addEventListener('click', () => 
    {
        overlay.classList.remove('OverLay'),
        overLay.classList.add('Over-Lay'),
		STAGE.classList.add('Stage')
    });

//Close login form with button
closeBTN.addEventListener('click', () => 
{
	overlay.classList.add('OverLay'),
	STAGE.classList.remove('Stage')
	});

//Popup signup form and close login form
openbtn.addEventListener('click', () => 
    {
        overLay.classList.remove('Over-Lay'),
        overlay.classList.add('OverLay'),
		STAGE.classList.add('Stage')
    });

//Close signup form
closebtn.addEventListener('click', () => 
	{
		overLay.classList.add('Over-Lay'),
		STAGE.classList.remove('Stage')
	});

//Form interaction logic
let db;
const statusDiv = document.getElementById('status');
const StatusDiv = document.getElementById('Status');

//Create indexedDB
const request = indexedDB.open("AuthorizationDB", 1);
request.onupgradeneeded = (e) => {
    db = e.target.result
    //Create an object store for storing form inputs and a unique index finder
    const store = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
    store.createIndex("username", "username", { unique: true });
};

request.onsuccess = (e) => { db = e.target.result; };

// --- REGISTRATION LOGIC ---
        document.getElementById('SignupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const transaction = db.transaction(["users"], "readwrite");
            const store = transaction.objectStore("users");

            const newUser = {
                username: document.getElementById('SignupUser').value,
                password: document.getElementById('SignupPassword').value
            };

            const addRequest = store.add(newUser);
            addRequest.onsuccess = () => {
                StatusDiv.style.color = "green";
                StatusDiv.innerText = "Account created! Now try logging in.";
                e.target.reset();
            };
            addRequest.onerror = () => { 
                StatusDiv.style.color = "red";
                StatusDiv.innerText = "Username: " + "already exist."; 
            };
        });

        // --- LOGIN / MATCHING LOGIC ---
        document.getElementById('LoginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const userInput = document.getElementById('LoginUser').value;
            const passInput = document.getElementById('LoginPassword').value;

            const transaction = db.transaction(["users"], "readonly");
            const store = transaction.objectStore("users");
            const index = store.index("username");

            // Search for the user by the "username" index
            const getRequest = index.get(userInput);

            getRequest.onsuccess = () => {
                const user = getRequest.result;

                if (user && user.password === passInput) {
                    window.location.replace("html/dashboard.html", "_self");
                } else {
                    statusDiv.style.color = "red";
                    statusDiv.innerText = "Invalid username or password.";
                }
            };
        });
//Collect popup features
const Poverlay = document.getElementById('profile-overlay');
const aboutOverlay = document.getElementById('about-overlay');
const contactOverlay = document.getElementById('contact-overlay');
const helpOverlay = document.getElementById('help-overlay');
const openBTN = document.getElementById('profile-btn');
const closeBTN = document.getElementById('close-profile');
const aboutUs = document.getElementById('about');
const CaboutUs = document.getElementById('close-about');
const contactUs = document.getElementById('contact');
const CcontactUs = document.getElementById('close-contact');
const help = document.getElementById('help');
const Chelp = document.getElementById('close-help');
const STAGE = document.getElementById('stage');
const CONTAINER = document.getElementById('container');
const Explore = document.getElementById('explore');
const env = document.getElementById('environment');
const ENVBTN = document.getElementById('env-btn');

//Popup cube when window starts
STAGE.classList.remove('Stage');

//Popup container when window starts
CONTAINER.classList.remove('Container');

//Close container when cube is clicked and popup environment
Explore.addEventListener('click', () => 
	{
		CONTAINER.classList.add('Container'),
		env.classList.remove('Environment')
	});
//Close environment and popup container when back button is clicked
ENVBTN.addEventListener('click', () => 
	{
		env.classList.add('Environment'),
		CONTAINER.classList.remove('Container')
	});

//Collect logout feature
const logout = document.getElementById('LOGOUT');

//Open profile popup and close all other popups
openBTN.addEventListener('click', () => 
    {
        Poverlay.classList.remove('profile-over-lay'),
        aboutOverlay.classList.add('about-over-lay'),
        contactOverlay.classList.add('contact-over-lay'),
        helpOverlay.classList.add('help-over-lay'),
		STAGE.classList.add('Stage');
    });
//Close profile popup
closeBTN.addEventListener('click', () => 
	{
		Poverlay.classList.add('profile-over-lay'),
		STAGE.classList.remove('Stage')
	});

//Popup About Us and close all other popups
aboutUs.addEventListener('click', () => 
    {
        aboutOverlay.classList.remove('about-over-lay'),
        Poverlay.classList.add('profile-over-lay'),
        contactOverlay.classList.add('contact-over-lay'),
        helpOverlay.classList.add('help-over-lay'),
		STAGE.classList.add('Stage');
    });
//Close About us
CaboutUs.addEventListener('click', () => 
	{
		aboutOverlay.classList.add('about-over-lay'),
		STAGE.classList.remove('Stage')
	});

//Popup Contact Us and close all other popups
contactUs.addEventListener('click', () => 
    {
        contactOverlay.classList.remove('contact-over-lay'),
        Poverlay.classList.add('profile-over-lay'),
        aboutOverlay.classList.add('about-over-lay'),
        helpOverlay.classList.add('help-over-lay'),
		STAGE.classList.add('Stage');
    });
//Close Contact us
CcontactUs.addEventListener('click', () => 
	{
		contactOverlay.classList.add('contact-over-lay'),
		STAGE.classList.remove('Stage')
	});

//popup Help and close all other popups
help.addEventListener('click', () => 
    {
        helpOverlay.classList.remove('help-over-lay'),
        contactOverlay.classList.add('contact-over-lay'),
        aboutOverlay.classList.add('about-over-lay'),
        Poverlay.classList.add('profile-over-lay'),
		STAGE.classList.add('Stage');
    });
//Close Help
Chelp.addEventListener('click', () => 
	{
		helpOverlay.classList.add('help-over-lay'),
		STAGE.classList.remove('Stage')
	});

//Logout
logout.addEventListener('click', () => {window.location.replace("../index.html", "_self")});

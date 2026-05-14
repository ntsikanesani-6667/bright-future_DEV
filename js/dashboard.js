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
const PHOTOS = document.getElementById('photos');
const VIDEOS = document.getElementById('videos');
const MUSIC = document.getElementById('music');
const BOOKS = document.getElementById('books');
const Ppanel = document.getElementById('photos-panel');
const Vpanel = document.getElementById('videos-panel');
const Mpanel = document.getElementById('music-panel');
const Bpanel = document.getElementById('books-panel');
const Spanel = document.getElementById('slide-panel');
const done = document.getElementById('done');
const dOne = document.getElementById('dOne');
const doNe = document.getElementById('doNe');
const donE = document.getElementById('donE');

//Popup cube when window starts
STAGE.classList.remove('Stage');

//Popup container when window starts
CONTAINER.classList.remove('Container');

//Popup slidepanel when window starts
Spanel.classList.remove('Slide-panel');

//Popup photos and close slidepanel and others
PHOTOS.addEventListener('click', () => 
	{
		Spanel.classList.add('Slide-panel'),
		Vpanel.classList.add('Videos-panel'),
		Mpanel.classList.add('Music-panel'),
		Bpanel.classList.add('Books-panel'),
		Ppanel.classList.remove('Photos-panel')
	});

//Popup videos and close slidepanel
VIDEOS.addEventListener('click', () => 
	{
		Spanel.classList.add('Slide-panel'),
		Ppanel.classList.add('Photos-panel'),
		Mpanel.classList.add('Music-panel'),
		Bpanel.classList.add('Books-panel'),
		Vpanel.classList.remove('Videos-panel')
	});
//Popup music and close slidepanel
MUSIC.addEventListener('click', () => 
	{
		Spanel.classList.add('Slide-panel'),
		Ppanel.classList.add('Photos-panel'),
		Vpanel.classList.add('Videos-panel'),
		Bpanel.classList.add('Books-panel'),
		Mpanel.classList.remove('Music-panel')
	});

//Popup books and close slidepanel
BOOKS.addEventListener('click', () => 
	{
		Spanel.classList.add('Slide-panel'),
		Ppanel.classList.add('Photos-panel'),
		Vpanel.classList.add('Videos-panel'),
		Mpanel.classList.add('Music-panel'),
		Bpanel.classList.remove('Books-panel')
	});

//Close photos and popup slidepanel
done.addEventListener('click', () => 
	{
		Ppanel.classList.add('Photos-panel'),
		Spanel.classList.remove('Slide-panel')
	});	
//Close videos and popup slidepanel
dOne.addEventListener('click', () => 
	{
		Vpanel.classList.add('Videos-panel'),
		Spanel.classList.remove('Slide-panel')
	});

//Close music and popup slidepanel
doNe.addEventListener('click', () =>
	{
		Mpanel.classList.add('Music-panel'),
		Spanel.classList.remove('Slide-panel')
	});

//Close books and popup slidepanel
donE.addEventListener('click', () => 
	{
		Bpanel.classList.add('Books-panel'),
		Spanel.classList.remove('Slide-panel')
	});

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
		Bpanel.classList.add('Books-panel'),
		Mpanel.classList.add('Music-panel'),
		Vpanel.classList.add('Videos-panel'),
		Ppanel.classList.add('Photos-panel'),
		Spanel.classList.remove('Slide-panel'),
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
const markAllBtn = document.querySelector('.section_one p');
const notificationNumber = document.querySelector('.section_one span') ;
const markProfile = document.querySelector('.Mark_profile');
const angelaProfile = document.querySelector('.Angela_profile');
const jacobProfile = document.querySelector('.Jacob_profile');
const icon = document.querySelectorAll('i');

markAllBtn.addEventListener('click', function() {

    icon.forEach(notification => {
        notification.style.display = 'none'
    });

    notificationNumber.innerText = '0';
    markProfile.style.backgroundColor = 'white';
    angelaProfile.style.backgroundColor = 'white';
    jacobProfile.style.backgroundColor = 'white';
});
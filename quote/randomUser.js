const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => userData(data))
}
const userData = user => {
    const userImage  = document.getElementById('image')
    userImage.innerHTML = user.results[0].picture.large;
    const userName = document.getElementById('name');
    userName.innerText = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    const userGender = document.getElementById('gender');
    userGender.innerText = user.results[0].gender;
    const userLocation = document.getElementById('location')
    userLocation.innerText = user.results[0].location.city+ ', ' + user.results[0].location.country;

    console.log(user.results[0].picture.large);
}
loadUser()
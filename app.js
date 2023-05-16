let navigation = document.querySelector('.nav');
let close = document.querySelector('.close');

navigation.onclick = function() {
    navigation.classList.add('active');
}
close.onclick = function() {
    navigation.classList.remove('active');
}
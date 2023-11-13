window.addEventListener('load', () => {
    document.getElementById('closead').addEventListener('click', () => {
        let adOne = document.querySelector('.ad-space-two');
        adOne.style.display = 'none';
    });
    document.querySelector('.mv').addEventListener('click', () => {
        window.location.href = '#';
        alert('Under Development')
    });
});
setTimeout(function() {
    let adOne = document.querySelector('.ad-space-two');
    adOne.style.display = 'block';
}, 1000);
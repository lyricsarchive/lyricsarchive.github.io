window.addEventListener('load', () => {
    setTimeout(function() {
        let adOne = document.querySelector('.ad-space-two');
        adOne.style.display = 'block';
    }, 1000);
    document.getElementById('closead').addEventListener('click', () => {
        let adOne = document.querySelector('.ad-space-two');
        adOne.style.display = 'none';
    });
    document.querySelector('.mv').addEventListener('click', () => {
        window.location.href = '#';
        alert('Under Development')
    });
});
var i = 0;
var images = [];
var slideTime = 6000; // 6 seconds

images[0] = '../image/anh-2-1578609269860992527780 1 1.png';
images[1] = 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[2] = 'https://images.pexels.com/photos/6572955/pexels-photo-6572955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[3] = 'https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[4] = 'https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[5] = 'https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[6] = 'https://images.pexels.com/photos/1325681/pexels-photo-1325681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

function changePicture() {
    
    document.getElementById("main").style.backgroundImage = "url(" + images[i] + ")";
    document.getElementById("main").classList.add('total__web');

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
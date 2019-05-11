var cvs = document.getElementById('background');
cvs.height = window.innerHeight;
cvs.width = window.innerWidth;
var ctx = cvs.getContext('2d');
var font = 'arial';
var fontSize = 10;
ctx.font = fontSize + 'px ' + font;
var cols = cvs.width / fontSize;
var charSet;
charSet = '0123456789ABCDEF';
charSet = charSet.split('');
var drops = [];
for (var col = 0; col < cols; col++)
  drops[col] = Math.floor(Math.random() * cvs.height);
setInterval(rain, 25);
function rain() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  for (var col = 0; col < drops.length; col++) {
    var char = charSet[Math.floor(Math.random() * charSet.length)];
    ctx.fillStyle = randColour();
    ctx.fillText(char, col * fontSize, drops[col] * fontSize);
    if (Math.random() > 0.99)
      drops[col] = 0;
    drops[col]++;
  }
}
function randColour()
{
  return'rgb(' + 
    Math.floor(Math.random() * 256) + ',' + 
    Math.floor(Math.random() * 256) + ',' + 
    Math.floor(Math.random() * 256) + ')';
}
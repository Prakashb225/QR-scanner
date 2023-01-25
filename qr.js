var qrcode = require('qrcode');
var value = [
    Date()
]
qrcode.toFile("qr.png",value,function(err){
    if(err)
    console.log(err)
})
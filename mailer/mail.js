var mailer=require('nodemailer');

var transporter=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'ekta30121995@gmail.com',
        pass:'et30121995'
    }
});
var mailOptions={
    from:'ekta30121995@gmail.com',
    to:'ekta_30@outlook.com',
    subject:'Sending Email with nodejs',
    text:'That was easy'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Email sent: '+info.response);
    }
});
const nodeMailer  = require('nodemailer');

const  transporter = nodeMailer.createTransport({
    service : 'Gmail',
    auth:{
        user:'rohityeginwar830@gmail.com',
        pass:'vanqmcvzctpahcik'
    }
})

const mailOptions = {
    from        :'rohityeginwar830@gmail.com',
    to          :'yeginwarr@gmail.com',
    subject     :'demo mail sending',
    text        :'sample mail testing . send mail through node.js',
    html        :'<b><i>example email</i></b>',

}

transporter.sendMail(mailOptions , (err,info)=>{
    if(err){
        console.log('mail not sent ' , err)
    }else{
        console.log('mail sent successfully' , info.response);
    }
})
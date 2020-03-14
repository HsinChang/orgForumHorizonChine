const nodeMailer = require('nodemailer');
const fs = require('fs');

module.exports = (req, res) => {
    let transporter = nodeMailer.createTransport({
        service: 'QQex',
        auth: {
            user: 'forum@afcp-paristech.org',
            pass: 'AFCPzui6'
        }
    });

    let file = req.files.fileupload;
  
    // Use the mv() method to place the file in upload directory 
    if (!fs.existsSync('./uploads')){
        fs.mkdirSync('./uploads');
    }
    file.mv('./uploads/' + file.name);

    let mailOptions = {
        from: 'forum@afcp-paristech.org',
        to: 'forum.horizon.chine.2020@gmail.com',
        subject: req.body.name +'_'+req.body.entreprise + '_'+ req.body.job,
        text: '本邮件由地平线官网发送',
        subject: req.body.subject,
        body: `申请人：${req.body.name}； 申请企业：${req.body.entreprise} ；申请岗位：${req.body.job}；简历见附件`,
        attachments: [
            {
                filename: file.name,
                path: './uploads/' + file.name
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            fs.unlinkSync('./uploads/' + file.name); //remove the file
        }
    });

    res.redirect('/apply-success');
}
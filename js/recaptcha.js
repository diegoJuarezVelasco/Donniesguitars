
var recaptchaWidget;
var onloadCallback = function() {
    /*alert("grecaptcha is ready!");*/
    recaptchaWidget = grecaptcha.render('recaptcha', {
        'sitekey' : '6LfvoFQaAAAAADncBde3WGq_VBnXL8GL25SKAlJE',
        'theme' : 'dark',
        'size' : 'normal'
    });

};

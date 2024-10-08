'use strict';
const paymentSuccess= true;
const marks= 70;

function enroll(callback){
    console.log('Course enrollment is in progress.');

    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }
        else{
            console.log('payment failed');
        }
    }, 2000);
}

function progress(callback){
    console.log('Course on progress...');

    setTimeout(function(){
        if(marks >= 80){
            callback();
        }
        else{
            console.log('You could not get enough marks to get the certificate');
        }
    }, 3000);
}
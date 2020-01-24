var signs = ["Aquarius","Pisces", "Aries","Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]
var horo = [
    "Stay on track with your goals and you will have a great week!",
    "This will be a great week for you! remember to communicate with those in your life, and you will find success!",
    "Good luck is on your side! Keep on doing what you're doing!",
    "Take some time this week to rest, and you will thrive!",
    "Don't let other hold you back, stay on track and you will be successful!",
    "Remember to stay calm if you feel overwhelmed in the next few days. You are doing great!",
    "Don't forget to enjoy nature this week!",
    "Find something you are passionate about and stick with it! You will be surprised by the results.",
    "Try to find a creative outlet this week! You will be happy you did",
    "Make your own choices and don't be influenced by those around you. Trust your intuition!",
    "You may have some trouble this week, but don't let it get you down. Next week will be better.",
    "Keep an open mind to new opportunities! You will be glad you did.",
    "Undefined"
];

var images = ["images/capri.png", "images/aqua.png", "images/pisces.png", "images/aries.png",
    "images/taurus.png", "images/gemini.png", "images/cancer.png", "images/leo.png",
    "images/virgo.png", "images/libra.png", "images/scorp.png", "images/sag.png"];

function onSubmit(){
    var name = document.getElementById("username").value
    var month = parseInt(document.getElementById("month").value) + 1
    var day = parseInt(document.getElementById("day").value )+ 1
   // var images = document.getElementById("images")

    console.log(month)
    console.log(day)

    var sign = determineSign(month,day)
    document.getElementById("sign").innerHTML = "Hi " + name + ". " + isBirthday(day, month) + "Your sign is: " + signs[sign];

    document.getElementById("horoscope").innerHTML = horo[sign];
    document.getElementById("image").src= images[sign];
    document.getElementById("sign").innerHTML = signs[sign];
}
function determineSign(month,day) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return 0
        // Aquarius
    }
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return 1
        //Pisces
    }
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return 2
        //Aries
    }
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return 3
        //Taurus
    }
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return 4
        //Gemini
    }
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return 5
        //Cancer
    }
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return 6
        //Leo
    }
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return 7
        //Virgo
    }
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return 8
        //Libra
    }
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return 9
        //Scorpio
    }
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return 10
        //Sagittarius
    }
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return 11
        //Capricorn
    }
}

 function determineHoroscope(x,y){
     //var a = determineHoroscope(x, y);
     var scope = "";
     if(a == 1) {
         scope =1
     }
     if(a == 2) {
         scope =2
     }
     if(a == 3) {
         scope =3
     }
     if(a == 4) {
         scope = 4
     }
     if (a == 5) {
         scope = 5
     }
     if (a == 6) {
         scope = 6
     }
     if (a == 7) {
         scope = 7
     }
     if (a == 8) {
         scope = 8
     }
     if (a == 9) {
         scope = 9
     }
     if (a == 10) {
         scope = 10
     }
     if (a == 11) {
         scope = 11
     }
     if (a == 12) {
         scope = 12
     }
     return scope;
 }

function isBirthday(x, y) {
    var out = "";
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    if (x == date && y == month) {
        res = "Happy Birthday! ";
    }
    return out;
}

         function realDate(x, y) {
             if (x == "" || y == "") {
                 alert("Invalid Date");
                 return false;
             }
             if (y == 2 && (x == 31 || x == 30 || x == 29)) {
                 alert("Invalid Date");
                 return false;
             }
             if (x == 31 && (y == 9 || x == 4 || x == 6 || x == 11)) {
                 alert("Invalid Date");
                 return false;
             }
             if (x >= 32 || y >= 13) {
                 alert("Invalid Date");
                 return false;
             }
         }

         function determineImage(sign) {
             if (sign == "Capricorn") {
                 return images[0];
             }

             if (sign == "Aquarius") {
                 return images[1];
             }

             if (sign == "Pisces") {
                 return images[2];
             }

             if (sign == "Aries") {
                 return images[3];
             }

             if (sign == "Taurus") {
                 return images[4];
             }

             if (sign == "Gemini") {
                 return images[5];
             }

             if (sign == "Cancer") {
                 return images[6];
             }

             if (sign == "Leo") {
                 return images[7];
             }

             if (sign == "Virgo") {
                 return images[8];
             }

             if (sign == "Libra") {
                 return images[9];
             }

             if (sign == "Scorpio") {
                 return images[10];
             }

             if (sign == "Sagittarius") {
                 return images[11];
             }

}
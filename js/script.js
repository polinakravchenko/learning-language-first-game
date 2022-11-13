// const N = 7;
// alert("Варіант: " +  N + "\nКравченко Поліна");

var username = prompt("Уведіть ім'я користувача: ");
if (username == ''){
    username=prompt("Ви забули ввести ім'я користувача: ");
}

const cards = [
    {src: "./img/apple.png", word: "Apple", translate: "яблуко"},
    {src: "./img/ball.png", word: "Ball", translate: "м'яч"}, 
    {src: "./img/car.png", word: "Car", translate: "машина"},
    {src: "./img/doctor.png", word: "Doctor", translate: "лікар"},
    {src: "./img/doll.png", word: "Doll", translate: "лялька"}, //5
    {src: "./img/education.png", word: "Education", translate: "освіта"}, 
    {src: "./img/family.png", word: "Family", translate: "сім'я"},
    {src: "./img/pizza.png", word: "Pizza", translate: "піца"}, 
    {src: "./img/strawberry.png", word: "Strawberry", translate: "полуниця"}, 
    {src: "./img/student.png", word: "Student", translate: "студент"} //10
]

$(window).on('load', function() {

    $("#correct").css("color", "rgb(15, 165, 7)");
    $("#wrong").css("color", "rgb(190, 30, 21)");

    var length = cards.length;
    var randomcards = Math.floor(Math.random() * length);
    var count = 1;
    var tempSrc = [10];
    var tempWord = [10]; 
    var tempTranslate = [10];
    var check = 0;

    for(let i = 0; i < length; i++)
    {
        randomcards = Math.floor(Math.random() * (length - i)) + i;
        tempSrc[i] = cards[randomcards].src;
        tempWord[i] = cards[randomcards].word;
        tempTranslate[i] = cards[randomcards].translate;
        cards[randomcards].src = cards[i].src;
        cards[randomcards].word = cards[i].word;
        cards[randomcards].translate = cards[i].translate;
        cards[i].src = tempSrc[i];
        cards[i].word = tempWord[i];
        cards[i].translate = tempTranslate[i];
    }

    $(".cards").attr("src", tempSrc[count - 1]);
    $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");

    var rightbutton = document.getElementById("right");
    var leftbutton = document.getElementById("left");

    rightbutton.addEventListener('click', () => {
        if(count < 10)
        {
            count++;
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--;
            }
            $("#answer").val('');
        }
        else
        {
            $("#count").html(count + " / 10");
            $(".cards").attr("src", tempSrc[count - 1]);
            $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
            if(check == 0)
            {
                if($("#answer").val().toLowerCase() == tempTranslate[count - 2])
                {
                    $("#correct").text(Number($("#correct").text()) + 1);
                }
                else
                {
                    $("#wrong").text(Number($("#wrong").text()) + 1);
                }
            }
            else
            { 
                check--; 
            }
            $("#answer").val('');

            var result = Number($("#correct").text());

            if(result <= 4)
            {
                alert("У " +  username + " низький рівень англійської мови!\nНабрано " + result + " з 10 правильних відповідей.");
            }
            else
            {
                if(result <= 8)
                {
                    alert("У " + username + " середній рівень англійської мови!\nНабрано " + result + " з 10 правильних відповідей.");
                }
                else
                {
                    if(result <= 10)
                    {
                        alert("У " + username + " високий рівень англійської мови!");
                    }
                }
            }
        window.location.href=".\\index.html";
        }
    });

    leftbutton.addEventListener('click', () => {
        if (count != 1) 
        {
        count--;
        check++;
        $("#count").html(count + " / 10");
        $(".cards").attr("src", tempSrc[count - 1]);
        $(".container>div").html("<p>" + tempWord[count - 1] + "</p>");
        $("#answer").val('');
        }
        else 
        {
            alert("Поверніться до вивчення слів!")
        }
    });
});

function correct_ans(ans,flim){
    var ans_list = ans.split();
    var flim_list = flim.split();
    var m = flim.length;
    var n = 0;
    for(i=0;i<m;i++){
        if(ans_list[i] === flim_list[i]){
            n=n+1;
        }
    }
    if (m === n){
        return true;
    }
}
function unlock(qn, movie, letter) {
    var ref = movie.split("");
    var qn_list = qn.split("");
    var temp = [];
    var n = movie.length;
    var checkAns = correct_ans(qn,movie)
    if(checkAns){
        $("#user_inp").hide();
        $(".decision").show();
        yui();
        $("#movi").text("Correct Answer ✅");
        $("#question").text(ans);
    }
    for (var i = 0; i < n; i++) {
        if (ref[i] == letter) {
            temp.push(ref[i]);
        } else {
            if (qn_list[i] == "_") {
                temp.push("_");
            } else {
                temp.push(ref[i]);
            }
        }
    }
    var qn_new = temp.join("");
    return qn_new;
}
function create_question(movie) {
    var n = movie.length;
    var temp = [];
    for (var i = 0; i < n; i++) {
        temp.push("_");
    }
    var qn = temp.join("");
    return qn;
}
$(".decision").hide();
$(".esc").on('click',function(){
    $(".esc").hide();
    $(".level").hide();
    $(".dialogue-box").hide();
    $("#movi").hide();
    $("#end").show();
    $(".guess").hide();
});
$(".guess").on('click',function(){
    $("#movi").text("Guess The Movie Name");
    $(".pn1").text("LEVEL : ");
    $(".decision").hide();
    $(".dialogue-box").show();
});
$("#end").hide();
$(".level").hide();
$(".dialogue-box").hide();
$("#btn1").click(function(){
var chances = 10;
var p1Name = $("#p1name").val();
$("#playerNameForm").hide();
$(".dialogue-box").show();
$(".level").show();
//$(".pn1").text("LEVEL : "+level);
$(".chance").text("CHANCES LEFT : "+chances);
$("#turns").text(" Welcome ! "+p1Name);
setTimeout(function(){
    $("#turns").text(" Enter your guess ");
    },1099);  
});
yui();
function yui(){
    var movies = ["jersey","animal","magadheera","darling","solo","dasara","pushpa","leo","vikram","jailer","manmadhudu","seetharamam"];
    $("#turns").text(" Enter your guess ");
    for(let i=0 ; i<1 ; i++){
        var picked_movie = movies[Math.floor(Math.random()*(movies.length))];
        qn = create_question(picked_movie);
        $("#question").text(qn); 
        var modifiied_qn=qn;
        $("#turns").text(" Enter your guess ");
        for(let j=0 ; j<5 ; j++){
            $("#turns").text(" Enter your guess ");
            $("#ans_btn").on('click' , kl);
            function kl(){
                var letter = $("#input-answer").val();
                $("#turns").text(" Enter your guess ");
                if(picked_movie.includes(letter)){
                    modifiied_qn = unlock(modifiied_qn,picked_movie,letter);
                    $("#question").text(modifiied_qn);
                    $("#turns").html(" press 1 to get the movie Or ,<br> If you want to unlock another letter continue");
                    $("#ans_btn").click(function(){
                        var d = $("#input-answer").val();
                        if(d == 1){
                            $("#turns").text(" Enter your Answer ");
                            $("#ans_btn").on('click',function(){
                                var ans = $("#input-answer").val();
                                var check_ans = correct_ans(ans,picked_movie);
                                if(check_ans){
                                    $("#movi").text("Correct Answer ✅");
                                    $("#question").text(ans);
                                    yui();                        
                                    return;
                                }
                                else{
                                    $("#turns").text("Wrong Answer ❌ Try Again !");
                                }
                            });
                        }
                        
                    });
                }
                
                else{
                    $("#turns").text(letter+" not found ❌");
                }
            }
        
        }
        var c = $("#input-answer").val();
        $("#ans_btn").on('click',hj(c));
        
        $("#user_inp").hide();
        $(".decision").show();
        setTimeout(function(){
            $("#turns").text("Guess The next movie");
        },1099);
        $("#turns").text(" Thanks for playing ");

        
        
        
    }
}
function hj(c){
    if (c == 0){
        $("#turns").text(p1Name+" Your Score "+level);

        setTimeout(function(){
            $("#turns").text(" Thanks for playing ");
          },2000);
    }
    else if(c == 1){
        yui();
    }
}
    
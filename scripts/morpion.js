
(function ( $ ) {


    $.fn.morpion = function(){

        var Player1 = " O " , Player2 = " X ", turn = "";
        var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        var hasWinner = 0, movecount = 0;
        var score = 0;

        function boardMsg(x){
            return $("#currentPlayer").text(x);
        }

        function setTurn(){
            var r = Math.floor((Math.random() * 2) + 1);
            hasWinner = 0;


            if(r == 1){
                turn = Player1;
                boardMsg('Joueur  ' + Player1);
            }else{
                turn = Player2;
                boardMsg('Joueur  ' + Player2);
            }
        }

        function init(){
            turn = "";
            grid = [[0,0,0],[0,0,0],[0,0,0]];
            $(".cell").map(function(){
            }).get();
            hasWinner = 0;
            movecount = 0;
        }
        $("#replay").text("Jouer");
        $("#replay").click(function (){
            if(hasWinner == 1){
                init();
            }
           setTurn();
           $(".cell").empty();
        });
       
     

        $(".cell").click(function (){        
            var row = $(this).parent().index();
            var col = $(this).index();
        
            if(grid[row][col]!==0){
                alert("This position is taken. Please try other position.");
                return;
            }
            if(hasWinner==1){
                alert("Please click Rejouer");
                return;
            }
        
            if(turn==Player1){
                movecount++;
                $(this).text("O");
                grid[row][col] = 1;
                var ifWon = winnerCheck(1, Player1);
                if(!ifWon){
                    if(movecount>=9){
                        boardMsg("The match was drawn ! ");
                        movecount=0;
                        $("#replay").text("Rejouer");
                        hasWinner=1;
                        return;
                    }else{
                        turn = Player2;
                        boardMsg('Joueur' + Player2);
                    }
                    return;    
                }
                else{
                    return;
                }        
            }
            else if(turn==Player2){
                movecount++;
                $(this).text("X");
                grid[row][col] = 2;
                var ifWon = winnerCheck(2, Player2);
                if(!ifWon){
                    if(movecount>=9){
                        boardMsg("The match was drawn ! ");
                        movecount=0;
                        $("#replay").text("Rejouer");
                        hasWinner=1;
                        return;
                    }else{
                        turn = Player1;
                        boardMsg('Joueur' + Player1);
                    }
                    return;    
                }
                else{
                    return;
                }        
            }
        });function winnerCheck(n, Player){
            if(
        
                (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
                (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
                (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||
        
                (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
                (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
                (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||
        
                (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n)||
                (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)
        
        
                ){
                boardMsg('Joueur' + Player + 'a gagné !');
                hasWinner = 1;
                $("#replay").text("Rejouer");
                movecount = 0;
                
                return true;
            }
            return false;
        }
        function score(){
          

        }



        
    }
}(jQuery));

$(document).ready(function(){

    $('#grid').morpion();

});
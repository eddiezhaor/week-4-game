$(document).ready(function () {
    function start() {
        $(".btntwo").hide();
        var x = 120;
        var y = 140;
        var z = 150;
        var d = 200;
        var dm = 8;
        var enemydm=["5","20","25"];
        var num=Math.floor(Math.random()*enemydm.length)
        $("#hp1").html(`${x}`)
        $("#hp2").html(`${y}`)
        $("#hp3").html(`${z}`)
        $("#hp4").html(`${d}`)
        
        if ($(".third>.same").length === 0) {
           
           
            $(".same").on("click", function () {
                var attacker = selectAttacker($(this));
                var attackerId = attacker.id
                var neverdie=attacker.neverdie
                var attackerName = attacker.idName
                
                if ($(".fifth>.same").length === 0) {
                    
                    $(".same").on("click", function () {
                        
                        if (this.id !== attackerName && typeof attackerName !== "undefined" && $(".fifth>.same").length === 0) {
                            var a = $(this).attr("id");
                            var name = $(this).find(".name").text();
                            var defid = "#" + a;
                            $(defid).appendTo(".fifth");
                            $(defid).css("border-color", "green");
                            $(defid).css("background", "black");
                            $(defid).css("color", "white");
        
                            var youdie = $(defid).find(".hp").text();
                            // Attack button
                             
                            
                            $(".btnone").on("click", function () {
                               
                                // Attacker has HP left
                                if (neverdie > 0) {
                                    
                                    if ($(".fifth>.same").length === 0) {
                                        $(".text1").text(`No enemy here!`)
                                    }
                                    // Winning condition
                                    if ($(".third>.same").length === 0 && $(".fifth>.same").length === 0) {
                                        $(".text1").text(`YOU WIN!! GAME OVER!!!`);
                                    }
                                    // Attack!
                                    if ($(".fifth>.same").length > 0) {
                                       
                                        
                                        // $(attackerId).effect("shake");
                                        $(".text1").text(`You attacked ${name} for ${dm} damage`)
                                        $(".text2").text(`${name} attacked you for ${enemydm[num]} damage`)
                                        youdie = $(defid).find(".hp").text();

                                        neverdie = fire(neverdie, enemydm[num]);
                                        youdie = damage(dm, youdie);
                                        dm = thishp(dm)
                                        $(attackerId).find(".hp").text(`${neverdie}`);
                                        $(defid).find(".hp").text(`${youdie}`);
                                        $(".second").find(attackerId).animate({ top: "+=300px" }, "fast",function(){
                                            $(".fifth").find(defid).animate({ top: "-=300px" }, "normal")
                                        });
                                        $(".second").find(attackerId).animate({ top: "-=300px" }, "normal" ,function(){
                                            $(".fifth").find(defid).animate({ top: "+=300px" }, "normal")
                                        })
                                        
                                        // KO the defender
                                        if (youdie <= 0) {
                                            $(".text1").text(`You have defeated ${name}, you can choose to fight another enemy!`);
                                            $(".text2").text("");
                                            
                                            $(".fifth").find(defid).remove();
                                            if ($(".third>.same").length === 0 && $(".fifth>.same").length === 0) {
                                                $(".text1").text(`YOU WIN!! GAME OVER!!!`);
                                                $(".btntwo").show();
                                            }
                                            
                                        }
                                        if (neverdie<= 0) {
                                            
                                            
                                            $(".text2").text("");
                                            $(".text1").text(`You have been defeated. GAME OVER!!!`)
                                            $(".btntwo").show()
                                            
                                       
                                        }
                                      

                                    }


                                               
                            
                                }
                                    // Attacker has no HP left
                                 
                     
                            });
                           

                          
                            
                        }
                    })
                }

            })

        }

    }

    function fire(myhp, damage) {
        
        myhp = myhp - damage;
        return myhp;
    }
    function damage(dd, hp) {

        hp = hp - dd;

        return hp;

    }

    function thishp(dm) {
        dm = dm + 5;
        return dm
    }

    function restart() {
        return start();
    }

    function selectAttacker(element) {
        if ($(".second>.same").length === 0) {
            $(".same").appendTo(".third");
            $(".same").css("background", "red");
            var idName = element.attr("id");
            var id = "#" + idName;

            $(id).appendTo(".second");

            $(id).css("border-color", "green");
            $(id).css("background", "white");
            $(id).css("color", "black");

            var neverdie = $(id).find(".hp").text();
        }
        return {
            neverdie: neverdie,
            id: id,
            idName: idName,
        }
    }
    start();
    $(".btntwo").on("click", function () {
        // $(".same").appendTo(".first")
        // $(".same").css("background","white")
        // $(".same").css("border-color","red")
        // $(".same").css("color","black")
        location.reload();
        

   })
 









})

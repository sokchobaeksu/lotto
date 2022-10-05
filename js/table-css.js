    function afficher(){}
    
    var tab=['순위','담첨번호','담첨게임수','금액'];
    var tab1=['1','5 5 5 5 5 5 5 5','7','300000'];
    var tab2=['2','6 6 6 6 6 6 6  ','9','400000'];
    var tab3=['3','5 5 5 5 5 5 5 5','100','500000'];
    var tab4=['4','5 5 5 5 5 5 5 5','60000','600000'];
    /*console.log(tab[0]+"   "+tab[1]);
    document.getElementById("demo").innerHTML=tab; */
    
    /* demo.innnerHTML="<table>"+"<tr>"+"<th>"+tab[0] */

    var x="";
    var y="";
    var z="";
    var e="";
    var r="";
    for(i in tab) {
        x+="<th>"+tab[i]+"</th>";
        y+="<td>"+tab1[i]+"</td>";
        z+="<td>"+tab2[i]+"</td>";
        e+="<td>"+tab3[i]+"</td>";
        r+="<td>"+tab4[i]+"</td>";


    }

    demo.innerHTML="<table>"+"<tr>"+x+"</tr>"+"<tr>"+y+"</tr>"+"<tr>"+z+"</tr>"+"<tr>"+e+"</tr>"
    +"<tr>"+r+"</tr>";
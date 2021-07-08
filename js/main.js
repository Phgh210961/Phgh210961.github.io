var slideIndex = 1;
          showSlides(slideIndex);
          
          function plusSlides(n) {
            showSlides(slideIndex += n);
          }
          
          function currentSlide(n) {
            showSlides(slideIndex = n);
          }
          
          function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
          }
      
      
      
      var  players = [["1930","Ουρουγουάη","Ουρουγουάη","4-2","13"],
              ["1934","Ιταλία","Ιταλία","2-1","16"],
              ["1938","Γαλλία","Ιταλία","4-2","16/15"],
              ["1950","Βραζιλία","Ουρουγουάη","(2-1)2","16/13"],
              ["1954","Ελβετία","Δυτική Γερμανία","3–2","16"],
              ["1958","Σουηδία","Βραζιλία","5–2","16"],
              ["1962","Χιλή","Βραζιλία","3–1","16"],
              ["1966","Αγγλία","Αγγλία","4–2","16"],
              ["1970","Μεξικό","Βραζιλία","4–1","16"],
              ["1974","Δυτική Γερμανία","Δυτική Γερμανία","2-1","16"],
              ["1978","Αργεντινή","Αργεντινή","3–1","16"],
              ["1982","Ισπανία","Αργεντινή","3–2","24"],
              ["1986","Μεξικό","Δυτική Γερμανία","3–2","24"],
              ["1990","Ιταλία","Δυτική Γερμανία","1-0","24"],
              ["1994","ΗΠΑ","Βραζιλία","3–2","24"],
              ["1998","Γαλλία","Γαλλία","3–0","32"],
              ["2002","Νότια Κορέα / Ιαπωνία","Βραζιλία","2–0","32"],
              ["2006","Γερμανία","Ιταλία","5-3","32"],
              ["2010","Νότια Αφρική","Ισπανία","1-0","32"],
              ["2014","Βραζιλία","Γερμανία","1-0","32"],
              ["2018","Ρωσία","Γαλλία","4–2","32"]]
      
      
      
          table5 = document.getElementById("katataxi");
          for(var i = 0; i < players.length; i++)
         {
             var newRow = table5.insertRow(table5.length);
             for(var j = 0; j < players[i].length; j++)
             {
                 var cell = newRow.insertCell(j);
                 cell.innerHTML = players[i][j];
             }
         }
      
         function sortTable5(n) {
                   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                  table = document.getElementById("katataxi");
                  switching = true;
                  dir = "asc"; 
                  while (switching) {
                       switching = false;
                       rows = table.rows;
                       for (i = 1; i < (rows.length - 1); i++) {
                         shouldSwitch = false;
                        x = rows[i].getElementsByTagName("td")[n];
                        y = rows[i + 1].getElementsByTagName("td")[n];
            
                        if (dir == "asc") {
                              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                              shouldSwitch= true;
                              break;
                         }
                        } else if (dir == "desc") {
                              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                                  shouldSwitch = true;
                                  break;
                           }
                           
                       }
                    }
                    if (shouldSwitch) {
                             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                             switching = true;
                             switchcount ++;      
                        } else {
                             if (switchcount == 0 && dir == "asc") {
                                 dir = "desc";
                                switching = true;
                           }
                          
                   
                          }
                          
        }
      }
      
      function toggleTable1() {
        var x = document.getElementById("katataxi");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else { 
          x.style.display = "none";
        }
      }
      

      var menuhide = document.getElementById("col_hide");
  menuhide.addEventListener("change", generateData);
  function generateData(event) {
    if (menuhide.value == 'a') {
      hideCol1();
    }else if(menuhide.value == 'b'){
      hideCol2();
    }else if(menuhide.value == 'c'){
      hideCol3();
    }else if(menuhide.value == 'd'){
      hideCol4();
    }else if(menuhide.value == 'e'){
      hideCol5();
    }else if(menuhide.value == 'f'){
      restore();
    }
  }

      function hideCol0() {
        var col = 0;
    
        var tbl = document.getElementById("katataxi");
        if (tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {
                for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                    tbl.rows[i].cells[j].style.display = "";
                    if (j == col)
                        tbl.rows[i].cells[j].style.display = "none";
                }
            }
        }
    }
    function hideCol1() {
      var col = 1;
  
      var tbl = document.getElementById("katataxi");
      if (tbl != null) {
          for (var i = 0; i < tbl.rows.length; i++) {
              for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                  tbl.rows[i].cells[j].style.display = "";
                  if (j == col)
                      tbl.rows[i].cells[j].style.display = "none";
              }
          }
      }
  }
  function hideCol2() {
    var col = 2;

    var tbl = document.getElementById("katataxi");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].style.display = "";
                if (j == col)
                    tbl.rows[i].cells[j].style.display = "none";
            }
        }
    }
}
function hideCol3() {
  var col = 3;

  var tbl = document.getElementById("katataxi");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
              if (j == col)
                  tbl.rows[i].cells[j].style.display = "none";
          }
      }
  }
}
function hideCol4() {
  var col = 4;

  var tbl = document.getElementById("katataxi");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
              if (j == col)
                  tbl.rows[i].cells[j].style.display = "none";
          }
      }
  }
}
 
function restore(){
  var tbl = document.getElementById("katataxi");
  if (tbl != null) {
      for (var i = 0; i < tbl.rows.length; i++) {
          for (var j = 0; j < tbl.rows[i].cells.length; j++) {
              tbl.rows[i].cells[j].style.display = "";
}
      }
    }
  }
      
        var txt = "";
        var Months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", 
        "December"];
        Months.forEach(MyFunction);
        document.getElementById("demo1").innerHTML = txt;

        function MyFunction(value,) {
            txt = txt + value + "<br>";
        }



        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode(" [X]");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        }


        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        }


        var list = document.querySelector('ul');
        list.addEventListener('click', function(ml) {
        if (ml.target.tagName === 'LI') {
            ml.target.classList.toggle('checked');
        }
        }, false);


        function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Type")
        } 
        else {
            document.getElementById("month").appendChild(li);
        }
        document.getElementById('input').value = "";

        var span = document.createElement("SPAN");
        span.className = "close";
        var txt = document.createTextNode("  [X]");
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
        }

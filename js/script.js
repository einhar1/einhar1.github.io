var request;

$(document).ready(function () {

    // Följande kod är i grunden hämtad från stackoverflow.com.
    $(document).on('submit', '#searchbar', function () {
        
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.open('GET', "../videor/" + document.getElementById("search").value + ".html", false);
        request.send();

        if (request.status === 404) {
            alert("Inga sökresultat");
        } else {
            window.location.href = "../videor/" + document.getElementById("search").value + ".html";
        }

        return false;
    });
    
    // Följande kod är i grunden hämtad från stackoverflow.com.
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.uname != null) {
        if (params.remember === 'on') {
            localStorage.setItem('uname', params.uname);
            document.getElementById('loggaIn').innerHTML = localStorage.getItem('uname');
        } else {
            sessionStorage.setItem('uname', params.uname);
            document.getElementById('loggaIn').innerHTML = sessionStorage.getItem('uname');
        }
    } else if (sessionStorage.getItem('uname') != null) {
        document.getElementById('loggaIn').innerHTML = sessionStorage.getItem('uname');
    } else if (localStorage.getItem('uname') != null) {
        document.getElementById('loggaIn').innerHTML = localStorage.getItem('uname');
    }

    window.onclick = function (event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = "none";
            document.getElementById('body').style.overflow = 'auto';
            document.getElementById("login").reset();
        }
    }

    document.getElementById('close').onclick = function (event) {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('body').style.overflow = 'auto';
        document.getElementById("login").reset();
    }

    document.getElementById('cancelbtn').onclick = function (event) {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('body').style.overflow = 'auto';
        document.getElementById("login").reset();
    }

    document.getElementById('loggaIn').onclick = function (event) {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('body').style.overflow = 'hidden';
    }

});
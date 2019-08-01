    // API 
    let url = 'http://nodejstodomike.herokuapp.com/api/todos';

    let portfPhotos = [];
    let portfCategories = [];
    let portfBtnFiltersTemplate;
    let portfolioTemplate;
    let profileCardTemplate;    

    let profilePhotos = [{
        alt: "avatar",
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        imgUrlBack: "https://www.w3schools.com//w3images/lights.jpg"
    }, {
        alt: "avatar",
        imgUrl: "https://www.w3schools.com/howto/img_avatar.png",
        imgUrlBack: "https://www.w3schools.com//w3images/lights.jpg"
    }]

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }
    
    // adds show class to element which consists in display: block
    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }
    
    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
        }
        element.className = arr1.join(" ");
    }  
   

$(document).ready(function() {

    
    // Header menu click
    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $("#about-section").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500);
    });

    $("#photos-section").click(function() {
        $('html, body').animate({
            scrollTop: $(".photo-grid").offset().top
        }, 500);
    });

    $("#portfolio-section").click(function() {
        $('html, body').animate({
            scrollTop: $("#myBtnContainer").offset().top
        }, 500);
    });





    // TEMPLATES
    
    // Button Filters
    portfBtnFiltersTemplate = _.template(
        "<button class='btn' onclick='filterSelection(\"\<%= portfCategories %>\"\)'><%= portfCategories %></button>"
    );
    
     // Portfolio
     portfolioTemplate = _.template(
        "<div class='column <%= category %> show'>" +
        "<div class='content'>" +
        "<img src='<%= imgUrl %>' alt='<%= alt %>' style='width:100%' onclick='myFunction(this);'>" +
        "<h4><%= name %></h4>" +
        "<p><%= description %></p>" +
        "</div>" +
        "</div>"
    );


    // Flip Card
    profileCardTemplate = _.template(
        "<div class='column show' style='width: 160px'>" +
        "<div class='flip-card'>" +
        "<div class='flip-card-inner'>" +
        "<div class='flip-card-front'>" +
        "<img src='<%= imgUrl %>' alt='<%= alt %>' style='width:150px;height:200px;margin: 0;'>" +
        "</div>" +
        "<div class='flip-card-back'>" +
        "<img src='<%= imgUrlBack %>' alt='<%= alt %>' style='width:150px;height:200px;margin: 0;'>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "</div>"
    );

    
    // Append portfolio data to template  
    profilePhotos.forEach(function(photo) {
        $(".profile").append(profileCardTemplate({
            imgUrl: photo.imgUrl,
            imgUrlBack: photo.imgUrlBack,
            alt: photo.alt
        }));
    })

 

    // Creates the portfolio section with data retrieved
    function createPortfolioSection(photo) {
        photo.forEach(function(photo){
            $(".portfolio").append(portfolioTemplate({
                name: photo.name,
                description: photo.description,
                imgUrl: photo.imgUrl,
                alt: photo.alt,
                category: photo.category
            }));
            // add to category if not exist yet
            if(portfCategories.indexOf(photo.category) === -1) {
                portfCategories.push(photo.category);
            };
        });        
        portfCategories.forEach(function(btn) {
            $(".myBtnFilter").append(portfBtnFiltersTemplate({
                portfCategories: btn
            }));
        });
        $(".myBtnFilter .btn").first().addClass("active");
        
        // Add active class to the current button (highlight it)
        let btnContainer = document.getElementById("myBtnContainer");
        let btns = document.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

    }


    // REQUEST TO NODEJS
    $.get(url)
    .done(
        function(response) {
            portfCategories.push('all'),
            createPortfolioSection(response);          
        }
    );

        


});
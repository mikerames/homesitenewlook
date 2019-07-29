
let portfPhotos = [{
    name: 'Mountains',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/mountains.jpg',
    alt: 'Mountains',
    category: 'bodyboard'
}, {
    name: 'Lights',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/lights.jpg',
    alt: 'Lights',
    category: 'people'
}, {
    name: 'Forest',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/nature.jpg',
    alt: 'Forest',
    category: 'bodyboard'
}, {
    name: 'Cars',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/cars1.jpg',
    alt: 'Cars',
    category: 'motocross'
}, {
    name: 'Mountains',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/mountains.jpg',
    alt: 'Mountains',
    category: 'motocross'
}, {
    name: 'Lights',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/lights.jpg',
    alt: 'Lights',
    category: 'motocross'
}, {
    name: 'Forest',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/nature.jpg',
    alt: 'Forest',
    category: 'cars'
}, {
    name: 'Cars',
    description: 'Lorem ipsum dolor..',
    imgUrl: 'https://www.w3schools.com//w3images/cars1.jpg',
    alt: 'Cars',
    category: 'nature'
}]




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

    // Portfolio template
    let porttfolioTemplate = _.template(
        "<div class='column <%= category %>'>" +
        "<div class='content'>" +
        "<img src='<%= imgUrl %>' alt='<%= alt %>' style='width:100%' onclick='myFunction(this);'>" +
        "<h4><%= name %></h4>" +
        "<p><%= description %></p>" +
        "</div>" +
        "</div>"
    );

    // Append portfolio data to template
    portfPhotos.forEach(function(photo) {
        $(".portfolio").append(porttfolioTemplate({
            name: photo.name,
            description: photo.description,
            imgUrl: photo.imgUrl,
            alt: photo.alt,
            category: photo.category
        }));
    });

    // Show all photos in portfolio section by activating filter for all
    filterSelection('all');

});
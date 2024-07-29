$(document).ready(function () {

    //set current hours, minutes, seconds and meridiem in variables - Harshil Dholakia
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";

    // set meridians by checking if hours is greater than 12 - Harshil Dholakia
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }

    // set minutes to 2digit format if minute is less than 10 - Harshil Dholakia
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // set seconds to 2digit format if second is less than 10 - Harshil Dholakia
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // show current time on the Navbar - Harshil Dholakia
    var clockDiv = document.querySelector('.currenttime');
    clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    // update the current time on interval of every second - Harshil Dholakia
    setInterval(function () {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = "AM";

        // set meridians by checking if hours is greater than 12 - Harshil Dholakia
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        if (hours === 0) {
            hours = 12;
        }

        // set minutes to 2digit format if minute is less than 10 - Harshil Dholakia
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // set seconds to 2digit format if second is less than 10 - Harshil Dholakia
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // show current time on the Navbar - Harshil Dholakia
        var clockDiv = document.querySelector('.currenttime');
        clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    });


    $(function () {

        // scale effect on the skills section within 1200ms duration - Harshil Dholakia
        function runEffect() {
            var options = {};
            $(".skills").hide().show("scale", 1200);
        };

        // run the effect when the page is scrolled down to the skills section for only once - Harshil Dholakia
        var count = 0;
        $(window).scroll(function () {
            if ($(window).scrollTop() > 750 && count == 0)
                runEffect();

            if ($(window).scrollTop() <= 750)
                count = 0;
            else
                count = 1;
        });
    }
    );


    // An array of projects to dynamically display the project details - Harshil Dholakia
    var projects = [
        {
            title: "Informative Website",
            pic: ["images/Project1.1.png"],
            desc: "This is a website that I created to provide information about the products of one of my favourite brand. I have listed all the important categories of this brand they provide, also their motive to motivate people for being fit and healthy."
        },
        {
            title: "Travel Guide - Junagadh",
            pic: ["images/Project2.1.png"],
            desc: "This is a website that I created to provide information about the tourist places in Junagadh. Users can easily get to know about all the places to visit in Junagadh. This website is mainly focused on visually appealing theme."
        },
        {
            title: "Jwellery Management System",
            pic: ["images/Project3.0.png", "images/Project3.1.png", "images/Project3.2.png", "images/Project3.3.png"],
            desc: "This is a website that I created to manage the jwellery shop. This web app has been created using ASP.NET and for handling data, MSSQL has been used. This site features user login, inventory management, order management, customer management."
        }
    ];

    // A function to display the project details - Harshil Dholakia
    function displayProject(project, index) {

        // A unique id for each carousel so that it can be uniquely identified - Harshil Dholakia
        var carouselId = 'carouselExampleIndicators' + index;

        // HTML for the carousel to display the images - Harshil Dholakia
        var picHTML = `<div id="${carouselId}" class="carousel slide carousel-fade">
                    <div class="carousel-indicators"></div>
                    <div class="carousel-inner"></div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>`;

        // Add buttons and images to the carousel from the number of pics available for a project - Harshil Dholakia
        var picButtons = '';
        var picSrc = '';

        for (var i = 0; i < project.pic.length; i++) {
            if (i == 0) {
                picButtons += `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="` + i + `"class="active" aria-current="true" aria-label="Slide ` + parseInt(i + 1) + `"></button>`;
                picSrc += `<div class="carousel-item active"><img src="` + project.pic[i] + `" class="projectImages d-block" alt="` + project.title + `"></div>`;
            }
            else {
                picButtons += `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="` + i + `" aria-label="Slide ` + parseInt(i + 1) + `"></button>`;
                picSrc += `<div class="carousel-item"><img src="` + project.pic[i] + `" class="projectImages d-block" alt="` + project.title + `"></div>`;
            }
        }

        // Replace the default carousel indicators and inner div with the buttons and images - Harshil Dholakia
        picHTML = picHTML.replace('<div class="carousel-indicators"></div>', '<div class="carousel-indicators">' + picButtons + '</div>');
        picHTML = picHTML.replace('<div class="carousel-inner"></div>', '<div class="carousel-inner">' + picSrc + '</div>');

        // HTML for the project details - Harshil Dholakia
        var projectHTML = `<div class="row mx-10 projectCard"><div class="col-lg-6 col-md-6 col-sm-12 ">
                            <div class="px-10" data-bs-theme="dark">` + picHTML + `</div>
                           </div>
                           <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="px-10">
                                    <h5 class="card-title project-title">` + project.title + `</h5>
                                    <br/>
                                    <br/>
                                    <p class="card-text project-description">` + project.desc + `</p>
                            </div>
                           </div>
                           </div>`;

        return projectHTML;
    }

    // display the project details - Harshil Dholakia
    function displayProjects() {
        var projectsHTML = '';
        for (var i = 0; i < projects.length; i++) {
            projectsHTML += displayProject(projects[i], i);
        }
        $('.projectCards').html(projectsHTML);
    }

    displayProjects();

    // hide the alert messages and error messages initially - Harshil Dholakia
    $(".alert-success").hide();
    $(".alert-danger").hide();
    $(".errMsgName").hide();
    $(".errMsgPhone").hide();
    $(".errMsgEmail").hide();
    $(".errMsgMessage").hide();

    // validate the contact form that validates empty value in all fields and show the validation red color borders - Harshil Dholakia
    function validateForm(event) {
        event.preventDefault(); // Prevent form submission and page reload on form submission event - Harshil Dholakia

        // Get form values - Harshil Dholakia
        var name = $("#name").val().trim();
        var phone = $("#phone").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        var isValid = true;

        // Reset border colors and error messages - Harshil Dholakia
        $("#name").css('border', '');
        $("#phone").css('border', '');
        $("#email").css('border', '');
        $("#message").css('border', '');

        // Validate name - Harshil Dholakia
        if (name === "") {
            $("#name").css('border', '2px solid red');
            $(".errMsgName").html("Name is required").css('color', 'red');
            isValid = false;
        }

        // Validate phone - Harshil Dholakia
        if (phone === "") {
            $("#phone").css('border', '2px solid red');
            $(".errMsgPhone").html("Phone is required").css('color', 'red');
            isValid = false;
        }

        // Validate email - Harshil Dholakia
        if (email === "") {
            $("#email").css('border', '2px solid red');
            $(".errMsgEmail").html("Email is required").css('color', 'red');
            isValid = false;
        } else {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                $("#email").css('border', '2px solid red');
                $(".errMsgEmail").html("Invalid email address").css('color', 'red');
                isValid = false;
            }
        }

        // Validate message - Harshil Dholakia
        if (message === "") {
            $("#message").css('border', '2px solid red');
            $(".errMsgMessage").html("Message is required").css('color', 'red');
            isValid = false;
        }

        // If the form is valid, show success message, else show error message - Harshil Dholakia
        if (isValid) {
            $(".errMsgName").hide();
            $(".errMsgPhone").hide();
            $(".errMsgEmail").hide();
            $(".errMsgMessage").hide();
            $(".alert-success").show();
            $(".alert-danger").hide();
            $(".alert-success").html("Message sent successfully!");
        } else {
            $(".errMsgName").show();
            $(".errMsgPhone").show();
            $(".errMsgEmail").show();
            $(".errMsgMessage").show();
            $(".alert-danger").show();
            $(".alert-success").hide();
            $(".alert-danger").html("Please fill in all the fields!");
        }
    }

    // validateForm function to form submission event - Harshil Dholakia
    $(".form").on('submit', validateForm);

});










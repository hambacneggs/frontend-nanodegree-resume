var bio = {
  "name" : "John Doe",
  "role" : "Job Title",
  "contacts" : {
    "mobile" : "(555)555-5555",
    "email" : "john@doe.com",
    "github" : "johndoe555",
    "twitter" : "johndoe555",
    "location" : "Los Angeles, CA"
  },
  "welcomeMessage" : "This is a welcome message",
  "skills" : [
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ],
  "biopic" : "http://placehold.it/150x150"
};

bio.display = function() {
  //Add Name, Role, Welcome Message
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedPic + formattedName + formattedRole + formattedWelcomeMsg);

  // Add Contact Info
  var contacts = bio.contacts;
  var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub);

  // Add Twitter (optional)
  if (contacts.twitter) {
    var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
    $("#topContacts").append(formattedTwitter);
  }

  //Add Location
  var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
  $("#topContacts").append(formattedLocation);

  // Add Skills
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
  });
}

bio.display();

var work = {
  "jobs" : [
    {
      "employer" : "Employer 1",
      "title" : "Job Title 1",
      "location" : "Chicago, IL",
      "dates" : "2015-2016",
      "description" : "Job 1 description"
    },
    {
      "employer" : "Employer 2",
      "title" : "Job Title 2",
      "location" : "San Diego, CA",
      "dates" : "2015-2016",
      "description" : "Job 2 description"
    }
  ]
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
    $('.work-entry:last').append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDesc);
  });
}

work.display();

var projects = {
  "projects" : [
    {
      "title" : "Project 1",
      "dates" : "2015-2016",
      "description" : "Project 1 description - Etiam fermentum lectus eu quam venenatis porttitor. Quisque laoreet ultricies odio, vel commodo tellus mattis at. Mauris ut urna a purus ornare scelerisque. Curabitur velit enim, consectetur sit amet odio eget, vehicula gravida turpis. Quisque et euismod est, eu viverra urna. Sed posuere, ante at dictum molestie, ex enim ultrices ex, sit amet aliquam ante ante a mi. Curabitur vitae sagittis lectus.",
      "images" : [
        "http://placehold.it/350x150",
        "http://placehold.it/350x150"
      ]
    },
    {
      "title" : "Project 2",
      "dates" : "2015-2016",
      "description" : "Project 2 description - Aenean nec libero odio. Aliquam felis nisl, laoreet non sodales nec, tincidunt non mi. Pellentesque at sem vel ex hendrerit dignissim vitae ac leo. Fusce tincidunt nunc sit amet aliquam mollis. Quisque at consectetur turpis. Donec lacinia egestas dapibus. Donec rutrum dictum odio, id efficitur augue hendrerit a. Nunc justo diam, faucibus at enim eget, rutrum sodales turpis. Curabitur vestibulum eleifend massa, quis convallis odio facilisis vel. Cras vitae dictum augue.",
      "images" : [
        "http://placehold.it/350x150",
        "http://placehold.it/350x150"
      ]
    }
  ]
};

projects.display = function(){
  projects.projects.forEach(function (project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title );
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates );
    var formattedDesc = HTMLprojectDescription.replace("%data%", project.description );
    $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc);

    // Add project images
    project.images.forEach(function(image){
      var formattedImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedImage);
    });
  });
}

projects.display();

var education = {
  "schools" : [
    {
      "name" : "School 1",
      "location" : "Detroit, MI",
      "degree" : "Degree 1",
      "majors" : [
        "Major 1",
        "Major 2"
      ],
      "dates" : "2015-2016",
      "url" : "http://google.com"
    },
    {
      "name" : "School 2",
      "location" : "Portland, OR",
      "degree" : "Degree 2",
      "majors" : [
        "Major 3",
        "Major 4"
      ],
      "dates" : "2015-2016",
      "url" : "http://google.com"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Online Course 1",
      "school" : "Online School 1",
      "dates" : "2015-2016",
      "url" : "http://google.com"
    },
    {
      "title" : "Online Course 2",
      "school" : "Online School 2",
      "dates" : "2015-2016",
      "url" : "http://google.com"
    }
  ]
};

education.display = function() {
  // Add Schools
  education.schools.forEach(function (school) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation);
    // Add Majors
    school.majors.forEach(function (major) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedMajor);
    });
  });
  // Add Online Courses
  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function (course) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
    formattedUrl = formattedUrl.replace("#", course.url);
    $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
  });
}

education.display();

// Collecting click locations
$(document).click(
  function(loc) {
    console.log("x:" + loc.pageX + "y:" + loc.pageY)
  }
);

// internationalize name quiz
$("#main").append(internationalizeButton);

function inName(name) {
  var fullNameArray = name.split(" ");
  var firstName1 = fullNameArray[0].slice(0,1).toUpperCase();
  var firstName2 = fullNameArray[0].slice(1).toLowerCase();
  var lastName = fullNameArray[1].toUpperCase();
  var formattedName = firstName1 + firstName2 + " " + lastName;
  return formattedName;
}

// adding google map
$("#mapDiv").append(googleMap);

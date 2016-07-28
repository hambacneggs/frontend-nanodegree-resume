var bio = {
  "name" : "Edvard Munch",
  "role" : "Painter and Printmaker",
  "contacts" : {
    "mobile" : "555-555-5555",
    "email" : "edvard@munch.com",
    "github" : "edmunch555",
    "twitter" : "edmunch555",
    "location" : "Oslo, Norway"
  },
  "welcomeMessage" : "Norwegian painter and printmaker whose intensely evocative treatment of psychological themes built upon some of the main tenets of late 19th-century Symbolism and greatly influenced German Expressionism in the early 20th century. One of his most well-known works is The Scream of 1893.",
  "skills" : [
    "Expressionism",
    "Symbolism",
    "Excessive Drinking"
  ],
  "biopic" : "images/bio-pic.jpg"
};

bio.display = function() {
  //Add Name, Role, Welcome Message
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header-id").append(formattedPic + formattedName + formattedRole);
  $("#header-welcome").append(formattedWelcomeMsg);

  // Add Contact Info
  var contacts = bio.contacts;
  var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
  $("#header-contacts").append(formattedMobile + formattedEmail +formattedGithub);
  $("#footerContacts").append(formattedMobile + formattedEmail +formattedGithub);
  $(".tel").attr("href", "tel:" + contacts.mobile);
  $(".email").attr("href", "mailto:" + contacts.email);
  $(".github").attr({
    href: "https://github.com/" + contacts.github,
    target: "_blank"
  });

  // Add Twitter (optional)
  if (contacts.twitter) {
    var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
    $("#header-contacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    $(".twitter").attr({
      href: "https://twitter.com/" + contacts.twitter,
      target: "_blank"
    });
  }

  //Add Location
  var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
  $("#header-id").append(formattedLocation);

  // Add Skills
  $("#header-skills").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
  });
}

bio.display();

var work = {
  "jobs" : [
    {
      "employer" : "Self-Employed",
      "title" : "Painter",
      "location" : "Paris, France",
      "dates" : "1889",
      "description" : "Worked in Paris during the Exposition Universelle"
    },
    {
      "employer" : "Self-Employed",
      "title" : "Painter",
      "location" : "Berlin, Germany",
      "dates" : "1892",
      "description" : " Adelsteen Normann, on behalf of the Union of Berlin Artists, invited Munch to exhibit at its November exhibition"
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
      "title" : "The Scream",
      "dates" : "1893-1895",
      "description" : "The Scream is Munch's most famous work, and one of the most recognizable paintings in all art. It has been widely interpreted as representing the universal anxiety of modern man. Painted with broad bands of garish color and highly simplified forms, and employing a high viewpoint, it reduces the agonized figure to a garbed skull in the throes of an emotional crisis. The Scream exists in four versions: two pastels (1893 and 1895) and two paintings (1893 and 1910). There are also several lithographs of The Scream (1895 and later).",
      "images" : [
        "images/the-scream-300px.jpg",
        "images/the-scream-litho-300px.jpg"
      ]
    },
    {
      "title" : "The Sick Child",
      "dates" : "1885-1926",
      "description" : "The Sick Child (Norwegian: Det syke barn) is the title given to six paintings and a number of lithographs, drypoints and etchings completed between 1885 and 1926. All record a moment before the death of his older sister Johanne Sophie (1862–1877) from tuberculosis at 15. Munch returned to this deeply traumatic event again and again in his art, over six completed oil paintings and many studies in various media, over a period of more than 40 years.",
      "images" : [
        "images/sick-child-1-300px.jpg",
        "images/sick-child-2-300px.jpg"
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
      $(".project-entry:last").after(formattedImage);
    });
  });
}

projects.display();

var education = {
  "schools" : [
    {
      "name" : "Technical College",
      "location" : "Oslo, Norway",
      "degree" : "Engineering",
      "majors" : [
        "Physics",
        "Chemistry",
        "Math"
      ],
      "dates" : "1879",
      "url" : "https://en.wikipedia.org/wiki/Institute_of_technology"
    },
    {
      "name" : "Royal School of Art and Design of Kristiania",
      "location" : "Oslo, Norway",
      "degree" : "Art",
      "majors" : [
        "Painting",
        "Printmaking"
      ],
      "dates" : "1881",
      "url" : "https://www.google.com/search?q=Royal+School+of+Art+and+Design+of+Kristiania"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "19th and 20th Century Art History",
      "school" : "Time Traveler's School of Art",
      "dates" : "2155",
      "url" : "http://timetravelisrealandstuff.com"
    },
    {
      "title" : "Traveling through the multi-verse",
      "school" : "Multiple-Universe University",
      "dates" : "29XX",
      "url" : "http://thereisalwaysalighthouse.com"
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
    $(".education-entry:last .title-text").attr({
      href: school.url,
      target: "_blank"
    });
    // Add Majors
    var majorList = school.majors.join(", ");
    var formattedMajor = HTMLschoolMajor.replace("%data%", majorList);
    $(".education-entry:last").append(formattedMajor);
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
    $(".education-entry:last .title-text").attr({
      href: course.url,
      target: "_blank"
    });
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

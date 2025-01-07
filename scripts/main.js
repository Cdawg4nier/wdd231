const footerYear = document.querySelector("#current-year");
let currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

const footerLastModified = document.querySelector("#last-modified");
footerLastModified.textContent = `Last Modification: ${document.lastModified}`;

const burgerButton = document.querySelector('#BurgerMenu')
const navElement = document.querySelector('nav')
let isBurgerMenuVisible = false;

burgerButton.addEventListener("click", function () {
    navElement.classList.toggle("burgerExpanded")
    isBurgerMenuVisible = !isBurgerMenuVisible;
    if (!isBurgerMenuVisible) { burgerButton.textContent = "☰"; }
    else { burgerButton.textContent = "❎"; }
})

window.addEventListener('resize', function() {
    if (window.innerWidth >= 640) {
        burgerButton.textContent = "☰";
        navElement.classList.remove("burgerExpanded");
        isBurgerMenuVisible = false;
    } 
});

const courseElements = [
    document.getElementById('CSE110'),
    document.getElementById('WDD130'),
    document.getElementById('CSE111'),
    document.getElementById('CSE210'),
    document.getElementById('WDD131'),
    document.getElementById('WDD231')
];

const courseDisplayBox = document.getElementById('courseDisplayBox');
const filterButtonWDD = document.getElementById('ShowWDD');
const filterButtonCSE = document.getElementById('ShowCSE');
const showAllButton = document.getElementById('ShowAll');

const filterByWDD = () => {
    const filteredElements = courseElements.filter(element => element.id.startsWith('WDD'));
    
    displayCourses(filteredElements);
};
const filterByCSE = () => {
    const filteredElements = courseElements.filter(element => element.id.startsWith('CSE'));
    
    displayCourses(filteredElements);
};
const showAllCourses = () => {
    
    displayCourses(courseElements);
};

function displayCourses(myArray) {
    courseDisplayBox.innerHTML = '';
    myArray.forEach(element => {
        const container = document.createElement('div');

        const courseInfo = courses.find(course => 
            `${course.subject}${course.number}` === element.id
        );
        
        if (courseInfo && courseInfo.completed) {
            container.classList.add('courseCompleted');
        }
        container.textContent = `${element.id}`
        courseDisplayBox.appendChild(container);
    });
}

filterButtonWDD.addEventListener('click', filterByWDD);
filterButtonCSE.addEventListener('click', filterByCSE);
showAllButton.addEventListener('click', showAllCourses);

document.addEventListener('DOMContentLoaded', function() {
    showAllCourses(); // Call your function here
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
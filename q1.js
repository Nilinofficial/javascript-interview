
const users = [
    {
        id: 1,
        name: "Arjun",
        age: 24,
        isActive: true,
        skills: ["JavaScript", "React", "TypeScript",],
        projects: [
            { name: "Dashboard", completed: true, rating: 4.5 },
            { name: "E-commerce", completed: true, rating: 4.2 },
        ],
    },
    {
        id: 2,
        name: "Meera",
        age: 21,
        isActive: true,
        skills: ["JavaScript", "Vue"],
        projects: [
            { name: "Portfolio", completed: true, rating: 4.1 },
            { name: "Chat App", completed: false, rating: 3.8 },
        ],
    },
    {
        id: 3,
        name: "Rahul",
        age: 28,
        isActive: false,
        skills: ["JavaScript", "React", "Node.js", "Typescript"],
        projects: [
            { name: "API Server", completed: true, rating: 4.7 },
            { name: "Task Manager", completed: true, rating: 4.6 },
        ],
    },
    {
        id: 4,
        name: "Anjali",
        age: 26,
        isActive: true,
        skills: ["React", "TypeScript", "Node.js"],
        projects: [
            { name: "FocusBug", completed: true, rating: 4.8 },
            { name: "FitBug", completed: true, rating: 4.9 },
            { name: "File Manager", completed: true, rating: 4.4 },
        ],
    },
    {
        id: 5,
        name: "Vishnu",
        age: 23,
        isActive: true,
        skills: ["JavaScript", "React"],
        projects: [
            { name: "Weather App", completed: false, rating: 3.9 },
            { name: "Notes App", completed: false, rating: 4.0 },
        ],
    },
];



//1.  Find all active users.

const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);


//2. Find users older than 23 who know React.

// const usersGreaterthan23 = users.filter((user) => user.age > 23).filter((userGT => userGT.skills.includes("React")));

const usersGreaterthan23 = users.filter((user) => user.age > 23 && user.skills.includes("React"))

// console.log(usersGreaterthan23);

// 3. Find users who have completed every project.

const usersCompletedAllProjects = users.filter(user => user.projects.every(project => project.completed));
//  console.log(usersCompletedAllProjects);


// 4. Find active users whose every project has a rating of at least 4.

const result = users.filter((user) => user.isActive && user.projects.every(pro => pro.rating >= 4));

// console.log(result);

// 5. Check whether every user has at least two skills.

const isTrue = users.every(user => user.skills.length >= 2);
//  console.log(isTrue);


// 6. Find users who have at least one incomplete project, using filter() and some().

let res = users.filter((user) => user.projects.some((project) => project.completed === false));
//   console.log(res);


// 7. Sort users by age from youngest to oldest.

const copiedUsers1 = [...users]

const ascNames = copiedUsers1.sort((a, b) => a.age - b.age)

//  console.log(ascNames);

// 8. Sort users by age from oldest to youngest.

const copiedUsers2 = [...users]
const userNamesinDescAge = copiedUsers2.sort((a, b) => b.age - a.age);
// 


// 9 . Sort users by the number of skills they have, highest first.

const copiedUsers3 = [...users];
const userSkillAsc = copiedUsers3.sort((a, b) => b.skills.length - a.skills.length);
// console.log(userSkillAsc);


//   10. Sort users by the number of completed projects, highest first.

const copiedUsers4 = [...users];

const sortUsersByProjectsCompleted = copiedUsers4.sort((a, b) => {
    const aCompleted = a.projects.filter((pro) => pro.completed);
    const bCompleted = b.projects.filter((pro) => pro.completed);

    return bCompleted.length - aCompleted.length;
})

// console.log(sortUsersByProjectsCompleted);

// 11. Sort users by their average project rating, highest first.



const copiedUsers5 = [...users];

const usersSortedByaverageRating = copiedUsers5.sort((a, b) => {
    const aTotal = a.projects.reduce((accumulator, project) => {
        return accumulator + project.rating
    }, 0);

    const bTotal = b.projects.reduce((accumulator, project) => {
        return accumulator + project.rating;
    },  0);

    const aAverage = aTotal / a.projects.length;
    const bAverage = bTotal / b.projects.length

    return bAverage - aAverage
})

// console.log(usersSortedByaverageRating);


//12. Sort users alphabetically by name, A → Z.

const copiedUsers6 = [...users];

   const SortedByName = copiedUsers6.sort((a,b) => a.name.localeCompare(b.name));

//    console.log(SortedByName);
   

// 13.Sort users in reverse alphabetical order, Z → A.

const copiedUsers7 = [...users];

const sortedByNameReverse = copiedUsers7.sort((a,b) => b.name.localeCompare(a.name));
console.log(copiedUsers7);

// 14. const words = ["banana", "Apple", "mango", "Orange", "grape"];
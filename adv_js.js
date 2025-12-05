// function getUserDetails(id,getUserSubjects){
//     console.log("getting user Details by userId:",id);
//     getUserSubjects({userroll : "678"});
// };

// function getUserSubjects(userRoll,getUserMarks){
//     console.log("getting user subjects by roll number",userRoll);
//     getUserMarks({subid: "en=1"});
// };

// function getUserMarks(userSubId){
//     console.log("getting user marks with subid", userSubId)
// };

// getUserDetails("123",function(userRoll){
//     getUserSubjects(userRoll,function(userSubId){
//         getUserMarks(userSubId)
//     })
// });
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2U1ZWZhZTgyMmY5ZjcwM2VjNTk5YTE5MjE5ODI2MCIsIm5iZiI6MTc2NDYxMDA3Mi44ODQsInN1YiI6IjY5MmRkMDE4N2NiMTY2NTFkNzI4Njc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j33l_EfQwv24DFjpBHzbTeQsDpUr6pXrmrg22OyY7LM'
    }
};

const getData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    const json = await data.json();
    console.log(json);
}

getData();
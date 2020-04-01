const mongoose = require("mongoose");


// now we are connecting to the server and creating the dabaBase
mongoose.connect("mongodb://localhost:27017/languagesDB", {useNewUrlParser: true, useUnifiedTopology: true });

// here we are creatinga  mongoose schmea for the dabaBase
// This is a basically a blue print or struture for our dataBase
const languageSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    detail: String
});

// Now we craete a mongoose model

const Language = mongoose.model("Language", languageSchema);

// now we can create a new language document

const language  = new Language({
    name: "c++",
    rating: 9,
    detail: "very fast but not friendly"
});

// language.save();

const techSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    detail: String,
    mostUsedLanguage: languageSchema
});

const Tech = mongoose.model("Tech", techSchema);

const cpp = new Language({
    name: "cpp",
    rating: 0.5,
    detaiL: "fast but not friendly"
});

// cpp.save();

const machineLearning = new Language({
    name: "Machine Learning",
    rating: 10,
    detail: "bhot bhari cheez hai"
})

machineLearning.save();

const tech = new Tech({
    name: "competetiveProgramming",
    rating: 8,
    detail: "mind sport",
    mostUsedLanguage: cpp
});


// tech.save();

const java = new Language({
    name: "Java",
    rating: 10,
    detail: "bht hard"
});

const python = new Language({
    name: "Python",
    rating: 11,
    detail: "saanp nhi hai ye"
});


// Language.insertMany([java, python], function(err){
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("Languages added successfully!");
//     }
// });

// to use find 

// Language.find(function(err, languages){
//     if(err) {
//         console.log(err);
//     } else {
//         // console.log(languages);
//         languages.forEach(function(language) {
//             console.log(language.name);
//         });
//         mongoose.connection.close();
//     }
// });




// Language.updateOne({_id: "5e834f3373751414c8674f25"}, {name: "JavaScript", rating: 10, detail: "currently working on"}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the record!");
//     }
// })

// updating in the cloud record

Language.updateOne({name: "cloud"}, {mostUsedLanguage: machineLearning}, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully added mostUsedLanguage in cloud Tech!!");
    }
})


// Language.deleteOne({_id: "5e83536a398ed23580429e07"}, function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Record deleted successfully!");
//     }
// })

// Language.deleteMany({name: "c++"}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Records deleted successfully!");
//     }
// });


// Tech.deleteMany({name: "cloud"}, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Records deleted successfully!");
//     }
// })

var user = {
    firstName : "SidduGanesh",
    lastName : "Musa",
    role : "Admin",
    loginCount : 32,
    GoogleSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    getInfo : function(){
        return console.table(`
            Name : ${this.firstName} ${this.lastName}
            course list : ${this.courseList}
        `);
    }
}

//add few more properties
var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("java")
console.log(user.getCourseCount());


user.getInfo();
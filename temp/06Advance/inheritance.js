class Student{
    constructor(name,standard){
        this.name = name;
        this.standard = standard;
    }

    getInfo()
    {
        return {name:this.name, standard: this.standard}
    }

    study()
    {
        return "studying"
    }

    play()
    {
        return "play in ground"
    }

    static homework()
    {
        return "do homework at home"
    }

}

class NewJoinee extends Student{
    constructor(name,standard){
        super(name,standard)
    }

    // study(){
    //     return "just now started studying"
    // }

    //overridden method
    play(){
        return "playing";
    }
}

const siddu = new Student("sid","6th")
console.log(siddu.getInfo());
// console.log(siddu.homework());

const honey = new NewJoinee("honey","9th")
console.log(honey.getInfo());
console.log(honey.study());
console.log(honey.play());
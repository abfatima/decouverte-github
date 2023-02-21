class Personne {
    #age = 20;
    #firstname = '';

    constructor(prenom, nom, profession) {

        this.#firstname = prenom;
        this.lastname = nom;
        this.job = profession;
        this.saluer = function () {
            console.log(`je m'appelle ${this.#firstname} ${this.lastname}`);

        };
    }
   getFirstname(){
    return this.#firstname;
   }
   getSaluer(){
    return this.saluer;
   }
   getAge(){
    return this.#age;
   }
   setAge(age){
       this.#age = age;
} 
}

const jean = new Personne("Jean", "François", "Software Developer");

jean.saluer();
console.log(jean.firstname);
jean.getAge();
console.log(jean.getAge());
jean.setAge(30);
console.log(jean.getAge());
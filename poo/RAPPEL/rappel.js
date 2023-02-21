function  Personne(prenom, nom, profession) {
        this.firstname = prenom; //on met le meme quon on code on ecrit this.prenom = prenom
        this.lastname = nom;
        this.job = profession;
        //on met une methode (fonction) 
        this.saluer = function () {
            console.log(`je m'apppelle ${this.firstname}  ${this.lastname}`);
        };
    }


Personne.prototype.manger = function () {
    console.log('je veux manger !');
};



const jean = new Personne('jean', 'dupuis', 'boulanger');
jean.saluer();
/*on a encapsuler prenom nom preofeesion saluer dans la classe
 (mettre tt à l'interieur )la classe

 est une capsule 
l'abstraction : ne pas se préocuuper du fonctionnement de la méthode 
polymorphisme le fait de pouvoir executer une methode est que le resultat est different 
selon l'objet 
4eme pillier */
jean.manger();

const a = Math.pow(3, 2); 
console.log(a);
const b = 3**2;
console.log(b);
Math.__proto__.carre = function (x){
    return x * x ;
};
const c = Math.carre(2);
console.log(c);

let str = 'bonjour';
str = str.toUpperCase();
console.log(str);

String.prototype.maj = function() {
    return this.toUpperCase();
}
 let str2 = 'bonsoir';
 str2 = str2.maj();
 console.log(str2);






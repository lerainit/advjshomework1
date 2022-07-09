## Прототипное наследование 

- механизм с помощью которого обьекты наследуют свойства друг друга


- дает возможность создавать множество экземпляров  обьектов с одинаковыми методами взятыми у одного обьекта прототипа

- благодаря прототипному наследованию есть возможность вызывать методы обьектов которых нет непосредственно в них самих но они есть у прототипа.

При вызве метода на обьекте этот метод будет найден или в самом обьекте или в цепочке прототипов обьекта если будет там найден будет вызван из прототипа

```js
function Animal(name,species,phrase){

this.name = name;
this.species = species;
this phrase = phrase;
}

Animal.prototype.sayHi = function(){
alert(this.phrase)
}

const bobby = new Animal('bobby','dog','Woww-wowww!');

const mini = new Animal('mini','cat','Miu -miu!');

console.log(bobby); // У обьектов нет метода sayHi
console.log(mimi);

bobby.sayHi()   // Но при вызовк метода он берется из прототипа

mini.sayHi()



```

## Для чего вызывать super() в конструкторе класса -потомка



- В конструкторе ключевое слово super() используется как функция, вызывающая родительский конструктор.

- Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора.

-  Ключевое слово super также может быть использовано для вызова функций родительского объекта.


```js

//Если мы не добавляем в класс потомок новых свойств то конструктор берется у класса родителя
// но если мы изменяем конструктор класса -потомка то необходимо вызывать конструктор родителя через  super()


class Employer {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Dentist extends Employer{
    construnctor(name,age,salary,skill){
        super(name,age,salary);

        this.skill = skill
    }
}


const Greg = new Dentist('Greg','45','50000','endododntics');

```


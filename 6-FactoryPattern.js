/*
Although the factory pattern is useful for creating like objects, it has two 
major drawbacks. First, there is no way to check whether a given object was 
created by a certain factory. We cannot, for example, say something like bender 
instanceof makeRobot to find out how bender was created. Second, the factory 
pattern does not share behaviors, rather, it simply creates new versions of a 
behavior every time it is called and adds them to the object being created. 
As a result, methods are repeated anew on every object created by the factory 
function, taking up valuable space. In a large program, this could prove 
extremely slow and wasteful.
*/
const counter = (name) => {
    let state = {
        name,
        count: 0
    }
    return {
        add: function (number) {
            state.count += number;
        },
        remove: function (number) {
            state.count -= number;
        },
        checkCount: function () {
            return state.count;
        },
        getName: function () {
            return state.name;
        }
    }
};

const counter2 = counter('George');
console.log(counter2.getName())  //George
counter2.add(2);
console.log(counter2.checkCount())  //2
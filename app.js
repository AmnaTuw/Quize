
var food = ["burger","kabsa","spaghetti","pizza"];
localStorage.setItem("foods", JSON.stringify(food)); 
var storedColors = JSON.parse(localStorage.getItem("foods")); 

// 2



const cars = {merceds:{country:"germany", model:[2000]},toyota:{country:"japan", model:[2000]},
    ford:{country:"USA", model:[2000]}};


///3
    
function getCar(car) {
    return console.log(`${2000} is made by ${car} in ${japsn}`); }
    
    
        
//4

const addFood = function (meal) {
    const Meals = JSON.parse(sessionStorage.getItem("food"));
    Meals.push(meal);
    sessionStorage.setItem("food", JSON.stringify(Meals));
};
const dog = new Dog("Spike","dobberman",5,);
console.log(user.getDog(),dog.getspecies(),dog.getage());
//5
class Dog {
    constructor(name, species,age,sound) {
        this.name = name;
        this.species = species;
        this.age=age;
                this.sound=sound;
            }
        getDog(){
            return this.name
        }
        getspecies(){
            return this.species
        }
        getage(){
            return this.age
        }
        makeSound(){
            return this.sound
        }}
        //6
        export default class Home extends Component {
            constructor(props) {
            super();
            this.state = {
                a: "",
                a: "",
            };
            }
        
            componentDidMount() {
            this.setState({
                a: "welcome to",
            });
            }
        
            componentDidUpdate(prevProps, prevState) {
            if (prevState.a === this.state.a) {
                this.setState({
                message2: "quiz awesome :)",
                });
            }
            }
        
            render() {
            return (
                <div>
                <h1>{this.state.a}</h1>
                <h1>{this.state.aa}</h1>
                </div>
            );
            }
        }






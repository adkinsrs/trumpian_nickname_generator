// I really wanted to read from file but Javascript really has no way for this except for installing node modules.
var terms = [

];

var app = new Vue({
    el: '#app',
    data: {
        show_nickname: false,
        message: '',
        name: '',
        term: ''
    },
    methods: {
        selectTerm: function() {
            terms = fs.readFile('terms.txt', 'utf-8', (err, data) => { 
                if (err) throw err; 
              
                return data.split(/\n/);
            }) 

          // Using "random" to select a term to return by index number
          return terms[Math.floor(Math.random()*terms.length)]
        },
       
        generateName: function() {
            // Generate nickname
            this.show_nickname = true;
            this.term = this.selectTerm();
            this.message = "Uh oh! Looks like President Trump really has it out for you, " + this.term + " " + this.name + "!";
        }
    }


})

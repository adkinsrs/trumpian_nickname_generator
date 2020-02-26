var app = new Vue({
    el: '#app',
    data: {
        show_nickname: false,
        message: '',
        name: '',
        term: ''
    },
    methods: {
        selectTerm: function(terms) {
          // Using "random" to select a term to return by index number
          term = terms[Math.floor(Math.random()*terms.length)]
          // capitalize word
          return term.charAt(0).toUpperCase() + term.slice(1)
        },
       
        generateName: function() {
            // Generate nickname
            this.show_nickname = true;
            this.term = this.selectTerm(terms);
            this.message = "Uh oh! Looks like President Trump really has it out for you, " + this.term + " " + this.name + "!";
        }
    }


})

var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
    questions:[
        {
            q:'1. How many days do we have in a week?',
            options: ['Seven' , 'Six' , 'Four' , 'Two'],
            answer:1
        },
        
        {
            q:'How many letters are there in the English alphabet?',
            options: [22 , 26 , 32 , 23 ],
            answer:2
        },
        
        {
            q:'How many lungs does the human body have?',
            options: [2 , 4 , 5 , 6 ],
            answer:1
        },
        
        {
            q:'How many sides are there in a triangle?',
            options: ['Two' , 'Three' , 'One' , 'seven' ],
            answer:2
        }, 

        


    ],
    index:0,
    //Load a question using the index
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            //Show the end screen
            quizbox.innerHTML="Quiz Completed!";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    //Check if answer is correct or not
    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    //disable options once user selects on option
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "/" + this.score;
    }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}
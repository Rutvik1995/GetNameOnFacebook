console.log("Hello World From content js");


var value=0;

    window.onload = function() {
        //var anchors = document.getElementsByTagName('a');


        // w3-btn w3-margin-bottom
        //  x = document.getElementsByClassName("_4-h7");
        // console.log(x);
        var anchors = document.getElementsByTagName('div');
        var spanArray = document.getElementsByTagName('span');
        //console.log(anchors);
        for(var i=0;i<anchors.length;i++){
          var targetValue="qzhwtbm6 knvmm38d";
          if(targetValue==anchors[i].className){
            // console.log("in if");
            // console.log(anchors[i]);
             var str = anchors[i];
            //  var str = anchors[i];
            //  console.log(str);
            //  var str = str.outerHTML;
            descendents = str.getElementsByTagName('*');
            this.console.log( descendents );
            for(var j=0;j<descendents.length;j++){
              this.console.log(descendents[j].outerText);
            }


          }
        }
        // for(var i = 0; i < anchors.length; i++) {
        //     var anchor = anchors[i];
        //     anchor.onclick = function() {
        //         alert('ho ho ho');
        //     }
        // }
    }


    document.addEventListener("click", function(event){
     if(value==1){
      console.log("run always"+value);
      //console.log(event.path);
     // var valueCheck=event.path;
      // for(var i=0;i<valueCheck.length;i++){
      //   console.log(valueCheck[i]);
      // }

      var targetElement = event.target || event.srcElement;
      console.log(targetElement.className);
      if(targetElement.className=="_1mf7 _4r1q _4jy0 _4jy3 _4jy1 _51sy selected _42ft"){
        console.log("in if");
        // var text = document.getElementsByClassName("_1mf");
        // console.log(text);
        
         var text = document.getElementById("pagelet_composer");
         console.log(text);
        


        // var span_text = document.getElementsByTagName('div');
        // for(var j=0;j<span_text.length;j++){
        //   console.log(span_text[j].className=='_1mf');
        //   // console.log(span_text[j]);
        //   if(span_text[j].className=='_1mf'){
        //       console.log(span_text[j]);
        //       break;
        //   }
        
        // }
       
      }
     }
    
    });


// let paragraph = document.getElementsByTagName('button');
// console.log(paragraph);
// for(elt of paragraph){
//    elt.style['background-color']="black";
// }

//  console.log("in end ");


// $('a').click(function(){
//   console.log(" ai ")
//   alert(" a is clicked");
//   }
// )

// $('span').click(function(){
//   console.log(" Button is clicked ")
//   alert(" span is clicked");
//   }
// )





$('span').click(function(){


  //console.log($('a').hasClass( "_4-h7" ));


  var myClass = $(this).attr("class");
  console.log(myClass);
  

  if(myClass==="_sg1 _3qd4 _76ge"){
    value=1; 
    console.log("In function");
    console.log("in click evenr");

    chrome.runtime.sendMessage({message: 'buttonClicked'}, 
    function() { 
      /* callback */ 
      console.log("in chrome click");
    });

    // var anchors = document.getElementsByTagName('a');
    // alert("hey what's up");
    //  for(var i=0;i<x.length;x++){
    //   console.log(x[i]);
    //  }
    //var anchors = document.getElementsByTagName('button');
    //console.log(anchors);
  }


  // console.log(anchors );

  // document.querySelector('_4-h7._5qtn').click();{
  //   console.log("in side if");
  // }



  //console.log(anchors.className);
 // alert(anchors);
});

$('button').click(function(){
  console.log("in button click event");
  alert("button click");
})


 // document.addEventListener('DOMContentLoaded', function() {
 //     var link =  document.getElementsByTagName('button');
 //     console.log("hhh");
 //     console.log("in ele");
 //     // onClick's logic below:
 //     link.addEventListener('click', function() {
 //         console.log("hello in button click");
 //     });
 // });

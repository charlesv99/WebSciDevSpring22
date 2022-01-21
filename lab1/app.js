function load(x){
    var i=0;
    function loop(){
        setTimeout(()=>{
            if(i<x.length){
                $("#vwrap").prepend(
                    x[i++]
                 );
            loop();    
            }
        },2000);
    };
    loop();
};
$(function(){ 
    $.ajax({
        async: false,
        url: "articles.json",
        dataType: "json"
    }).done((data)=>{ 
        var art = [];
        for(let i=0;i<data.articles.length;i++){
          var mydata=data.articles[i];
          var author=mydata.author;
          var desc=mydata.description;
          var words=`<div>${desc}</div>`;
          art.push(words)

        }
    load(data);
    });
   });

function load(x){
    var i=0;
    function loop(){
        if(i<5){
            setTimeout(()=>{
                if(i<x.length){
                    $("#vwrap").prepend(
                        x[i++]
                     );
                loop();    
                }
            },0);
        }else{
            setTimeout(()=>{
                if(i<x.length){
                    $("#vwrap").prepend(
                        x[i++]
                     );
                loop();    
                }
            },3000);
        }
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
          if(author==null){
              author=mydata.source.name;
          }else{
              author+=" - "+mydata.source.name;
          }
          var title=mydata.title;
          var desc=mydata.description;
          var imageurl=mydata.urlToImage;
          var url=mydata.url;
          var words=`<a href="${url}"><div class="articles id="${i}"onclick="${url}">
            <img src="${imageurl}"/>
            <div class="txtCont">
                <div class="title">${title}</div>
                <div class="author">${author}</div>
                <div class="desc">${desc}</div>
            </div>
          </div></a>`;
          art.push(words)

        }
    load(art);
    });
   });

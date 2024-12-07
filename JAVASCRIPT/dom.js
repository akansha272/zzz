document.write(Date());

let my_class=document.getElementsByClassName('t');
alert('we are accessing an element through the class name:' +my_class[0].innerHTML);

function fun(){
    document.getElementsByClassName('t1')[0].computedStyleMap.backgroundColor="pink";
}

const table = document.getElementById("table");
const tableAttrs = table.attributes;
for(let i=0;i<tableAttrs.length,i++){
    if(tableAttrs[i].nodeName.toLowerCase()==="border"){
        table.border="1";
    }
}
table.summary="note : increased border";
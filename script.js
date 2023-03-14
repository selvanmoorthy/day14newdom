function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;

}

function linebreak(tagname){
    var br=document.createElement("br");
    return br;

}
var names=labels("label","for","name","Name");
var br1=linebreak("br");
var input=inputs("input","type","name","name","name","id","name");
var br2=linebreak("br");
var middlename=labels("label","for","middlename","Middlename");
var br3=linebreak("br");
var input1=inputs("input","type","middlename","name","middlename","id","middlename");
var br4=linebreak("br");
var lastname=labels("label","for"," lastname"," lastname");
var br5=linebreak("br");
var input2=inputs("input","type"," lastname","name"," lastname","id"," lastname");
var br6=linebreak("br");
var email=labels("label","for","email","email");
var br7=linebreak("br");
var input3=inputs("input","type","email","name","email","id","email");
var br8=linebreak("br");
var pass=labels("label","for","pass","password");
var br9=linebreak("br");
var input4=inputs("input","type","pass","name","pass","id","pass");

document.body.append(names,br1,input,br2,middlename,br3,input1,br4,lastname,br5,input2,br6,email,br7,input3,br8,pass,br9,input4);
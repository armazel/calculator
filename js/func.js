function isNumber(n) {
  return !isNaN(parseFloat(n));
}


function run(value) {                                    //функция ввода значений
   var re = /^[*)+."/\"]/;
    var reOne=/".\"+/;
    temporary_str= document.frm.result.value+value
      if(re.test(temporary_str))
          
      {                        //проверка по регулярке, на ввод первого эл-та
     console.log(re.test(temporary_str))
     console.log(re1.test(temporary_str))
     document.frm.result.value =""
      }
    else {
    if((!isNumber(value)) && !isNumber(document.frm.result.value[document.frm.result.value.length-1]) || reOne.test(temporary_str) )             //проверка на то, что вводимое значение не число
            
        document.frm.result.value = document.frm.result.value.substr(0,document.frm.result.value.length-1)           //замена символов
        document.frm.result.value +=value;
    }
   
}

function backspace() {
    document.frm.result.value = document.frm.result.value.substr(0,document.frm.result.value.length-1)
}   
    
function answer() {
    var evalw=eval(document.frm.result.value);        //подсчеты
        
    document.frm.result.value=evalw;
           
}

function clean(){
   //document.frm.result.value=document.frm.result.value.substring(0,document.frm.result.value.length-1);
     document.frm.result.value="";                   
}

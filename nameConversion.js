
let str = "";
document.addEventListener("input" , () =>{
    let user_input = document.getElementById("text").value;
      str = user_input;
})

let button = document.getElementById("convert-btn");
button.addEventListener("click" , ()=>{
    
    let camel_case = str[0]
    let pascal_case = str[0].toLocaleUpperCase()
    for(let i=1;i<str.length;i++){
       if(str[i]==" "){
        if(str[i+1] == " "){
            continue
        }
        else{
            camel_case = camel_case +  str[i+1].toUpperCase() 
            pascal_case = pascal_case +  str[i+1].toUpperCase() 
             i++  
        }
           
       }
       else{
            camel_case = camel_case + str[i].toLowerCase();
            pascal_case =  pascal_case + str[i].toLowerCase();
       }   
    }

    let snake_case = str[0].toUpperCase()
    // let screaming_snake_case = str[0].toUpperCase()
    let kebab_case = "";
    for(let i=1;i<str.length;i++){
        if(str[i]==" "){
            if(str[i+1] == " "){
                continue
            }
            else{
                snake_case  = snake_case  + "_"
                snake_case  = snake_case + str[i+1].toUpperCase();

                // screaming_snake_case  = screaming_snake_case  + "_"
                // screaming_snake_case = screaming_snake_case + str[i+1].toUpperCase();

                kebab_case  = kebab_case  + "-"
                kebab_case =  kebab_case + str[i+1].toUpperCase();

                 i++
            }
            str[i]
        }
        else{
           snake_case = snake_case + str[i]
        //    screaming_snake_case = screaming_snake_case + str[i].toUpperCase();
        kebab_case = kebab_case + str[i]
        
        }   
     }
 
    document.getElementById("camel-case").innerHTML = camel_case;
    document.getElementById("pascal-case").innerHTML = pascal_case;

    document.getElementById("snake-case").innerHTML = snake_case;
    document.getElementById("screaming-snake-case").innerHTML = snake_case.toUpperCase();

    document.getElementById("kebab-case").innerHTML = kebab_case;
    document.getElementById("screaming-kebab-case").innerHTML = kebab_case.toUpperCase();
})


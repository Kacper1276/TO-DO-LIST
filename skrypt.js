const btn = document.querySelector("button");
        let taskNumber = document.querySelector('h1 span');
        
        
        
            btn.addEventListener('click',function(){
                let tresc = document.getElementById('tresc').value;
                const li = document.createElement('li');
                var textNode = document.createTextNode(tresc);
                
                li.classList = "white";
                
                if(tresc == ""){
                   alert("Wpisz dane");
                   }
                else{
                    li.appendChild(textNode);
                    
                    var task = document.getElementById("wynik").appendChild(li);
                    
                        let iloscLi = document.querySelectorAll("li");
                            taskNumber.textContent = iloscLi.length;
                            
                    
                        
                       
                    var removeButton = document.createElement("button");
                        removeButton.innerHTML = "USUŃ";
                        removeButton.addEventListener("click",usun);
                        task.appendChild(removeButton);
                    
                    function usun(){
                        task.remove();
                        taskNumber.textContent = iloscLi.length - 1
                    }
                }
                 
                

            })
        
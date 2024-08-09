window.addEventListener("load",function(){
    const table = document.getElementById("table");
    const nr=8;
    const nc=8;
    const bishopPos="yellow";
    const pathColor="red";
    for(let ri=0;ri<nr;ri++){
        let tr = document.createElement("tr");
        for(let ci=0;ci<nc;ci++){
            let td = document.createElement("td");
            td.setAttribute("class","box");
            td.setAttribute("data-index",`${ri}-${ci}`);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    const allBoxes = document.querySelectorAll(".box");

    table.addEventListener("mouseover",function(e){
        resetBoxes(); //reset the entire chessboard for us . 
        let selectedEle=e.target;
        selectedEle.classList.add(bishopPos);
        let [ri,ci] = selectedEle.dataset.index.split("-");

        //ri-- , ci++
        let trPath=topRight(ri,ci); //{"2-4":true,"1-5":true}

        //ri++ , ci++
        let brPath=bottomRight(ri,ci);

        //ri-- , ci--
        let tlPath=topLeft(ri,ci);
        
        //ri++ , ci--
        let blPath=bottomLeft(ri,ci);

        let storageIndex={...trPath, ...brPath, ...tlPath, ...blPath};
        colorPath(storageIndex);

    })

    function topRight(ri,ci){
        let storage={};
        ri--;
        ci++;
        while(ri>=0 && ci<nc){
            storage[`${ri}-${ci}`]=true;
            ri--;
            ci++;
        }
        return storage;
    }
    function bottomRight(ri,ci){
        let storage={};
        ri++;
        ci++;
        while(ri<nr && ci<nc){
            storage[`${ri}-${ci}`]=true;
            ri++;
            ci++;
        }
        return storage;
    }
    function topLeft(ri,ci){
        let storage={};
        ri--;
        ci--;
        while(ri>=0 && ci>=0){
            storage[`${ri}-${ci}`]=true;
            ri--;
            ci--;
        }
        return storage;
    }
    function bottomLeft(ri,ci){
        let storage={};
        ri++;
        ci--;
        while(ri<nr && ci>=0){
            storage[`${ri}-${ci}`]=true;
            ri++;
            ci--;
        }
        return storage;
    }

    function colorPath(storageIndex){
        //{"2-4":true,"1-5":true}
        allBoxes.forEach(box=>{
            let idx=box.dataset.index;
            if(storageIndex[idx]){
                //color that box 
                box.classList.add(pathColor);
            }
        })
    }

    function resetBoxes(){
        console.log("resetting boxes");
        allBoxes.forEach((box)=>{
            box.classList.remove(bishopPos);
            box.classList.remove(pathColor);
        })
    }


})


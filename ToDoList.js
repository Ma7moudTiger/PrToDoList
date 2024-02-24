// ================================================


let frm = document.querySelector(".form");
let inp = document.querySelector(".input");
let btn = document.querySelector(".add");
let tsk = document.querySelector(".tasks");


// ================================================

window.onload = inp.focus();

btn.addEventListener("click", ok => {
  for (let i = 0; i < tsk; i++) {
    ok = array[i];
  }

  if (inp.value) {
    let div = document.createElement("div");
    div.textContent = inp.value;
    window.localStorage.setItem('test', inp.value)
    div.className = 'child';
    tsk.append(div);
    inp.value = "";

    let del = document.createElement('input:submit');
    del.className = "del";
    del.textContent = "X";
    
    window.localStorage.setItem("note", div.value);
    
    del.addEventListener("click", function () {
      del.parentElement.parentElement.remove();
      window.localStorage.removeItem("note");
      console.log('ffff.length - 1')
    });
    
    let done = document.createElement('input:submit');
    done.className = "done";
    done.textContent = "O";
    let cont = document.createElement('span')
    cont.className = 'cont'
    cont.appendChild(del);
    cont.appendChild(done);

    div.appendChild(cont);
    window.localStorage.setItem(`${inp.value}`, inp.value);

    done.addEventListener("click", function () {
      done.parentElement.parentElement.classList.add('finshed');
    });

  } else {
    let emp = document.createElement("div");
    emp.style.cssText = `
    position: absolute;
    z-index: 1000;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    height: 500px;
    width: 800px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(178 213 209);
    display: flex;
    align-items: center;
    font-size: 30px;
    flex-direction: row;
    `;
    let h = document.createElement("h2");
    h.textContent = "اقف عندك"
    let p = document.createElement("p");
    p.textContent = "مش ورقة امتحان هيا اكتب اي حاجة"
    let x = document.createElement("div");
    x.className = "del"
    x.textContent = "X";
    x.style.cssText = `
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 0px;
    `;

    let hold = document.createElement("img");
    hold.className = "hold"
    hold.src = "./holdOn.png"
    hold.style.cssText = `
    width: 50%;
    `;
    emp.appendChild(hold);
    let ggg = document.createElement('div');
    ggg.style.cssText = `
      display: flex;
      flex-direction: column;
    `;
    ggg.append(h);
    ggg.append(p);
    emp.appendChild(ggg);
    emp.appendChild(x);
    document.body.append(emp);
    x.addEventListener("click", function () {
      x.parentElement.remove();
    });
  }
  
  

  let delAll = document.querySelector('.delAll');
  let ffff = Array.from(tsk.children);
  
  

  delAll.addEventListener("click", function () {
    ffff.forEach(e => {
      e.remove();
    });
  });

  let checkAll = document.querySelector('.checkAll');
  checkAll.addEventListener("click", function () {
    
    ffff.forEach(e => {
      e.classList.add('finshed');
    });
  });

  
  let added = document.querySelector('.added');
  ffff.length != [] ? added.textContent = `notes : ${ffff.length}` : added.textContent = `empty`;
});

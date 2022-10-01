

function getdata(data){

    let data =  forEach(function(ele, ind){
        let m = document.getElementById("m").value;
        m.innertext = ele.m
        let n = document.getElementById("n").value;
        n.innertext = ele.n
        let o = document.getElementById("o").value;
        o.innertext = ele.o
        let p = document.getElementById("p").value;
        p.innertext = ele.p
     
        let q= document.getElementById("q").value;
        q.innertext = ele.q
        let qs = document.getElementById("qs").value;
        qs.innertext = ele.qs
        let r= document.getElementById("r").value;
        r.innertext = ele.r
        let s = document.getElementById("s").value;
        s.innertext = ele.s
         let btn = document.getElementsByClassName("g")
         btn.addEvenlistner("click" , function(){
            c(ele)
         })
         div.append(m,n,o,p,q,qs,r,s,btn)

    })
    

  
}

function c (ele){
     if(ele.m && ele.n && ele.o && ele.p && ele.q && ele.qs && ele.r && ele.s){
        alert ("Done successfull")
     }

}
getdata()
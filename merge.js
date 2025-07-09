//mergeSort=>slice.sort,merge
//[2,7,3,8]
//[2,7]/[3,8]
//[2],[7]/[3],[8]
//[2,7]/[3,8]
//[2,3,7,8]
//use let and assign value one by one
function mergeS(a){
    let m,l,r;
    if(a.length==1){
        return a;
    }
    m=Math.floor(a.length/2);//floor 
    l=mergeS(a.slice(0,m));
    r=mergeS(a.slice(m));
    return Sort(l,r);
}
function Sort(l,r){
    let i=0,j=0;//BeCareFul
    let n=[];
    while(i<l.length && j<r.length){
        if(l[i]<r[j]){
            n.push(l[i]);
            i++;
        }else{
            n.push(r[j]);
            j++;
        }
    }
    n=n.concat(l.slice(i));
    n=n.concat(r.slice(j));
    return n;
}
console.log(mergeS([2,7,3,8]));

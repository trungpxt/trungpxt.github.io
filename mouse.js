var text = new Date()
let date = text.getDay()
console.log(date)
//           0     1     2       3     4       5       6           7           8
var MH = ['',"toán",'văn', "anh",'tin','công nghệ','GDKTPT', "lịch sử", "vật lí"]
var week = [
    [],
    [],
    [7,4,4,3],
    [5,5,6,6,8],
    [4,2,2,3,3],
    [3,3,1,1,1],
    [2,2,7,1,3],
    [2,2,4,5,5]
]


let getdatabeta =()=>{

    let  check = Number(document.getElementById("value").value)
    console.log(check)
    if(check > 1){
        return check
    }if(check == 1){
        alert("vui lòng chọn thứ mà bạn muốn xem")
    }
    
}
//
let dick = (payback)=>{
    var printdatabase = ""
    for (i = 0; i < week[payback].length;i++){
        let thututiethoc = i+1;
        printdatabase += `tiết `+ thututiethoc+` : `+MH[week[payback][i]]+"<br>"+`<br>`
    }
    document.getElementById('MH1').innerHTML = printdatabase
}
//
// let dick =(backdata)=>{
//     var output = "";
//     let tiet = 0;
// for (i = 0; i <= week.length;i++){
//     if(i == backdata){
//         for(c = 0 ; c <= 4;c++)
//             let sotiet  = c+1;
//          output += `tiết ` + sotiet +`: `+ MH[week[i][c]]+"<br>"+ '<br>'
//     }
//     document.getElementById('MH1').innerHTML = output
// }}
var new_date= new Date()
setInterval(check_weekday,1000)

function check_weekday (){
    if(new_date.getDay()+1 != 1){
        document.querySelector("#day").innerHTML = `hôm nay là thứ ${new_date.getDay()+1}`
   }if(new_date.getDay()+1 == 1){
    document.querySelector("#day").innerHTML = `hôm nay là chủ nhật`

    }
}

// //a
// let new_date = new Date()
// let time = new_date.getDay()
// console.log(time)
// let get = ()=>{
//     var minidemo = document.getElementById("demo").value
//     return minidemo;
// }
//
// let run = (a)=>{
//     let dataprint =""
//     for(i=0;i < week[a].length;i++){
//         let sotiet = i+1;
//         dataprint += `tiết` + sotiet +`:` + monhoc[week[a][i]] + `<br>`
//         document.getElementById("idprint").innerHTML=monhoc[week[a][i]]
//     }
//     document.getElementById("idprint").innerHTML=dataprint
// }
//
//
// b

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById("time").textContent = hours + ":" + minutes;
}
setInterval(updateTime, 1000);

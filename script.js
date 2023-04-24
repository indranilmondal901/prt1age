const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
const res = document.getElementById("res")



submit.addEventListener("click", calculate);

function calculate() {
    // console.log("hi");
    // console.log(typeof(day.value))

    const d = parseInt(day.value);
    const m = parseInt(month.value);
    const y = parseInt(year.value);
    // console.log(d,m,y)
    const date = new Date();
    // console.log(date);
    let cY = date.getFullYear();
    //  console.log(cY);
    let cM = date.getMonth();
    //  console.log(cM);
    cM = cM + 1;

    let cD = date.getDate();
    //  console.log(cD)
    cD = cD + 1;
    let rY = 0;
    let rM = 0;
    let rD = 0;
    if (y > cY) {
        console.log("invalid DOB");
    } else {
        if (cD < d) {
            // console.log(" d inc ...m dec")
            cM = cM - 1;
            cD = cD + 30;
        }
        if (cM < m) {
            // console.log(" m inc ...y dec")
            cY = cY - 1;
            cM = cM + 12;
            // console.log("cY==> " + cY)
            // console.log("cM==> " + cM)
        }
        //calculate
        // console.log(cY, cM, cD)
        rY = cY - y;
        rM = cM - m;
        rD = cD - d;
        // console.log(rY, rM, rD)
        const rSt = `Your Age is ${rY} Years ${cM} Months ${cD} Days`
        console.log(rSt);
        res.innerHTML = rSt;
    }

}
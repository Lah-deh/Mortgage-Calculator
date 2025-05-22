function mortgageCalculator(){
    let loanAmount = Number(document.getElementById("Amount").value )
    let loanTerm = Number(document.getElementById("Term").value) 
    let loanRate = Number(document.getElementById("Rate").value) 
    
    let interest = Number(((loanAmount*loanRate*loanTerm)/100).toFixed(2))
    let repayment = Number(loanAmount+interest)


    let repaymentOption = document.getElementById("repayments")
    let interestonly = document.getElementById("interest")

    if(repaymentOption.checked){
        document.querySelector(".myResult").textContent = `$ ${repayment}`;
    }else if(interestonly.checked){
        document.querySelector(".myResult").textContent = `$ ${interest}`;
    }
}

function result(){
    document.getElementById("results").style.display = "block"
    document.getElementById("image").style.display = "none"
}

let button = document.querySelector("button")
button.addEventListener("click",()=>{
    mortgageCalculator()
    result()
}
)

let reload = document.querySelector(".reload")
reload.addEventListener("click",()=>{
    location.reload()
})

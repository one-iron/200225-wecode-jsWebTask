
function inputCheck(){ // input값이 올바르게 들어왔는지 확인 후 input값을 인자로 계산함수로 넘깁니다.

	const sn = document.getElementById("stockName").value;
	const cp = document.getElementById("currentPrice").value;
	const bp = document.getElementById("buyingPrice").value;
	const bq = document.getElementById("buyingQuantity").value;

	if(sn == ""){ //siwtch 함수로 변경하기 
		alert('종목명을 입력해 주세요.')
	}
	else if(cp == "" || typeof (cp * 1) !== "number"){
		alert('현재가를 입력해 주세요.')
	}
	else if(bp == "" || typeof (bp * 1) !== "number"){
		alert('매수가를 입력해 주세요.')
	}
	else if(bq == "" || typeof (bq * 1) !== "number"){
		alert('매수액을 입력해 주세요.')
	}
	else calculate(sn, cp, bp, bq);
}

function calculate(sn, cp, bp, bq){ //올바른 input값을 인자로 받아 계산하고, 엘리멘트를 만드는 함수입니다.
	

	const resultBox = document.querySelector(".resultBox");
	const percent = ((((cp - bp) / bp)) * 100).toFixed(1); // 이익율 계산 
	const profit = Math.floor(((bq * percent) / 100)); // 이익금 계산

	const resultItem = document.createElement("li"); // 결과 아이템 만들기
	const dltBtn = document.createElement("button") // 삭제버튼을 만들기

	resultItem.innerHTML = `${sn} ${percent}% ${profit} ${cp} ${bp} ${bq}`; //리스트에 종목명, 이익률, 이익금 텍스트 넣기
	dltBtn.innerHTML = "❌" // 삭제버튼에 텍스트 넣기
	dltBtn.addEventListener("click", dltItem) // 삭제버튼에 클릭하면 삭제 함수 연결

	resultItem.appendChild(dltBtn); // 결과 아이템에 삭제버튼 추가
	resultBox.appendChild(resultItem); // resultBox에 결과 아이템 추가

}

function dltItem(event){
	const resultBox = document.querySelector(".resultBox");
	resultBox.removeChild(event.target.parentElement);
}




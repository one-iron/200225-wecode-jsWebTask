
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
	else if(cp == bp){
		alert('변동사항이 없으십니다. 너무 조급해 하지마세요.')
	}
	else calculate(sn, cp, bp, bq);
}

function calculate(sn, cp, bp, bq){ //올바른 input값을 인자로 받아 계산하고, 엘리멘트를 만드는 함수입니다.
	

	const resultBox = document.querySelector(".resultBox");
	const percent = ((((cp - bp) / bp)) * 100).toFixed(1); // 이익율 계산 
	const profit = Math.floor(((bq * percent) / 100)); // 이익금 계산

	const dltBtn = document.createElement("span") // 삭제버튼을 만들기
	const divBox = document.createElement("div"); // 결과 박스 만들기
	const title = document.createElement("h5"); // 제목 엘리멘트 만들기
	const content = document.createElement("p") // 내용 엘리멘트 만들기

	dltBtn.innerHTML = "🔴삭제" // 삭제버튼에 텍스트 넣기
	dltBtn.addEventListener("click", dltItem) // 삭제버튼에 클릭하면 삭제 함수 연결

	if(percent > 0){
		title.innerHTML = `<br>${sn}↗`;
		content.innerHTML = `매수하신 뒤로<br><br> ${percent}% 증가하였습니다. ↗ <br>현재 수익은 ${profit}원 입니다. 🤑`;
		title.style.backgroundColor = "orangered";
	}
	else if(percent < 0){
		title.innerHTML = `<br>${sn}↘`;
		content.innerHTML = `매수하신 뒤로<br><br> ${percent}% 감소하였습니다. ↘ <br>현재 손해는 ${profit}원 입니다. 😨`
		title.style.backgroundColor = "mediumblue";
	}
	

	divBox.appendChild(title);
	divBox.appendChild(content);
	divBox.appendChild(dltBtn);
	resultBox.appendChild(divBox); // resultBox에 결과 아이템 추가

}

function dltItem(event){
	const resultBox = document.querySelector(".resultBox");
	resultBox.removeChild(event.target.parentElement);
}




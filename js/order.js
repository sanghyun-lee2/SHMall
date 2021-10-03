
window.addEventListener('load', function () {
    loadStorageData();

    document.getElementById('save-btn').onclick = btnClickOrdersave;

    var orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault(); // submit을 중지한다.

        // 입력 요소에 대한 입력 여부를 체크한다.
        if (orderForm.inputName.value === '') {
            alert('이름을 입력해주세요');
            orderForm.inpuName.focus();
            return;
        }
        if (orderForm.inputEmail.value === '') {
            alert('이메일을 입력해주세요');
            orderForm.inputEmail.focus();
            return;
        }
        if (orderForm.inputPhone.value === '') {
            alert('휴대폰번호를 입력해주세요');
            orderForm.inputPhone.focus();
            return;
        }
        if (orderForm.inputAddress.value === '') {
            alert('주소를 입력해주세요.');
            orderForm.inputAddress.focus();
            return;
        }
        if (orderForm.inputAddress2.value === '') {
            alert('나머지 주소를 입력해주세요.');
            orderForm.inputAddress2.focus();
            return;
        }
        if (orderForm.gridCheck.checked === false) {
            alert('개인정보 활용 동의에 체크해주세요.');
            orderForm.gridCheck.focus();
            return;
        }
        if (orderForm.inputCardNumber1.value === '') {
            alert('카드번호를 입력해주세요.');
            orderForm.inputCardNumber1.focus();
            return;
        }
        if (orderForm.inputCardNumber2.value === '') {
            alert('카드번호를 입력해주세요.');
            orderForm.inputCardNumber2.focus();
            return;
        }
        if (orderForm.inputCardNumber3.value === '') {
            alert('카드번호를 입력해주세요.');
            orderForm.inputCardNumber3.focus();
            return;
        }
        if (orderForm.inputCardNumber4.value === '') {
            alert('카드번호를 입력해주세요.');
            orderForm.inputCardNumber4.focus();
            return;
        }
        if (orderForm.inputCardUser.value === '') {
            alert('카드 소유자를 입력해주세요.');
            orderForm.inputCardUser.focus();
            return;
        }
        if (orderForm.inputCardExpire.value === '') {
            alert('유효기간을 입력해주세요.');
            orderForm.inputCardExpire.focus();
            return;
        }
        if (orderForm.inputCardCVC.value === '') {
            alert('CVC번호를 입력해주세요.');
            orderForm.inputCardCVC.focus();
            return;
        }
        alert('정상적으로 주문되었습니다.');
    });

    // 숫자만 입력 가능한 필드에 대하여 key event를 적용한다.
    orderForm.inputPhone.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    orderForm.inputCardNumber1.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    orderForm.inputCardNumber2.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    orderForm.inputCardNumber3.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    orderForm.inputCardNumber4.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    orderForm.inputCardExpire.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9\/]/g, '');
    });
    orderForm.inputCardCVC.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}); // 저장

function btnClickOrdersave() {
    let selForm = document.querySelector("#orderForm");

    // Getting an FormData
    let data = new FormData(selForm);

    // Getting a Serialize Data from FormData
    let serializedFormData = serialize(data);

    // Setting a Temp Data to Textarea
    localStorage.setItem('OrderInfo', JSON.stringify(serializedFormData));
}

function serialize(rawData) {
    let rtnData = {};

    for (let [key, value] of rawData) {
        let sel = document.querySelectorAll("[name=" + key + "]");

        // Array Values
        if (sel.length > 1) {
            if (rtnData[key] === undefined) {
                rtnData[key] = [];
            }
            rtnData[key].push(value);
        }
        // Other
        else {
            rtnData[key] = value;
        }
    } return rtnData;
}

// 로컬스토리지에서 주문, 결제 정보를 읽어와서 해당 입력란에 로드
function loadStorageData() {
    var orderObject = localStorage.getItem('OrderInfo');
    var jsonOrder = JSON.parse(orderObject); // json 파싱

    for (key in jsonOrder) {
        // id에 해당되는 input 객체 가져옴
        var inputObj = document.getElementById(key);

        // input 객체의 텍스트를 로컬스토리지에 저장된 값으로 채움
        inputObj.value = jsonOrder[key];

        //console.log(jsonOrder[key]);
        //console.log('key:' + key + ' / ' + 'value:' + jsonOrder[key]);
    }
}

const tbl = document.querySelector('table');
const tBody = tbl.getElementsByTagName('tbody')[0];
const tHead = document.getElementsByTagName('thead')[0];
const body = document.querySelector('body');
tbl.className = 'table align-middle m-3 text-main';
tHead.className = 'table-light';
let arr = [];
let response = fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D&position=[%22junior%22,%22middle%22,%22senior%22]&status=[%22archive%22,%22onboarding%22,%22active%22,%22awaiting%22]&role=[%22Engineer%22,%20%22Designer%22,%20%22Product%20Manager%22,%20%22System%20Analytic%22,%22Consultant%22]&salary=%7BnumberLength%7C3%7D')
    .then(response => response.json())
    .then(data => {
        arr = data
    })
    .then(x => {
        for (let i = 0; i < arr.length; i++) {
            let newRow = document.createElement('tr');

            let cellName = document.createElement('td');
            cellName.className = 'd-flex flex-row';
            let photo = document.createElement('img')
            photo.src = 'https://api.random-avatars.holmista.tech/images/random/small';
            photo.className = 'rounded-circle me-3 wid-5';
            let name = arr[i].firstName;
            let secName = arr[i].lastName;
            let nameDiv = document.createElement('div');
            nameDiv.textContent = `${name} ${secName}`;
            nameDiv.className = 'fw-bold text-dgray';
            let mail = arr[i].email;
            let mailDiv = document.createElement('div');
            mailDiv.textContent = `${mail}`;
            let mainDiv = document.createElement('div');
            mainDiv.appendChild(nameDiv);
            mainDiv.appendChild(mailDiv);
            cellName.appendChild(photo);
            cellName.appendChild(mainDiv);
            newRow.appendChild(cellName);

            let cellNumber = document.createElement('td');
            let number = arr[i].phone;
            cellNumber.textContent = `${number}`;
            newRow.appendChild(cellNumber);

            let cellTittle = document.createElement('td');
            let tittle = arr[i].role;
            cellTittle.textContent = `${tittle}`;
            newRow.appendChild(cellTittle);

            let cellStatus = document.createElement('td');
            let status = arr[i].status;

            let statusSpan = document.createElement('span');
            statusSpan.textContent = `${status}`;
            switch (statusSpan.textContent) {
                case 'active':
                    statusSpan.className = 'bg-lgreen rounded-pill fw-bolder px-2 py-1 text-success'
                    break
                case 'awaiting':
                    statusSpan.className = 'bg-lyellow rounded-pill fw-bolder px-2 py-1 text-warning'
                    break
                case 'archive':
                    statusSpan.className = 'bg-lgrey rounded-pill fw-bolder px-2 py-1 text-secondary'
                    break
                case 'onboarding':
                    statusSpan.className = 'bg-lblue rounded-pill fw-bolder px-2 py-1 text-primary'
                    break
            }
            cellStatus.appendChild(statusSpan);
            newRow.appendChild(cellStatus);

            let cellPosition = document.createElement('td');
            let position = arr[i].position;
            cellPosition.textContent = `${position}`;
            newRow.appendChild(cellPosition);

            tBody.appendChild(newRow);
        }
    })
    .then(y => console.debug(arr))
    .catch(error => console.error(error));

let btn = document.createElement('button');
btn.className = 'btn btn-outline-light btn-pos';
btn.textContent = 'add new';
body.appendChild(btn);
btn.addEventListener('click', function () {
    let mainForm = document.createElement('div');
    mainForm.className = 'forme px-2';
    let form = document.createElement('form');
    let close = document.createElement('div');
    close.className = 'fw-bold close'
    close.textContent = 'x';
    let nameForm = document.createElement('div');
    nameForm.textContent = 'Name';
    let inpName = document.createElement('input');
    inpName.placeholder = 'full name';
    let telForm = document.createElement('div');
    telForm.textContent = 'Phone';
    let inpTel = document.createElement('input');
    inpTel.placeholder = 'phone number';

    let mailForm = document.createElement('div');
    mailForm.textContent = 'E-mail';
    let inpMail = document.createElement('input');
    inpMail.placeholder = 'mail address';

    let subBtn = document.createElement('button');
    subBtn.className = 'btn btn-outline-secondary m-2';
    subBtn.textContent = 'Submit';
    let divBtn = document.createElement('div');

    let selectTittle = document.createElement('select');
    selectTittle.className = 'my-1';
    let opt1Tittle = document.createElement('option');
    opt1Tittle.textContent = '--choose title--';
    opt1Tittle.style.display = 'none';
    let opt2Tittle = document.createElement('option');
    opt2Tittle.textContent = 'Designer';
    let opt3Tittle = document.createElement('option');
    opt3Tittle.textContent = 'Engineer';
    let opt4Tittle = document.createElement('option');
    opt4Tittle.textContent = 'System Analytic';
    let opt5Tittle = document.createElement('option');
    opt5Tittle.textContent = 'Consultant';
    let opt6Tittle = document.createElement('option');
    opt6Tittle.textContent = 'Product Manager';
    let divSelectTittle = document.createElement('div');

    selectTittle.appendChild(opt1Tittle);
    selectTittle.appendChild(opt2Tittle);
    selectTittle.appendChild(opt3Tittle);
    selectTittle.appendChild(opt4Tittle);
    selectTittle.appendChild(opt5Tittle);
    selectTittle.appendChild(opt6Tittle);
    divSelectTittle.appendChild(selectTittle);

    let selectStatus = document.createElement('select');
    selectStatus.className = 'my-1';
    let opt1Status = document.createElement('option');
    opt1Status.textContent = '--choose status--';
    opt1Status.style.display = 'none';
    let opt2Status = document.createElement('option');
    opt2Status.textContent = 'Active';
    let opt3Status = document.createElement('option');
    opt3Status.textContent = 'Awaiting';
    let opt4Status = document.createElement('option');
    opt4Status.textContent = 'Archive';
    let opt5Status = document.createElement('option');
    opt5Status.textContent = 'Onboarding';
    let divSelectStatus = document.createElement('div');

    selectStatus.appendChild(opt1Status);
    selectStatus.appendChild(opt2Status);
    selectStatus.appendChild(opt3Status);
    selectStatus.appendChild(opt4Status);
    selectStatus.appendChild(opt5Status);
    divSelectStatus.appendChild(selectStatus);

    let selectPosition = document.createElement('select');
    selectPosition.className = 'my-1';
    let opt1Position = document.createElement('option');
    opt1Position.textContent = '--choose position--';
    opt1Position.style.display = 'none';
    let opt2Position = document.createElement('option');
    opt2Position.textContent = 'Junior';
    let opt3Position = document.createElement('option');
    opt3Position.textContent = 'Middle';
    let opt4Position = document.createElement('option');
    opt4Position.textContent = 'Senior';
    let divSelectPosition = document.createElement('div');

    selectPosition.appendChild(opt1Position);
    selectPosition.appendChild(opt2Position);
    selectPosition.appendChild(opt3Position);
    selectPosition.appendChild(opt4Position);
    divSelectPosition.appendChild(selectPosition);

    divBtn.appendChild(subBtn)
    form.appendChild(close);
    form.appendChild(nameForm);
    form.appendChild(inpName);
    form.appendChild(mailForm);
    form.appendChild(inpMail);
    form.appendChild(telForm);
    form.appendChild(inpTel);
    form.appendChild(divSelectTittle);
    form.appendChild(divSelectStatus);
    form.appendChild(divSelectPosition);
    form.appendChild(divBtn);
    mainForm.appendChild(form);
    body.appendChild(mainForm);

    close.addEventListener('click', function () {
        mainForm.style.display = 'none';
    });
    subBtn.addEventListener('click', function (e) {
        let firstCell = `${inpName.value}  ${inpMail.value}`;
        let secondCell = inpTel.value;
        let thirdCell = selectTittle.selectedOptions[0].textContent;
        let fourthCell = selectStatus.selectedOptions[0].textContent;
        let fifthCell = selectPosition.selectedOptions[0].textContent;
        console.debug(firstCell, secondCell, thirdCell, fourthCell, fifthCell);
        e.preventDefault();
    });
});





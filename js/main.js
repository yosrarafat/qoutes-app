var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');

var sitesContainer = [];
// display   sites in local storage when open page (if exist) 
if (localStorage.getItem("sites") != null) {
    sitesContainer = JSON.parse(localStorage.getItem("sites"));
    displaySites(sitesContainer);
}
// add  sites to array then to local storage ,display sites , clear form


function add() {
    var site = {
        siteName: siteName.value,
        siteUrl: siteUrl.value,

    }

    for (let i = 0; i < sitesContainer.length; i++) {
        if (site.siteUrl == sitesContainer[i].siteUrl) {
            window.alert('book mark is repeated');

        } else {
            sitesContainer.push(site);
            localStorage.setItem("sites", JSON.stringify(sitesContainer));
            //  call clear & display functions
            displaySites(sitesContainer);
            clrForm();

        }


    }
}


// clear form 
function clrForm() {

    siteName.value = '';
    siteUrl.value = '';

}

// display sites 
function displaySites() {
    var box = ``;

    for (let i = 0; i < sitesContainer.length; i++) {
        box += `
       <tr>
     <td> ${i + 1}</td>
       <td>${sitesContainer[i].siteName}</td>
       <td><button type="button" onclick="visitSite(${sitesContainer[i].siteUrl})" ; id="visit" class="btn  btn-success"> <i class="fa-solid fa-eye"></i>Visit</button></td>
       <td><button type="button" onclick="deleteRow(${i})" ; id="delete" class="btn  btn-danger "><i class="fa-solid fa-trash-can"></i> Delete</button></td>
     </tr>`;
        document.getElementById('tableBody').innerHTML = box;

    }

}

// delete row from table
function deleteRow(i) {
    // delete row from array and table
    sitesContainer.splice(i, 1);
    // display again after delete
    displaySites(sitesContainer);
    // delete row from localstorage
    localStorage.setItem("sites", JSON.stringify(sitesContainer));


}

function visitSite(siteUrl) {
    window.open("siteUrl");

}














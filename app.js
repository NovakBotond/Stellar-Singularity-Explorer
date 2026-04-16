$(document).ready(function()) {

    $('#add-btn').on('click', function(){

    const id = $('#new-id').val();
    const name = $('#new-name').val();
    const type = $('#new-type').val();
    const mass = $('#new-mass').val();
    const dilation = $('#new-delation').val();
    const distance = $('#new-distance').val();

    if (id === ""){
        alert("Error! You must provide an ID!");
        $('#new-id').css('border', '2px solid red');
    } else {
        $('#new-id').css('border', '1px solid #ccc');
    }
    
    if (name === ""){
        alert("Error! You must provide an ENTITY name!");
        $('#new-name').css('border', '2px solid red');
    } else {
        $('#new-name').css('border', '1px solid #ccc');
    }

    if (type === ""){
        alert("Error! You must provide a TYPE!");
        $('#new-type').css('border', '2px solid red');
    } else {
        $('#new-type').css('border', '1px solid #ccc');
    }
    
    if (mass === ""){
        alert("Error! You must enter a MASS!");
        $('#new-mass').css('border', '2px solid red');
    } else{
        $('#new-mass').css('border', '1px solid #ccc');
    }
    
    if (dilation === ""){
        alert("Error! You must enter the TIME Dilation!");
        $('#new-dilation').css('border', '2px solid red');
    } else{
        $('#new-dilation').css('border', '1px solid #ccc');
    }
    
    if (distance === ""){
        alert("Error! You must enter a DISTANCE!");
        $('#new-distance').css('border', '2px solid red');
    } else{
        $('#new-distance').css('border', '1px solid #ccc');
    }



    // Adding Element

    const newRow = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${type}</td>
            <td>${mass}</td>
            <td>${dilation}</td>
            <td>${distance}</td>
        
        </tr>
`

        $('table tbody').append(newRow);


        $('table tbody tr:last').hide().fadeIn(1000);

        //Clearing inputs after succesful input
        $('input').val('');


})
}
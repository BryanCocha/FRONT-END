const fetchData = async () => {

    var response = await fetch ('https://bp-todolist.herokuapp.com/?id_author=1');
    var json= await response.json();
    return json;
}

const setTodoList = async () =>{
    var json = await fetchData();
    var element_container = document.querySelector('.container-list');
    element_container.innerHTML = '';
    for (let index= 0; index < json.data.length; index++){
        const element = json.data[index];
        element_container.innerHTML += `
        <div class="item-element" data-id="${element.id}" id="item-element_${elemnt_id}">
        <div class="item-element-content">
        <h2> ${element.description}</h2>
        </div>

        <div class="item-element-actions">
            <button class="action-button" id="item-edit_${elemnt_id}">
                <svg stroke="currentColor" fill="currentColor" stroke-with="0"
                    viewBox="0 0 16 16" height="1em" width="1em" xmlns="https://www.w3.org/2000/svg">
               </svg>
            </button> 

            <button class="action-button id="item-delete_${elemnt_id}"" >
                <svg stroke="currentColor" fill="currentColor" stroke-with="0"
                    viewBox="0 0 16 16" height="1em" width="1em" xmlns="https://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24h0v0z"></path>
               </svg>
            </button> 

         </div>
    </div> `
}
    console.log(json.data[0]);
    
}

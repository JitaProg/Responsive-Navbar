/*
Aquí estamos seleccionando tres elementos del HTML:
1-->toggleBtn: selecciona el elemento con la clase .toggle_btn.
2-->toggleBtnIcon: selecciona el <i> dentro del elemento con la clase .toggle_btn.
3-->dropDownMenu: selecciona el elemento con la clase .dropdown_menu.
*/
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open') /*Verifica menu abierto*/

    toggleBtnIcon.classList = isOpen/*Si esta abierto utiliza un icono u  otro*/
    ? 'bx bx-x'
    : 'bx bx-menu'
}
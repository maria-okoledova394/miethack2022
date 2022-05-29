import React from 'react';
import './App.css';

function EditForm() {

const [name, setName] = React.useState("");
const [description, setDescription] = React.useState("");    

function handleNameChange(e) {
    setName(e.target.value);
}

function handleDescriptionChange(e) {
    setDescription(e.target.value);
}



    return (
        <div>
            <form className="search__form search__container">
                <h2 className="search__title">Поиск по студенту</h2>
                <div className="search__field">
                <input id="fio-input" className="search__input" value={name || ''} name="name" onChange={handleNameChange} placeholder="Фамилия"/>
                </div>
                <button className="search__button" target="_blank" type="submit" disabled><a className="link_search" target="_self" href="/student_search.html">Найти</a></button>
            </form>
            <form className="search__form search__container">
                <h2 className="search__title">Поиск по комнате</h2>
                <div className="search__field">
                <input id="room-input" className="search__input" value={description || ''} name="about" onChange={handleDescriptionChange} placeholder="Номер комнаты" />
                </div>
                <button className="search__button" type="submit" disabled><a className="link_search" target="_self" href="/student_room.html">Найти</a></button>
            </form>
        </div>
    )
  }
  
  export default EditForm;
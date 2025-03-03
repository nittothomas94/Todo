import Input from './components/Input/input';
import Button from './components/Button/button';
import { useState, useEffect } from 'react';
import Card from './components/Card/card';
import Sidebar from './components/sidebar/sidebar';
import axios from 'axios';
import DeleteModal from './components/Delete Modal/deleteModal';
import EditModal from './components/Edit Modal/editModal';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState('');
  const [delModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [changeText, setChangeText] = useState();
  const [id, setId] = useState();
  const [pri, setPri] = useState();
  const [activeRow, setActiveRow] = useState('home'); // Default active row
  const currentDate = moment().format('dddd, D MMMM YYYY');

  useEffect(() => {
    gettodos();
  }, []);

  const onchange = e => {
    setData(e.target.value);
  };

  console.log(data);

  const onAddclick = async () => {
    const response = await axios.post(
      'https://todo-54cn.onrender.com/api/addtodo',
      {
        title: data,
      }
    );
    setTodos([...todos, response.data.data]);
    setData('');
    const audio = new Audio('/sound/notificationTone.mp3');
    audio.play();
    toast.success('added successfully');
  };

  const gettodos = async () => {
    const response = await axios.get(
      'https://todo-54cn.onrender.com/api/showtodo?sortorder=desc'
    );
    // console.log(response.data);
    setTodos(response.data);
  };

  const onDeleteClick01 = id => {
    setDelModal(true);
    setId(id);
    console.log('dele cli');
  };

  const onCancelClick = () => {
    setDelModal(false);
    setEditModal(false);
  };

  const onDeleteClick02 = async id => {
    try {
      const response = await axios.delete(
        'https://todo-54cn.onrender.com/api/deletetodo/' + id
      );
      if (response.status === 200) {
        const filteredData = todos.filter(todo => todo._id !== id);
        setTodos(filteredData);
      }
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
    setDelModal(false);
  };

  const onEditClick = id => {
    setEditModal(true);
    setId(id);
  };

  const onChangeText = e => {
    setChangeText(e.target.value);
  };

  const onModalEditClick = async () => {
    console.log('called');
    console.log(id);
    try {
      const response = await axios.patch(
        'https://todo-54cn.onrender.com/api/edittodo/' + id,
        { title: changeText } // Include the updated text in the request body
      );
      if (response.status === 200) {
        const updatedTodos = await axios.get(
          'https://todo-54cn.onrender.com/api/showtodo'
        );
        setTodos(updatedTodos.data);
      }
    } catch (err) {
      console.log(err.message);
      console.log('Error updating todo:');
    }
    setEditModal(false);
  };

  const onStarClick = async id => {
    console.log(id);
    setColor('blue');
    setPri('high');
    try {
      const response = await axios.patch(
        'https://todo-54cn.onrender.com/api/edittodo/' + id,
        { priority: pri } // Include the updated text in the request body
      );
      if (response.status === 200) {
        const updatedTodos = await axios.get(
          'https://todo-54cn.onrender.com/api/showtodo'
        );
        setTodos(updatedTodos.data);
      }
    } catch (err) {
      console.log(err.message);
      console.log('Error updating todo:');
    }
  };

  const handleRowClick = row => {
    setActiveRow(row);
  };

  const onHomeClick = async () => {
    gettodos();
    handleRowClick('home');
  };

  const onImpClick = async () => {
    const response = await axios.get(
      'https://todo-54cn.onrender.com/api/showtodo?sortby=priority'
    );
    setTodos(response.data);
    handleRowClick('important');
  };

  const onFilterClick = async () => {
    const response = await axios.get(
      'https://todo-54cn.onrender.com/api/showtodo?priority=high'
    );
    setTodos(response.data);
    handleRowClick('filter');
  };

  const onKeyPress = e => {
    if (e.key == 'Enter') {
      onAddclick();
    }
  };

  return (
    <div className="home">
      <Sidebar
        onImpClick={onImpClick}
        onFilterClick={onFilterClick}
        onHomeClick={onHomeClick}
        activeRow={activeRow}
      />
      <DeleteModal
        show={delModal}
        onCancelClick={onCancelClick}
        onDeleteClick02={() => {
          onDeleteClick02(id);
        }}
      />

      <EditModal
        show={editModal}
        onCancelClick={onCancelClick}
        onChangeText={onChangeText}
        onEditClick={onModalEditClick}
      />

      <ToastContainer />

      <div className="right-side">
        <div className="head">
          <h1 className="heading">TO DO</h1>
          <h3>{currentDate}</h3>
        </div>

        <div className="body">
          {todos.map(item => {
            return (
              <Card
                todoText={item.title}
                onDeleteClick={() => {
                  onDeleteClick01(item._id);
                }}
                onCancelClick={onCancelClick}
                onEditClick={() => {
                  onEditClick(item._id);
                }}
                onStarClick={() => {
                  onStarClick(item._id);
                }}
              />
            );
          })}
        </div>
        <div className="user-input-field">
          <Input
            type="text"
            onchange={onchange}
            value={data}
            onKeyPress={onKeyPress}
          />
          <Button classname="add" text="Add" onclick={onAddclick} />
        </div>
      </div>
    </div>
  );
};

export default App;

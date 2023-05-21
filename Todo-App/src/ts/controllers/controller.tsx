import { keys } from '../helpers/keys';
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from 'react';
import Items from '../components/items';
import Header from '../components/header';
import Footer from '../components/footer';
import Model from '../models/model';

function Controller() {
  const [listModel, setListModel] = useState(new Model());

  const handleNewKeyPress = (event: KeyboardEvent, value: taskModel) => {
    // keyCode is depricated but used per assigment requirements
    if (event.keyCode == keys.ENTER_KEY) {
      const newModel = new Model();
      newModel.setList([...listModel.getList(), value]);
      setListModel(newModel);
    }
  };

  const handleEditKeyPress: KeyboardEventHandler = (event) => {
    console.log('Handling edit key');
  };

  const handleCheckClick: MouseEventHandler = (event) => {
    console.log('Handling click');
  };

  const handleDestroyClick: MouseEventHandler = (event) => {
    console.log('Handling destroy click');
  };

  const handleEditClick: MouseEventHandler = (event) => {
    if (event.detail == 2) {
      console.log('Editing item');
    }
  };

  return (
    <>
      <Header handleNewKeyPress={handleNewKeyPress} />
      <Items
        list={listModel.getList()}
        handleEditClick={(event) => handleEditClick(event)}
        handleDestroyClick={(event) => handleDestroyClick(event)}
        handleCheckClick={(event) => handleCheckClick(event)}
        handleEditKeyPress={(event) => handleEditKeyPress(event)}
      />
      <Footer
        items_left={
          listModel.getList().filter((item) => item.completed == false).length
        }
      />
    </>
  );
}

export default Controller;

import {node, string} from "prop-types";
import './Pas.css'
import React, { useState } from 'react';
import Modal from 'react-modal';

const styles = (color, fore) => ({
    "button": {
        height: '40px',
        background: color,
        border: 'none',
        cursor: 'pointer',
        paddingLeft: '30px',
        paddingRight: '30px',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '18px',
        textAlign: 'center',
        color: fore,
        borderRadius: '5px'
    }
});





const ModalButton = (props) => {
    const useStyles = styles(props.background ?? '#3787FF',
        props.foreground ?? '#ffffff');


        const [modalIsOpen, setModalIsOpen] = useState(false);
  
        const openModal = () => {
          setModalIsOpen(true);
        };
        
        const closeModal = () => {
          setModalIsOpen(false);
        };

       

        const modalContent = (

            <body className="body_add">
            <div id="container_add">
            <div className="form-wrap"><div>
            <button className="btn_ret" onClick={closeModal}>X</button>
        </div>
              <h1>Додати стартап</h1>
              <p>Це займе одну хвилинку</p>
              <form>
                <div className="form-group">
                  <label for="first-name">Автор стартапу <i>*</i></label>
                  <input type="text" placeholder="ім'я, призвище, побатькові" name="firstName" id="first-name" required></input>
                </div>
                <div className="form-group">
                  <label for="email">Контактні данні <i>*</i></label>
                  <input type="email" placeholder="Ваша ел.пошта" name="email" id="email" required></input>
                </div>
                               <div className="form-group">
                  <label for="text">Назва стартапу <i>*</i></label>
                  <input type="text" name="text" id="text" required></input>
                </div>
                
         
        
        
                
                <div className="form-group">
                  <label for="text">Опис стартапу <i>*</i></label>
                  <input type="text" name="text" id="text_d" required></input>
                </div>
                <button className="btn">Завантажити фото</button>
          

                <button type="submit" className="btn">Відправити </button>
                <p className="bottom-text"><small>Натискаючи кнопку відправити ви погоджуєтесь з нашими умовами <a className="a_add" href="#">Terms & Conditions</a> та <a className="a_add" href="#">Privacy Policy</a>.</small></p>
              </form>
            </div>
          </div> 
          
          
        
           </body>
         
        
            
           
          );
          



    return (
<>

<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
        
      </Modal>
        <button onClick={openModal} style={useStyles.button}>
            {props.children}
        </button>

</>


        




    );
};

ModalButton.propTypes = {
    children: node,
    background: string,
    foreground: string,
}

export default ModalButton;
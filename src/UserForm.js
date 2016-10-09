import React from 'react';

var UserForm = (props) => {
  var {onFormChange} = props;
  var {submitNewUser} = props;
  var {newUser} = props;
  
  return (
    <div className='UserForm'>
      <input type='text' className={newUser.errors.name&&'UserForm-error'} placeholder='Name (required)' value={newUser.name}
        onChange={(e)=>{
          //onFormChange(Object.assign({}, newUser, {name:e.target.value}))}
          onFormChange({...newUser, name:e.target.value});
        }}
      />
      <input type='text' className={newUser.errors.email&&'UserForm-error'} placeholder='Email' value={newUser.email} 
        onChange={(e)=>onFormChange({...newUser, email:e.target.value})}
      />
      <textarea  placeholder='Description' value={newUser.description} 
        onChange={(e)=>onFormChange({...newUser, description:e.target.value})}
      />
      <button 
        onClick={
          ()=>{
            // e.preventDefault();
            //should be fine as long as we don't mutate props
            submitNewUser(newUser);
            //submitNewUser(Object.assign({}, newUser)); 
          }
        }
      > 
        Add User 
      </button>
    </div>
  )
}

export default UserForm;
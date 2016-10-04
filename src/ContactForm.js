var ContactForm = (props) => {
  var {onFormChange} = props;
  var {submitNewContact} = props;
  var {newContact} = props;

  console.log('contactform rerendered');
  
  return (
    <form className='ContactForm'>
      <input type='text' className={newContact.errors.name&&'ContactForm-error'} placeholder='Name (required)' value={newContact.name}
        onChange={(e)=>{
          //onFormChange(Object.assign({}, newContact, {name:e.target.value}))}
          onFormChange({...newContact, name:e.target.value});
        }}
      />
      <input type='email' className={newContact.errors.email&&'ContactForm-error'} placeholder='Email' value={newContact.email} 
        onChange={(e)=>onFormChange({...newContact, email:e.target.value})}
      />
      <textarea  placeholder='Description' value={newContact.description} 
        onChange={(e)=>onFormChange({...newContact, description:e.target.value})}
      />
      <button type='submit' 
        onClick={
          (e)=>{
            e.preventDefault();
            //should be fine as long as we don't mutate props
            submitNewContact(newContact);
            //submitNewContact(Object.assign({}, newContact)); 
          }
        }
      > 
        Add Contact 
      </button>
    </form>
  )
}
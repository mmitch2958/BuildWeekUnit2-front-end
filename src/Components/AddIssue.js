import React, { useState } from "react";


//Function to add inputed form data to final source 

function AddIssue() {
    
 
//Temp Issue Display Function 


const Issues = (props) => {
    return (
      <div className="issue-list">
        {props.issues.map((add) => (
          <div className="addIssue" key={add.id}>
            <h2>{add.title}</h2>
                <p>{add.body}</p>
                <p>{add.image}</p>
          </div>
        ))}
      </div>
    );
  };
  
//Add Issue Form 

const AddForm = (x) => {
  const [add, setAdd] = useState({
    id: 1,
    title: '',
      body: '',
    image: ''
  });

  const handleChanges = (e) => {
    console.log("What is target.value", e);
    setAdd({
      ...add,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    x.addNewIssue(add);
    setAdd({
      id: 1,
      title: '',
      body: '',
      image: ''
    });
  };
// INPUT FORM POINTS 
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter title"
        name="title"
        value={add.title}
        onChange={handleChanges}
      />

      <label htmlFor="body">Description Of Issue</label>
      <textarea
        id="body"
        placeholder="Enter Descripton of Issue"
        name="body"
        value={add.body}
        onChange={handleChanges}
          />
          
      <label htmlFor="image">Input Image URL</label>
      <textarea
        id="image"
        placeholder="input Image URL"
        name="image"
        value={add.image}
        onChange={handleChanges}
      />


      <button type="submit"> Add Issue </button>
    </form>
  );
    };

    const [issues, setIssues] = useState([
        {
            id: 1,
            title: 'New Issue to Add',
            body: 'These are my concerns',
            image: 'http://www.yourpicturetoadd.pic',

        }
    ]);

    const addNewIssue = (add) => {

        const newIssue = {
            
            id: 1,
            title: add.title,
            body: add.body,
            image: add.image
            
        };
        setIssues([...issues, newIssue]);
    };

    return (
        <div>
            <AddForm addNewIssue={addNewIssue} />
            <Issues issues={issues} />

        </div>
    )

};


export default AddIssue;

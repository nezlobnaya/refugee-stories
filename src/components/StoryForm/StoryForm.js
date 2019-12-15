import React, { useState, useEffect } from 'react';
import api from '../../utils/api'
import '../../index.css'

const StoryForm = (props) => {
    console.log('StoryForm props', props)
    const [story, setStory] = useState({ 
      title: '', contents: '', pending:0 });


  const handleChange = event => setStory({...story, [event.target.name]: event.target.value});

  const handleSubmit = event => {
    event.preventDefault();
    api().put(`/stories/${story.id}`, story)
          .then(res => {
            props.updateStories(res.data);
            props.history.push("/stories");
          })
          .catch(err => console.log(err.response));
      };
  

  return (
    <form onSubmit={handleSubmit}>
      <input name='title'
             value={story.title}
             onChange={handleChange} />
      <label>
          <textarea  value={story.contents} onChange={handleChange} />
      </label> 
      <button type='submit'>Update Story</button>
    </form>
  );
};

export default StoryForm;
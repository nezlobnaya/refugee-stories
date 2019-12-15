import React, { useState, useEffect } from 'react';
import { fetchStoriesData } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

import api from '../../utils/api'

const StoriesList = () => {
     // console.log('List props', props)
     const state = useSelector(state => state)
     const dispatch = useDispatch()
     const [editing, setEditing] = useState(false)
     const [storyToEdit, setStoryToEdit] = useState({
          title: '',
          contents:''
     })

     // const fetchStories = () => {    
     //      api()
     //      .get('/stories/')
     //      .then(res => {
     //        console.log('List of stories', res)
     //        updateStories(res.data.filter(item => item.pending === 0))
     //      })
     //      .catch(error => {
     //        console.log(error.message)
     //      })
     // }
     
          useEffect(() => {
               dispatch(fetchStoriesData())
               // eslint-disable-next-line
          },[])

      

     const editStory = story => {
          setEditing(true)
          setStoryToEdit(story)
     }

     const saveEdit = e => {
          e.preventDefault()
          api()
          .put(`/stories/${storyToEdit.id}`, storyToEdit)
          .then(res => {
               console.log('Put req', res)
               setEditing(false)
               dispatch(fetchStoriesData(state.stories.map(item => item.id === res.data.id? res.data:item)))
          })
          .catch(err => console.log('Put err', err.response))
     }

     const deleteStory = story => {
          api()
          .delete(`stories/${story.id}`)
          .then(res => {
               console.log('Del res', res)
               dispatch(fetchStoriesData())
               setEditing(false)
               // updateStories(stories.filter(story => story.id !== res.data))
               // props.history.push('/stories')
          })
          .catch(err => console.log(err.response))
     }

    return ( 
     <div>
          <h2>Stories</h2>
               <div className='list'>
                    {state.stories.map(i => (
                         <div className='story' key={i.id}>
                              <h2>{i.title}</h2> 
                              <h4>Username:{i.name}</h4>
                              <h4>Email:{i.email}</h4>
                              <p>{i.contents} </p>
                              <button onClick={() => editStory(i)}>Edit</button>
                              <span>
                              <button onClick={e => {
                                   deleteStory(i)}}>X</button>
                              </span>
                         </div>
                    ))}
                    {editing && (
                         <form onSubmit={saveEdit}>
                          {/* <legend>Edit story</legend> */}
                         <input name='title'
                               value={storyToEdit.title}
                               onChange={e => setStoryToEdit({...storyToEdit, title: e.target.value})} />
                              <label>
                                   <textarea  value={storyToEdit.contents} onChange={e => setStoryToEdit({
                                        ...storyToEdit, contents: e.target.value
                                   })} />
                              </label> 
                              <button type='submit'>Update Story</button>
                              <button onClick={() => setEditing(false)}>cancel</button>
                         </form>
                    )}
                    
               </div>
     </div>
     );
}
 
export default StoriesList;
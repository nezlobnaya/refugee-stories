import React, { useState, useEffect } from 'react';
import { fetchStoriesPendingData } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

import api from '../../utils/api'



const PendingStories = () => {
    //  console.log('PendingList props', props)
    const state = useSelector(state => state)
     const dispatch = useDispatch()
     // const [approving, setApproving] = useState(false)
     const [storyToApprove, setStoryToApprove] = useState({
        pending: 0})

          useEffect(() => {
               dispatch(fetchStoriesPendingData())
               // eslint-disable-next-line
          },[])


     const saveApprove = story => {
          // e.preventDefault()
          setStoryToApprove({...story, pending: 0})
          console.log('StoryToApprove', storyToApprove)
          
          api()
          .put(`/stories/${story.id}`, storyToApprove)
          .then(res => {
               console.log('Put Approve req', res)
               dispatch(fetchStoriesPendingData((state.stories.map(item => item.id === res.data.id? res.data:item))))
          })
          .catch(err => console.log('Put Approve err', err.response))
     }

     const deleteStory = story => {
          api()
          .delete(`stories/${story.id}`)
          .then(res => {
               console.log('Del res', res)
              dispatch(fetchStoriesPendingData(state.stories.filter(story => story.id !== res.data)))
          })
          .catch(err => console.log(err.response))
     }
     

    return ( 
     <div>
          <h2>Pending Stories</h2>
               <div className='list'>
                    {state.stories.map(i => (
                         <div className='story' key={i.id}>
                              <h2>{i.title}</h2> 
                              <h4>Username:{i.name}</h4>
                              <h4>Email:{i.email}</h4>
                              <p>{i.contents} </p>
                              <span>
                              <button onClick={() => {saveApprove(i)}}>Approve</button>
                              </span>
                              <span>
                              <button onClick={e => {
                                   deleteStory(i)}}>X</button>
                              </span>
                         </div>
                    ))}
                    
               </div>
     </div>
     );
}
 
export default PendingStories;

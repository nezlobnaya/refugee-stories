import React from 'react';
import api from '../../utils/api'
import StoryForm from '../StoryForm/StoryForm'
import { Route, Link } from 'react-router-dom';

const Story = (props) => {
    console.log('Story props',props)

    const story = props.stories.find(
        story => `${story.id}` === props.match.params.id
    )
        console.log('Story', story)

        if (!props.stories.length || !story) {
            return <h2>Loading story data...</h2>;
          }
    const handleDelete= e => {
        e.preventDefault()
             api()
             .delete(`/stories/${story.id}`)
                 .then (res => {
                    console.log(res.data)
                    props.updateStories(res.data)
                    props.history.push('/stories')
                 } )
                 .catch(err => console.log('Error: ', err))        
           }

    return ( 
        <div className='story'>
             <h2>{story.title}</h2>
            <h2>{story.contents}</h2>
            <button  onClick={ handleDelete}>X</button>
            <button  onClick={() => props.history.push(`/stories/${story.id}`)}>Edit</button>
            <Route exact path='/stories/:id' render={props => (
        <StoryForm {...props} />
      )} />
           
        </div>
     );
}
 
export default Story;
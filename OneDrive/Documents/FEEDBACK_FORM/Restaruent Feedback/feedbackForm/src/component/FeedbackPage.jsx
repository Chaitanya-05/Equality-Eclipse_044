import React, { useState } from 'react'
import axios from 'axios';


 const FeedbackPage = () => {
    const [name,setName] = useState('');
    const [email,setEmail]= useState('');
    const [location,setLocation] = useState('');
    const [visitedDate, setVisitDate] = useState('');
    const [age,setAge] = useState('');
    const [comments,setComments]= useState('');

    const handleSubmit=(e)=>{
      e.preventDefault();
      
      const feedbackData={
        name,
        email,
        location,
        visitedDate,
        age,
        comments,
      };

      axios.post('http://localhost:5000/feedback',feedbackData).then(response=>{
        alert('Thank you for your feedback!')
        //Reset Form
        setName('');
        setEmail('');
        setLocation('');
        setVisitDate('');
        setAge('');
        setComments('');
      })
      .catch(error=>{
        console.error('There was an error submitting your feedback!', error);
      });

    }

  return (
    <div style={{border:'2px solid black', textAlign:'center', backgroundColor:'#ddf4ee',  fontFamily:'sans-serif', font:'message-box'}}>
        <h2>Restaurant Feedback Form</h2>
        <p>Please help us improve our restaurant services by filling in our feedback form.Thank you</p>
        <form onSubmit={handleSubmit}>
          <div style={{margin:'10px'}}>
           <label>Name:</label>
            <input 
            type="text"
            placeholder='enter name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required />
            </div>

            <div style={{margin:'10px'}}>
           <label>Email:</label>
            <input 
            type="email"
            placeholder='enter email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            </div>


           <div style={{margin:'10px'}}>
            <label for="pet-select">Location:</label>
             <select value={location} onChange={(e)=>setLocation(e.target.value)} required>
               <option value="">Please choose an option</option>
               <option value="Delhi">Delhi</option>
               <option value="Mumbai">Mumbai</option>
               <option value="Bihar">Bihar</option>
               <option value="UP">UP</option>
               <option value="Kerala">Kerala</option>
             </select>
             </div>

             <div style={{margin:'10px'}}>
              <label>Day Visited:</label>
              <input type="datetime-local"  value={visitedDate} onChange={(e)=>setVisitDate(e.target.value)}
                required />
             </div>

             <div style={{margin:'10px'}}>
             <label >Age:</label>
             <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}
             min="10" max="100"  required />
             </div>

             <h3><label for="story"  style={{display:'block', margin:'3px'}}>Any comments, questions or suggestions?</label></h3>
             <textarea 
              rows="10" 
              cols="73" 
              value={comments}
              onChange={(e)=>setComments(e.target.value)}
              style={{margin:'5px'}}>
             </textarea>
             <div>
              <button type='submit' style={{margin:'10px'}}>Submit</button>
             
             </div>
        </form>
    </div>
  )
}

export default FeedbackPage;

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FeedbackList = () => {
    const [feedback,setFeedbacks] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/feedback')
        .then(res=>{
            setFeedbacks(res.data);
        })
        .catch(error=>{
            console.error("There was an error fetching the feedback!", error);
        });
    },[]);



  return (
    <div style={{ border: '2px solid black', textAlign: 'center', backgroundColor: '#f4f4f4', fontFamily: 'sans-serif', padding: '20px' }}>
            <h2>Customer Feedback</h2>
            {feedback.length === 0 ? (
                <p>No feedback yet.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Location</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Date Visited</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback.map((feedback, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{feedback.name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{feedback.email}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{feedback.location}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{feedback.visitedDate}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{feedback.age}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{feedback.comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
  )
}

export default FeedbackList;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ChatbotSection = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'Bot', text: 'Hi, how can I assist you today?' }
  ]);

  const farmingFAQs = {
    'rabi crops': [
      'Rabi crops are winter crops sown in cooler months and harvested in spring. Common examples include wheat and barley.',
    ],
    'kharif crops': [
      'Kharif crops are summer crops sown at the beginning of the monsoon season. Examples include rice and maize.',
    ],
    'plant tomatoes': [
      'The best time to plant tomatoes is after the last frost date in your region, typically in early spring.',
      'Ensure they get plenty of sunlight and water regularly for the best harvest.',
    ],
    'irrigation methods': [
      'Drip irrigation conserves water and delivers moisture directly to the roots.',
      'Sprinkler systems are also effective, especially for larger fields.',
    ],
    'grow potatoes': [
      'Potatoes grow best in cool weather. Plant them in well-drained soil and ensure they get full sun.',
      'Harvest when the plants start to turn yellow for the best yield.',
    ],
    'fertilizers for wheat': [
      'Nitrogen-rich fertilizers are essential, especially at key stages like tillering and heading.',
    ],
    'manage pests in rice': [
      'Store the grains in a cool and dry place and ensure timely application of insecticides.',
    ],
    'crop rotation': [
      'Crop rotation involves alternating the types of crops grown on a particular piece of land to improve soil health and reduce pest build-up.',
    ],
    'organic farming': [
      'Organic farming focuses on growing crops without synthetic fertilizers or pesticides.',
    ],
    'pesticides': [
      'Pesticides are chemicals used to control pests and diseases in crops. Pesticides are available at your nearest Farmer Supply Store',
    ],
  };

  const intents = {
    'rabi crops': ['rabi crops', 'tell me about rabi crops', 'what is rabi farming', 'rabi season'],
    'kharif crops': ['kharif crops', 'kharif farming', 'what is kharif farming', 'kharif season'],
    'plant tomatoes': ['how to plant tomatoes', 'planting tomatoes', 'grow tomatoes', 'tomato planting tips'],
    'irrigation methods': ['irrigation methods', 'ways to irrigate', 'best irrigation', 'water crops'],
    'grow potatoes': ['grow potatoes', 'how to plant potatoes', 'potato farming', 'potato planting tips'],
    'fertilizers for wheat': ['fertilizer for wheat', 'best fertilizer for wheat', 'wheat fertilizers'],
    'manage pests in rice': ['pests in rice', 'how to manage pests in rice', 'rice pest control'],
    'crop rotation': ['crop rotation', 'benefits of crop rotation', 'rotating crops'],
    'organic farming': ['organic farming', 'what is organic farming', 'grow crops organically'],
    'pesticides': ['pesticides', 'what are pesticides', 'using pesticides', 'crop pesticides'],
  };

  const handleSend = () => {
    if (!userMessage) return;

    setChatHistory([...chatHistory, { sender: 'User', text: userMessage }]);

    const lowerCaseMessage = userMessage.toLowerCase();
    let botMessage = "Sorry, I don't have information on that topic. Please ask something related to agriculture.";
    
    let found = false;

    // Iterate over the intents to find the matching intent
    for (const [intent, phrases] of Object.entries(intents)) {
      if (phrases.some(phrase => lowerCaseMessage.includes(phrase))) {
        botMessage = getRandomResponse(farmingFAQs[intent]);
        found = true;
        break;
      }
    }

    // If no matching intent is found, provide clarification or a generic message
    if (!found) {
      for (const [intent] of Object.entries(intents)) {
        if (lowerCaseMessage.includes(intent.split(' ')[0])) {
          botMessage = 'That’s a good question! Can you please specify a bit more about ' + intent + '?';
          found = true;
          break;
        }
      }
    }

    setChatHistory(prevHistory => [...prevHistory, { sender: 'Bot', text: botMessage }]);
    setUserMessage('');
  };

  const getRandomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(); 
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    chatBox: {
      height: '500px',
      overflowY: 'auto',
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    message: {
      padding: '10px',
      borderRadius: '10px',
      margin: '5px 0',
      maxWidth: '75%',
    },
    userMessage: {
      backgroundColor: '#d1e7dd',
      color: '#1b3a30',
      alignSelf: 'flex-end',
    },
    botMessage: {
      backgroundColor: '#e2e3e5',
      color: '#3c4043',
      alignSelf: 'flex-start',
    },
    inputContainer: {
      display: 'flex',
      gap: '10px',
    },
    input: {
      flexGrow: 1,
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div id="chatbot-section" style={styles.container}>
      <h1>Krushi-Bot</h1>
      <div style={styles.chatBox}>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(chat.sender === 'Bot' ? styles.botMessage : styles.userMessage),
            }}
          >
            <strong>{chat.sender}: </strong> {chat.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button
          onClick={handleSend}
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotSection;
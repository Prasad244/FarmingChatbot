const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());


const farmingFAQs = {
  'plant tomatoes': [
    'The best time to plant tomatoes is after the last frost date in your region, typically in early spring.',
    'Generally, planting tomatoes in late spring ensures a good harvest.',
  ],
  'irrigation methods': [
    'Drip irrigation is one of the best methods as it conserves water and delivers moisture directly to the roots.',
    'Sprinkler systems are also effective, especially for larger fields.',
  ],
  'grow potatoes': [
    'Potatoes grow best in cool weather. Plant them in well-drained soil and ensure they get full sun.',
    'Make sure to harvest when the plants start to turn yellow for the best yield.',
  ],
  'fertilizers for wheat': [
    'Nitrogen-rich fertilizers are best, especially at key stages like tillering and heading.',
    'Consider using organic fertilizers for a more sustainable approach.',
  ],
  'manage pests in rice': [
    'Use integrated pest management (IPM), including biological control and timely application of insecticides.',
    'Consider resistant varieties to prevent pest issues.',
  ],
  'plant corn': [
    'Corn should be planted in late spring when soil temperatures reach at least 60°F (15°C).',
    'Ensure the soil is well-prepared and free from weeds for optimal growth.',
  ],
  'increase yield of beans': [
    'Ensure proper spacing and regular watering to enhance bean yield.',
    'Timely pest control is also crucial to protect your crops.',
  ],
  'soil for carrots': [
    'Carrots thrive in loose, sandy loam soil with a pH between 6.0 and 6.8.',
    'Make sure the soil is free from rocks for better root development.',
  ],
  'rabi crops': [
    'Rabi crops are winter crops sown in cooler months and harvested in spring. Common examples include wheat and barley.',
  ],
  'kharif crops': [
    'Kharif crops are summer crops sown at the beginning of the monsoon season. Examples include rice and maize.',
    'These crops benefit from the heavy rainfall during the monsoon.',
  ],
};


const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
};


app.post('/chat', (req, res) => {
  const { message } = req.body;

  console.log('Received message:', message); // Debug log

  if (!message) {
    return res.status(400).json({ botMessage: 'No message received.' });
  }

  const lowerCaseMessage = message.toLowerCase();
  let botMessage = 'Sorry, I don\'t have information on that topic. Please ask something related to agriculture.';

  
  let found = false;
  for (const [question, responses] of Object.entries(farmingFAQs)) {
    if (lowerCaseMessage.includes(question)) {
      botMessage = getRandomResponse(responses);
      found = true;
      break;
    }
  }

  
  if (!found) {
    for (const question of Object.keys(farmingFAQs)) {
      if (lowerCaseMessage.includes(question.split(' ')[0])) { // Check for the first word of the question
        botMessage = 'That’s a good question! Can you please specify a bit more about ' + question + '?';
        break;
      }
    }
  }

  console.log('Bot message:', botMessage); // Debug log
  res.json({ botMessage });
});


app.listen(port, () => {
  console.log(`Chatbot backend running on http://localhost:${port}`);
});


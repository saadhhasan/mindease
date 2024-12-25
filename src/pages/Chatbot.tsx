import { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help you with your mental health questions. How are you feeling today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const getMentalHealthResponse = (question: string): string => {
    const responses: { [key: string]: string } = {
      anxiety: "It's normal to feel anxious sometimes. Try deep breathing exercises: breathe in for 4 counts, hold for 4, and exhale for 4. Also consider talking to a mental health professional.",
      depression: "I hear you're feeling down. Remember that you're not alone. Consider reaching out to a trusted friend or family member, and don't hesitate to seek professional help.",
      stress: "To manage stress, try the 5-5-5 method: name 5 things you can see, 5 things you can hear, and 5 things you can feel. This can help ground you in the present moment.",
      sleep: "Good sleep is crucial for mental health. Try establishing a regular sleep schedule, avoiding screens before bedtime, and creating a relaxing bedtime routine.",
      default: "I understand you're going through something difficult. While I can offer general advice, it's important to speak with a mental health professional for personalized guidance."
    };

    const lowercaseQuestion = question.toLowerCase();
    for (const keyword in responses) {
      if (lowercaseQuestion.includes(keyword)) {
        return responses[keyword];
      }
    }
    return responses.default;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    const botResponse: Message = {
      text: getMentalHealthResponse(input),
      isUser: false
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-indigo-600 text-white">
          <h2 className="text-xl font-bold">MindEase Chatbot</h2>
          <p className="text-sm">Ask me anything about mental health</p>
        </div>
        
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md p-4 rounded-lg ${
                  message.isUser
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
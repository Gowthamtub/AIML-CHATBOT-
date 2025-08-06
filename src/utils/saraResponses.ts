// Sara's response system - provides helpful, clear answers
const responses = {
  greetings: [
    "Hello! I'm Sara, and I'm here to help you with any questions you have. What's on your mind today?",
    "Hi there! I'm Sara, your AI assistant. I'm ready to help you with information, advice, or just have a conversation. What would you like to know?",
    "Hey! Sara here. I love helping people find answers and solutions. What can I assist you with today?"
  ],
  
  help: [
    "I'm here to help! I can answer questions, provide information on various topics, help with problem-solving, give advice, or just chat. What would you like to explore?",
    "I can assist you with many things: answering questions, explaining concepts, helping with decisions, providing information, or having a friendly conversation. What interests you?",
    "Great question! I can help with information research, explain complex topics in simple terms, offer different perspectives on problems, or just be here to listen and chat. What's on your mind?"
  ],
  
  technology: [
    "Technology is fascinating! I can help explain how things work, discuss the latest trends, or help you solve tech-related problems. What specific area interests you?",
    "I love talking about technology! Whether it's smartphones, computers, AI, or emerging tech, I can break down complex concepts into easy-to-understand explanations. What would you like to know?",
    "Tech questions are my favorite! I can help you understand how devices work, compare different options, troubleshoot issues, or discuss future innovations. What's your question?"
  ],
  
  learning: [
    "Learning is wonderful! I can help explain topics step-by-step, provide examples, suggest study methods, or help you understand complex subjects. What would you like to learn about?",
    "I'm passionate about helping people learn! I can break down difficult concepts, provide clear explanations, and help you understand things at your own pace. What subject interests you?",
    "Education is so important! I can assist with understanding new topics, explaining concepts in simple terms, or helping you develop learning strategies. What would you like to explore?"
  ],
  
  general: [
    "That's an interesting topic! Let me help you understand it better. Could you be more specific about what you'd like to know?",
    "I'd be happy to help you with that! Could you provide a bit more detail so I can give you the most useful information?",
    "Great question! I want to make sure I give you the best answer possible. Could you tell me more about what specifically interests you about this topic?"
  ],
  
  weather: [
    "I'd love to help you with weather information! For the most accurate and up-to-date weather data, I recommend checking:\n\n🌤️ [**Weather.com**](https://weather.com) - Comprehensive forecasts and radar\n🌡️ [**AccuWeather**](https://accuweather.com) - Detailed hourly and daily forecasts\n📱 **Your phone's built-in weather app** - Usually very reliable\n🌍 **Local meteorological services** - Most accurate for your region\n\nWhat specific weather information are you looking for? I can help you understand weather patterns, seasonal changes, or suggest the best apps for your needs!",
    "Weather planning is important! While I can't access real-time weather data right now, I can guide you to the best resources:\n\n• [**Weather.gov**](https://weather.gov) (US) - Official National Weather Service\n• [**BBC Weather**](https://bbc.com/weather) - Great for international forecasts\n• [**Weather Underground**](https://wunderground.com) - Hyperlocal conditions\n• [**Windy.com**](https://windy.com) - Beautiful interactive weather maps\n\nI can also help you understand weather terminology, seasonal patterns, or how to read weather forecasts. What would you like to know?"
  ],
  
  news: [
    "Staying informed about world news is important! For the latest breaking news and global updates, I recommend these trusted sources:\n\n📰 [**BBC News**](https://bbc.com/news) - Comprehensive international coverage\n🌍 [**Reuters**](https://reuters.com) - Reliable global news agency\n📺 [**Associated Press (AP)**](https://apnews.com) - Breaking news and analysis\n🗞️ [**NPR**](https://npr.org) - In-depth reporting and analysis\n📱 [**Google News**](https://news.google.com) - Aggregated news from multiple sources\n\nI can help you understand current events, explain complex global issues, or discuss how to identify reliable news sources. What topics interest you most?",
    "World news can be overwhelming! Here are some excellent sources for staying updated:\n\n• [**AllSides**](https://allsides.com) - Shows news from different political perspectives\n• [**Ground News**](https://ground.news) - Compares how different outlets cover stories\n• [**BBC World Service**](https://bbc.com/ws) - International focus\n• [**The Guardian**](https://theguardian.com) - Global perspective\n• [**Wall Street Journal**](https://wsj.com) - Business and international news\n\nI'm happy to help you understand complex global issues, explain economic trends, or discuss how to critically evaluate news sources. What would you like to explore?"
  ]
};

const quickResponses = {
  "hello": "greetings",
  "hi": "greetings",
  "hey": "greetings",
  "good morning": "greetings",
  "good afternoon": "greetings",
  "good evening": "greetings",
  "help": "help",
  "what can you do": "help",
  "how can you help": "help",
  "technology": "technology",
  "tech": "technology",
  "computer": "technology",
  "smartphone": "technology",
  "ai": "technology",
  "learn": "learning",
  "learning": "learning",
  "study": "learning",
  "education": "learning",
  "teach": "learning",
  "weather": "weather",
  "temperature": "weather",
  "forecast": "weather",
  "rain": "weather",
  "sunny": "weather",
  "cloudy": "weather",
  "storm": "weather",
  "news": "news",
  "breaking news": "news",
  "headlines": "news",
  "current events": "news",
  "world news": "news",
  "global news": "news"
};

// Enhanced weather detection function
const detectWeatherQuery = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  
  // Location-based weather queries
  const locationPatterns = [
    /weather in ([a-zA-Z\s]+)/,
    /temperature in ([a-zA-Z\s]+)/,
    /forecast for ([a-zA-Z\s]+)/,
    /how.*weather.*([a-zA-Z\s]+)/,
    /what.*weather.*([a-zA-Z\s]+)/
  ];
  
  for (const pattern of locationPatterns) {
    const match = lowerMessage.match(pattern);
    if (match && match[1]) {
      const location = match[1].trim();
      return `I'd love to help you check the weather for ${location}! For the most accurate and current weather information, I recommend:\n\n🌤️ **Weather.com** - Search for "${location}" for detailed forecasts\n📱 **Google** - Simply search "weather ${location}"\n🌡️ **AccuWeather** - Great for hourly and extended forecasts\n📍 **Local weather apps** - Often most accurate for your specific area\n\nWould you like me to explain how to read weather forecasts, or help you understand any weather terminology?`;
      return `I'd love to help you check the weather for ${location}! For the most accurate and current weather information, I recommend:\n\n🌤️ [**Weather.com**](https://weather.com) - Search for "${location}" for detailed forecasts\n📱 [**Google**](https://google.com) - Simply search "weather ${location}"\n🌡️ [**AccuWeather**](https://accuweather.com) - Great for hourly and extended forecasts\n📍 **Local weather apps** - Often most accurate for your specific area\n\nWould you like me to explain how to read weather forecasts, or help you understand any weather terminology?`;
    }
  }
  
  // General weather queries
  const weatherKeywords = ['weather', 'temperature', 'forecast', 'rain', 'sunny', 'cloudy', 'storm', 'hot', 'cold', 'humid'];
  if (weatherKeywords.some(keyword => lowerMessage.includes(keyword))) {
    const responses = [
      "I can help you find reliable weather information! For current conditions and forecasts, try:\n\n🌤️ [**Weather.com**](https://weather.com) or [**AccuWeather**](https://accuweather.com) for detailed forecasts\n📱 **Your phone's weather app** for quick updates\n🌍 [**Weather.gov**](https://weather.gov) (US) for official forecasts\n📡 [**Windy.com**](https://windy.com) for interactive weather maps\n\nWhat specific weather information are you looking for?",
      "Weather planning is smart! While I can't access live weather data, I can point you to the best sources:\n\n• **Local meteorological services** - Most accurate for your area\n• **Weather apps** with location services enabled\n• [**Weather.com**](https://weather.com) or [**BBC Weather**](https://bbc.com/weather) for reliable forecasts\n• **Weather radar apps** for precipitation tracking\n\nI can also help explain weather patterns or forecast terminology!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  return null;
};

// Enhanced news detection function
const detectNewsQuery = (message: string): string | null => {
  const lowerMessage = message.toLowerCase();
  
  // Specific news topic queries
  const newsTopics = {
    'politics': 'political news',
    'economy': 'economic news',
    'business': 'business news',
    'sports': 'sports news',
    'technology': 'tech news',
    'science': 'science news',
    'health': 'health news',
    'entertainment': 'entertainment news'
  };
  
  for (const [topic, description] of Object.entries(newsTopics)) {
    if (lowerMessage.includes(topic) && (lowerMessage.includes('news') || lowerMessage.includes('update'))) {
      return `For the latest ${description}, I recommend these trusted sources:\n\n📰 [**Reuters**](https://reuters.com) - Unbiased, factual reporting\n🌍 [**BBC News**](https://bbc.com/news) - Comprehensive global coverage\n📺 [**Associated Press**](https://apnews.com) - Breaking news updates\n📱 [**Google News**](https://news.google.com) - Aggregated ${description} from multiple sources\n\nI can help you understand complex topics, explain current events, or discuss how to evaluate news sources critically. What specific aspect interests you?`;
    }
  }
  
  // General news queries
  const newsKeywords = ['news', 'headlines', 'breaking', 'current events', 'updates', 'happening', 'latest'];
  if (newsKeywords.some(keyword => lowerMessage.includes(keyword))) {
    const responses = [
      "Stay informed with these reliable news sources:\n\n📰 [**BBC News**](https://bbc.com/news) - Trusted international coverage\n🌍 [**Reuters**](https://reuters.com) - Global news agency\n📺 [**NPR**](https://npr.org) - In-depth analysis\n📱 [**Associated Press**](https://apnews.com) - Breaking news\n🗞️ [**AllSides**](https://allsides.com) - Multiple perspectives on stories\n\nI can help you understand current events, explain complex issues, or discuss media literacy. What topics interest you most?",
      "For comprehensive world news coverage, try:\n\n• [**BBC World Service**](https://bbc.com/ws) - International focus\n• [**The Guardian**](https://theguardian.com) - Global perspective\n• [**Wall Street Journal**](https://wsj.com) - Business and international\n• [**Google News**](https://news.google.com) - Aggregated from multiple sources\n• [**Ground News**](https://ground.news) - Compare different outlets' coverage\n\nI'm here to help explain complex global issues or discuss how to identify reliable sources. What would you like to explore?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  return null;
};

export const generateSaraResponse = async (userMessage: string): Promise<string> => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for weather queries first
  const weatherResponse = detectWeatherQuery(userMessage);
  if (weatherResponse) {
    return weatherResponse;
  }
  
  // Check for news queries
  const newsResponse = detectNewsQuery(userMessage);
  if (newsResponse) {
    return newsResponse;
  }
  
  // Check for quick response patterns
  for (const [key, category] of Object.entries(quickResponses)) {
    if (lowerMessage.includes(key)) {
      const responseArray = responses[category as keyof typeof responses];
      return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
  }
  
  // Context-aware responses
  if (lowerMessage.includes('time') || lowerMessage.includes('date')) {
    const now = new Date();
    return `The current time is ${now.toLocaleTimeString()} and today's date is ${now.toLocaleDateString()}. Is there anything else you'd like to know?`;
  }
  
  if (lowerMessage.includes('recipe') || lowerMessage.includes('cooking')) {
    return "I'd love to help you with cooking! While I can't browse the internet for specific recipes right now, I can suggest looking at trusted cooking websites like [**AllRecipes**](https://allrecipes.com) or [**BBC Good Food**](https://bbcgoodfood.com). I can also help you understand cooking techniques, ingredient substitutions, or kitchen tips. What would you like to cook?";
  }
  
  if (lowerMessage.includes('travel') || lowerMessage.includes('trip')) {
    return "Travel planning is exciting! I can help you think through different aspects like budgeting, packing lists, or general travel tips. For specific destinations and bookings, I'd recommend checking travel websites like [**TripAdvisor**](https://tripadvisor.com) or official tourism sites. What kind of trip are you planning?";
  }
  
  if (lowerMessage.includes('health') || lowerMessage.includes('medical')) {
    return "For health-related questions, it's always best to consult with healthcare professionals or trusted medical resources like your doctor or official health organization websites. I can provide general wellness tips, but I can't give medical advice. Is there a general wellness topic I can help with instead?";
  }
  
  // Default thoughtful response
  const defaultResponses = [
    "That's a really interesting question! I want to give you the most helpful answer possible. Could you tell me a bit more about what you're looking for?",
    "I'd be happy to help you with that! To provide the best response, could you share a little more context about what you'd like to know?",
    "Great topic! I'm here to help you understand it better. What specific aspect would you like me to focus on?",
    "I appreciate you asking! To make sure I give you exactly what you need, could you elaborate on what you're most curious about?",
    "That's something I can definitely help with! What particular angle or detail would be most useful to you right now?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

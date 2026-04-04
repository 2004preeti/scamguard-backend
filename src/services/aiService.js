exports.analyzeWithAI = async (text) => {
  const sentiment = text.toLowerCase().includes('good')
    ? 'Positive'
    : 'Negative';

  return {
    sentiment,
    confidence: Math.floor(Math.random() * 30) + 70,
    summary: text.slice(0, 50) + '...',
  };
};

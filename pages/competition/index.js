import React, { useState, useEffect } from "react";

const CompetitionPage = () => {
  const [countdown, setCountdown] = useState(60); // 60 minutes countdown
  const [topic, setTopic] = useState(""); // Initial topic
  const [posts, setPosts] = useState([]); // Array of posts

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 60000); // Update countdown every minute (60,000 milliseconds)

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Update topic and generate new posts every hour (60 minutes)
    const topicTimer = setInterval(() => {
      const newTopic = generateNewTopic();
      setTopic(newTopic);
      const newPosts = generateNewPosts();
      setPosts(newPosts);
    }, 3600000); // Change topic every hour (3,600,000 milliseconds)

    return () => clearInterval(topicTimer); // Cleanup interval on component unmount
  }, []);

  const generateNewTopic = () => {
    // Implement your logic to generate a new topic here
    return "New Topic";
  };

  const generateNewPosts = () => {
    // Implement your logic to generate new posts here
    const newPosts = [];
    for (let i = 1; i <= 10; i++) {
      newPosts.push(`Post ${i}`);
    }
    return newPosts;
  };

  return (
    <div>
      <h1>Competition Page</h1>
      <div>
        <h2>Countdown: {countdown} minutes</h2>
        <h3>Topic: {topic}</h3>
      </div>
      <div>
        <h2>Rewards</h2>
        {/* Include reward details here */}
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
      <div>{/* Include other necessary details for the competition */}</div>
    </div>
  );
};

export default CompetitionPage;

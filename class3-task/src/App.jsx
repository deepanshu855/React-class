import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      username: "deepanshu",
      description:
        "Full-stack developer passionate about building SaaS products",
      likeCount: 120,
      postsCount: 15,
      viewsCount: 2300,
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      backgroundPic:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      username: "riya_dev",
      description: "Frontend enthusiast who loves UI/UX design",
      likeCount: 95,
      postsCount: 10,
      viewsCount: 1800,
      profilePic: "https://i.pinimg.com/736x/18/b7/4f/18b74f95f922675a4a35c8b9717dbf64.jpg",
      backgroundPic:
        "https://i.pinimg.com/736x/50/77/c9/5077c9aacda6ab232798da9e9302b7f1.jpg",
    },
    {
      username: "karan_codes",
      description: "Backend developer exploring Node.js and databases",
      likeCount: 150,
      postsCount: 20,
      viewsCount: 3200,
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      backgroundPic:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      username: "aman_tech",
      description: "Java and DSA learner building strong fundamentals",
      likeCount: 80,
      postsCount: 8,
      viewsCount: 1400,
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
      backgroundPic:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    },
    {
      username: "neha_ui",
      description: "Creative designer crafting modern web interfaces",
      likeCount: 200,
      postsCount: 25,
      viewsCount: 4100,
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
      backgroundPic:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
  ];

  return (
    <div className="h-screen w-screen bg-gray-600 p-8 flex justify-center items-center gap-2">
      {users.map(function(elem){
        return <Card username={elem.username} description={elem.description} like={elem.likeCount} post={elem.postsCount} views={elem.viewsCount} profilePic={elem.profilePic} backgroundPic={elem.backgroundPic} />
      })}
    </div>
  );
};

export default App;

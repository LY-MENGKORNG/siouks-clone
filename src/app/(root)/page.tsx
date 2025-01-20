import { Skeleton } from "@/components/ui/skeleton";
import PostCard from "@/components/commons/PostCard";
import dummyPic from "@/assets/dummy.avif";

export default function Home() {
  const originalPost = {
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      'Just finished a great book! Highly recommend "The Midnight Library" by Matt Haig. It\'s a beautiful exploration of the choices we make in life. #BookRecommendation',
    image: dummyPic,
    likes: 42,
    comments: 7,
    reposts: 3,
    timestamp: "2 hours ago",
  };

  const repostedPost = {
    ...originalPost,
    reposter: "Jane Smith",
    likes: 15,
    comments: 2,
    reposts: 1,
    timestamp: "30 minutes ago",
  };
  return (
    <div className="w-full h-full gap-2 grid">
      <PostCard {...repostedPost} />
      <PostCard {...originalPost} />
    </div>
  );
}

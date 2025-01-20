import Image from "next/image";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LikeButton from "@/components/commons/LikeButton";
import type { StaticImageData } from "next/image";

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string | StaticImageData;
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
  reposter?: string;
}

export default function PostCard({
  author,
  content,
  image,
  likes,
  comments,
  reposts,
  timestamp,
  reposter,
}: PostCardProps) {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader className="space-y-4">
        {reposter && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Repeat2 className="w-4 h-4 mr-2" />
            <span>{reposter} reposted</span>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-muted-foreground">{timestamp}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{content}</p>
        {image && (
          <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt="Post image"
              fill
              className="object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <LikeButton initialLikes={likes} />
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2"
        >
          <Repeat2 className="w-4 h-4" />
          <span>{reposts}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

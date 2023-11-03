import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Select,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  HStack,
} from "@chakra-ui/react";
import { CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
type Post = {
  title: string;
  membershipType: string;
  date: string;
  postType: string;
};

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const [isEdit, setEdit] = useState(false);
  const [membershipType, setMembershipType] = useState(post.membershipType);

  const saveChanges = () => {
    // Save changes here..
    setEdit(false);
  };

  const deletePost = () => {
    // Delete post here..
  };

  return (
    <Box p={4} border="1px" borderColor="gray.200" borderRadius="md" w="full">
      <Flex justifyContent="space-between" alignItems="center">
        <VStack align="start">
          <Text>{post.title}</Text>
          {!isEdit && (
            <HStack>
              <Text fontSize="sm" color="gray.500">
                {post.date}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {post.postType}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {membershipType}
              </Text>
            </HStack>
          )}
        </VStack>
        <IconButton
          aria-label="Edit Post"
          icon={isEdit ? <CloseIcon fontSize="16px" /> : <EditIcon />}
          onClick={() => setEdit(!isEdit)}
        />
      </Flex>
      {isEdit && (
        <VStack align="start" mt={2} spacing={4}>
          <Text>Which members can see this post?</Text>
          <Select
            placeholder="Membership Type"
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
          >
            <option value="free">Free</option>
            <option value="vip">VIP</option>
          </Select>
          <HStack w="100%" mt={2} justifyContent="space-between">
            <Button colorScheme="purple" onClick={saveChanges}>
              Save
            </Button>

            <Popover>
              <PopoverTrigger>
                <IconButton
                  aria-label="Delete Post"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  variant="outline"
                  ml={2}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>
                  Are you sure you want to delete this post?
                </PopoverBody>
                <PopoverFooter display="flex" justifyContent="flex-end">
                  <Button colorScheme="red" onClick={deletePost}>
                    Yes, Delete
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </HStack>
        </VStack>
      )}
    </Box>
  );
}

type ManagePostsProps = {
  posts: Post[];
};

export function ManagePosts({ posts }: ManagePostsProps) {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [postTypeFilter, setPostTypeFilter] = useState("");
  const [membershipTypeFilter, setMembershipTypeFilter] = useState("");

  const sortedPosts = [...posts].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

  const filteredPosts = sortedPosts.filter((post) => {
    return (
      (postTypeFilter !== "" ? post.postType === postTypeFilter : true) &&
      (membershipTypeFilter !== ""
        ? post.membershipType === membershipTypeFilter
        : true)
    );
  });

  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Manage Posts
      </Text>
      <Button onClick={() => setFiltersVisible(!filtersVisible)}>Filter</Button>
      {filtersVisible && (
        <>
          <Select
            placeholder="Filter by Post Type"
            value={postTypeFilter}
            onChange={(e) => setPostTypeFilter(e.target.value)}
          >
            <option value="image">Image Post</option>
            <option value="video">Video Post</option>
            <option value="audio">Audio Post</option>
            <option value="event">Event Post</option>
            <option value="text">Text Post</option>
          </Select>
          <Select
            placeholder="Filter by Membership Type"
            value={membershipTypeFilter}
            onChange={(e) => setMembershipTypeFilter(e.target.value)}
          >
            <option value="free">Free</option>
            <option value="vip">VIP</option>
          </Select>
        </>
      )}
      {filteredPosts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </VStack>
  );
}

const DUMMY_DATA: Post[] = [
  {
    title: "Post 1",
    membershipType: "vip",
    date: "2022-03-01",
    postType: "image",
  },
  {
    title: "Post 2",
    membershipType: "free",
    date: "2022-02-15",
    postType: "video",
  },
  {
    title: "Post 3",
    membershipType: "vip",
    date: "2022-02-05",
    postType: "event",
  },
  {
    title: "Post 4",
    membershipType: "free",
    date: "2022-01-29",
    postType: "audio",
  },
  {
    title: "Post 5",
    membershipType: "vip",
    date: "2022-03-05",
    postType: "text",
  },
  {
    title: "Post 6",
    membershipType: "free",
    date: "2022-01-15",
    postType: "image",
  },
];

export default function ExampleUsage() {
  return <ManagePosts posts={DUMMY_DATA} />;
}

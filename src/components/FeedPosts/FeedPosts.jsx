import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10}>
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
    </Container>
  )
}

export default FeedPosts;
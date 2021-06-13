import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'React JS VS Vue JS',
  description:
    "The primary difference lies in the methods used by Vue vs. React for rendering content onto the DOM.",
  image: 'https://www.valuecoders.com/blog/wp-content/uploads/2019/03/1_WRzDZndJCduHwqgOpWmbhQ.png',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Node Js API',
    date: 'Jun 10',
    description:
      'The Express framework, and MongoDB, focusing on the fundamental REST routes and basic database interaction. ',
    image: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15921/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png',
    imageText: 'Image Text',
  },
  {
    title: 'Kubernetes',
    date: 'May 11',
    description:
      'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.',
    image: 'https://analyticsindiamag.com/wp-content/uploads/2020/12/Kubernetes_AIM.jpg',
    imageText: 'Image Text',
  },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

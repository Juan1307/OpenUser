import { useState, useEffect } from 'react';

import { getUserId, getPostId, getCommentsPost, getPosts } from './../services/UsersSrv.js';

const useUserHook = (index) => {
  const [ user, setUser ] = useState({});

  useEffect( async () => {
    setUser([]);

    const userData = await getUserId(index);
      setUser(userData);
  },[index]);

  return [ user, setUser ];
};

const usePostHook = (sindex) => {
  const [ post, setPost ] = useState({});
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    setPost([]);
    setComments([]);
    (async () => {
      
      const postData = await getPostId(sindex);
      const commentsData = await getCommentsPost(sindex);
      
      setPost(postData);
      setComments(commentsData);

    })();

  },[sindex]);  

  return { post, comments };
};


const useRandomPostsHook = (limit) => {
  const [ posts, setPosts ] = useState([]);

  const createRandomArray = (data, {random, floor} = Math) => {
    const randomArray = [];

    for(let i = 0 ; limit > i; i++){
      const index = floor(random() * data.length);
      randomArray.push(data[index]);
    }

    return randomArray;
  };

  useEffect(() => {
    
    (async () => {
      const postsData = await getPosts();
      setPosts(() => createRandomArray(postsData));
    })();

  },[]);

  return posts;
};

export { useUserHook, usePostHook, useRandomPostsHook }
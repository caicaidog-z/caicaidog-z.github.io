var posts=["2025/03/23/java学习路线/","2025/10/19/面试经验/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
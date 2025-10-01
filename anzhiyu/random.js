var posts=["2025/03/23/java学习路线/","2025/03/23/中工交友系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
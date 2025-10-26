var posts=["2025/10/26/Interview/面试经验/","2025/03/23/backend/java学习路线/","2025/10/24/life/打卡01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
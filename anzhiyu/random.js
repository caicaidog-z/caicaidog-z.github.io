var posts=["2025/10/30/Interview/面试经验/","2025/10/24/life/打卡01/","2025/10/31/life/打卡02/","2025/03/23/backend/java学习路线/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
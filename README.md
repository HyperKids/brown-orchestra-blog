# Brown University Orchestra Blog
Welcome to the BUO's blog repository! We welcome contributions and typo fixes.
## How to contribute content
# 1. Write your post in Markdown
# 2. Add metadata to the top of your file
Make sure you have an author profile in `/authors` first. The meta export should have your name just as it appears in your author profile, eg IsaacKim for Isaac Kim.
```js
export const meta = {
  title: "Post Title",
  subtitle: "Post Subtitle",
  author: "YourName",
  topic: "Announcements/News/Press Release",
  date: "YYYY-MM-DD"
};
```
# 3. Appropriately name your file
Our convention is `YYYY-MM-DD-post-title`. Your post will be available at `/news/YYYY-MM-DD/post-title`.
# 4. Review your work
Make sure your work conforms to the (Brown University Editorial Style Guide)[https://www.brown.edu/university-identity/editorial-style-guide]. It's also good to review for grammatical errors.
# 5. Create a pull request
Contact one of our webmasters if you need help.
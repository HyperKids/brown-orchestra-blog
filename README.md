# Brown University Orchestra Blog
Welcome to the BUO's blog repository! We welcome contributions and typo fixes.
## How to contribute content
### 1. Write your post in Markdown
### 2. Add metadata to the top of your file
Make sure you have an author profile in `/authors` first. The meta export should have your name formatted as FirstLast, eg IsaacKim for Isaac Kim.
```
---
title: Your Post Title
subtitle: Your Post Subtitle
author: FirstLast
topic: Announcements
date: YYYY-MM-DD
thumbnail: https://example.com/image.png
---
**The title and date is required**. Everything else can be omitted, although you should do your best to fill everything in.
```
### 3. Appropriately name your file
Our convention is `YYYY-MM-DD-post-title`. Your post will be available at `/news/YYYY-MM-DD/post-title`.
### 4. Review your work
Make sure your work conforms to the [Brown University Editorial Style Guide](https://www.brown.edu/university-identity/editorial-style-guide). It's also good to review for grammatical errors.
### 5. Create a pull request
Contact one of our webmasters if you need help.
## Creating an Author Profile
If you don't have an author profile, creating one is easy. Create a file in `/authors` with the filename FirstLast.md (eg IsaacKim.md for Isaac Kim), then copy and paste this template and fill in the blanks.
```
---
name: First Last
email: your_email@brown.edu
browndirectory: your_directory_uuid
avatar: url_to_image
bio:
  short: Your short biography, usually a sentence or so.
  long: Your longer biography, usually two to three sentences.
---
```
### What is my Brown Directory UUID?
To find your Brown Directory UUID, go to the [Brown University Directory](https://directory.brown.edu) and search your name. Under your name, click on the permalink button, and copy the hyphenated string of numbers and letters. Replace `your_directory_uuid` above with this number. For example, a UUID could look like `2a9cde89-1107-49ea-b0d1-26a35657a1f9`.
### What if I don't want to add some of the information?
Just remove it from the file. If you don't want your email to be available, remove the email line. If you don't want a bio, remove the bio lines.
# 📝 How to Add a New Blog Post to SKAICONNECT

## Quick Guide - 3 Easy Steps!

### Step 1: Add Blog Card to Blog Listing Page

Open `blog.html` and find the `<div id="blogGrid">` section (around line 74).

**Add this code BEFORE the closing `</div>` of blogGrid:**

```html
<!-- Blog Post [NUMBER] -->
<article class="blog-article" data-category="YOUR_CATEGORY" data-title="Your Blog Title Here">
    <img src="YOUR_IMAGE_URL" alt="Blog Image" style="width: 100%; height: 200px; object-fit: cover;">
    <div style="padding: var(--spacing-md);">
        <div style="display: flex; gap: var(--spacing-sm); margin-bottom: var(--spacing-sm);">
            <span style="background: var(--primary-red); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">YOUR_CATEGORY</span>
            <span style="color: var(--text-muted); font-size: 0.875rem;"><i class="far fa-calendar"></i> April 30, 2024</span>
        </div>
        <h3 style="margin-bottom: var(--spacing-sm); color: var(--charcoal);">Your Blog Title Here</h3>
        <p style="color: var(--text-muted); margin-bottom: var(--spacing-md);">Short description of your blog post (2-3 sentences).</p>
        <a href="blog-post-YOUR_NUMBER.html" style="color: var(--primary-red); font-weight: 600; text-decoration: none;">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

---

### Step 2: Create Individual Blog Post Page

**Copy an existing blog post file:**
```
Copy: blog-post-1.html
Rename to: blog-post-10.html (or next number)
```

**Edit the new file and change:**

1. **Title** (line 6):
```html
<title>Your Blog Title | SKAICONNECT Blog</title>
```

2. **Category Tag** (around line 50):
```html
<span style="background: var(--primary-red); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">Your Category</span>
```

3. **Date** (around line 51):
```html
<span style="color: var(--text-muted); font-size: 0.95rem;"><i class="far fa-calendar"></i> April 30, 2024 | <i class="far fa-clock"></i> 5 min read</span>
```

4. **Main Heading** (around line 54):
```html
<h1 style="margin-bottom: var(--spacing-md);">Your Blog Title Here</h1>
```

5. **Featured Image** (around line 56):
```html
<img src="YOUR_IMAGE_URL" alt="Your Image Description" style="width: 100%; border-radius: 12px; margin-bottom: var(--spacing-lg);">
```

6. **Blog Content** (around line 58+):
Replace all the content with your blog article text.

---

### Step 3: Add Category to Filter (If New Category)

If you're adding a NEW category that doesn't exist yet:

Open `blog.html` and find the category filter section (around line 65).

**Add a new button:**
```html
<button class="filter-btn" onclick="filterByCategory('Your New Category')">Your New Category</button>
```

---

## 📋 Available Categories

Use one of these existing categories (or create a new one):
- `Cloud Migration`
- `AI & Automation`
- `Best Practices`
- `Analytics`
- `Security`

**Important:** The category name must match EXACTLY in:
1. `data-category="Category Name"` in blog.html
2. Category tag display text
3. Filter button text

---

## 🖼️ Where to Get Images

### Option 1: Unsplash (Free)
```
https://images.unsplash.com/photo-PHOTO_ID?w=1200&h=600&fit=crop
```

**Find images at:** https://unsplash.com
- Search for your topic
- Copy the photo ID from URL
- Use format above

### Option 2: Your Own Images
1. Put image in `skaiconnect/images/` folder
2. Use: `images/your-image.jpg`

---

## ✅ Complete Example - Adding Blog Post #10

### 1. In `blog.html` (inside blogGrid):

```html
<!-- Blog Post 10 -->
<article class="blog-article" data-category="AI & Automation" data-title="ChatGPT in Contact Centers: A Complete Guide">
    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop" alt="ChatGPT AI" style="width: 100%; height: 200px; object-fit: cover;">
    <div style="padding: var(--spacing-md);">
        <div style="display: flex; gap: var(--spacing-sm); margin-bottom: var(--spacing-sm);">
            <span style="background: var(--accent-gold); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem;">AI & Automation</span>
            <span style="color: var(--text-muted); font-size: 0.875rem;"><i class="far fa-calendar"></i> April 30, 2024</span>
        </div>
        <h3 style="margin-bottom: var(--spacing-sm); color: var(--charcoal);">ChatGPT in Contact Centers: A Complete Guide</h3>
        <p style="color: var(--text-muted); margin-bottom: var(--spacing-md);">Learn how to integrate ChatGPT into your contact center operations to improve customer service and agent productivity.</p>
        <a href="blog-post-10.html" style="color: var(--primary-red); font-weight: 600; text-decoration: none;">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

### 2. Create `blog-post-10.html`:

Copy `blog-post-1.html` → Rename to `blog-post-10.html`

Edit these parts:
- Title: "ChatGPT in Contact Centers: A Complete Guide"
- Category: "AI & Automation"
- Date: "April 30, 2024"
- Image: ChatGPT related image
- Content: Your article text

---

## 🎨 Category Colors

Use these colors for category tags:

**Red (Primary):**
```html
style="background: var(--primary-red); color: white; ..."
```
Use for: Cloud Migration, Best Practices, Security

**Gold (Accent):**
```html
style="background: var(--accent-gold); color: white; ..."
```
Use for: AI & Automation, Analytics, Customer Experience

---

## 📝 Blog Content Structure

Your blog post should include:

1. **Introduction** (2-3 paragraphs)
2. **Main Sections** with `<h2>` headings
3. **Bullet points** or numbered lists
4. **Images** (optional, but recommended)
5. **Call-to-action box** (optional)
6. **Conclusion** (1-2 paragraphs)

### Example Structure:

```html
<p>Introduction paragraph...</p>

<h2 style="color: var(--primary-red); margin-top: var(--spacing-lg); margin-bottom: var(--spacing-md);">Section 1 Title</h2>
<p>Content...</p>

<ul style="margin-bottom: var(--spacing-md); padding-left: 2rem;">
    <li style="margin-bottom: 0.5rem;">Point 1</li>
    <li style="margin-bottom: 0.5rem;">Point 2</li>
</ul>

<h2 style="color: var(--primary-red); margin-top: var(--spacing-lg); margin-bottom: var(--spacing-md);">Section 2 Title</h2>
<p>More content...</p>
```

---

## 🔍 Testing Your New Blog

After adding a new blog:

1. **Open blog.html** → See your new blog card
2. **Click the category filter** → Your blog should appear/hide correctly
3. **Search for keywords** → Your blog should be searchable
4. **Click "Read More"** → Opens your full blog post page
5. **Check mobile view** → Everything looks good on phone

---

## ⚠️ Common Mistakes to Avoid

1. ❌ **Category name doesn't match exactly**
   - `data-category="Cloud Migration"` 
   - But filter button says `"cloud migration"` (lowercase)
   - ✅ Must match EXACTLY (case-sensitive)

2. ❌ **Forgot to add blog card to blog.html**
   - Created blog-post-10.html but no card in listing
   - ✅ Always add both: card + full post page

3. ❌ **Wrong file name in link**
   - Card links to `blog-post-10.html`
   - But file is named `blog-post-new.html`
   - ✅ Names must match exactly

4. ❌ **Added blog outside `#blogGrid`**
   - Blog won't be filterable
   - ✅ Always add inside `<div id="blogGrid">`

---

## 🚀 Quick Checklist

Before publishing your new blog:

- [ ] Blog card added to `blog.html` inside `#blogGrid`
- [ ] `data-category` attribute set correctly
- [ ] `data-title` attribute matches blog title
- [ ] Category tag color chosen (red or gold)
- [ ] Date updated to current date
- [ ] Image URL added and working
- [ ] Link points to correct blog post file
- [ ] Individual blog post page created
- [ ] Blog post title updated
- [ ] Blog post content written
- [ ] Tested on blog listing page
- [ ] Tested category filtering
- [ ] Tested search functionality
- [ ] Checked on mobile device

---

## 💡 Pro Tips

1. **Keep titles under 60 characters** for better display
2. **Write 2-3 sentence descriptions** for blog cards
3. **Use high-quality images** (1200x600px recommended)
4. **Add 5-10 minute read time** to blog posts
5. **Include 3-5 main sections** in each article
6. **Add internal links** to your services pages
7. **Update dates** to keep content fresh
8. **Use consistent formatting** across all posts

---

## 📞 Need Help?

If you get stuck:
1. Copy an existing blog post that's similar
2. Change only the content, keep the structure
3. Test after each change
4. Check browser console for errors (F12)

---

**That's it! You're ready to add unlimited blog posts!** 🎉

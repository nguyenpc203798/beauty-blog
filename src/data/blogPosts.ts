export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

// export const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "The Ultimate Guide to Korean Skincare Routine",
//     excerpt: "Discover the secrets of the famous 10-step Korean skincare routine and how it can transform your skin.",
//     content: `
//       <h2>Understanding K-Beauty Philosophy</h2>
//       <p>Korean skincare emphasizes prevention and protection rather than treatment. The multi-step routine ensures each product serves a specific purpose, layering from lightest to heaviest texture.</p>
      
//       <h2>The 10 Essential Steps</h2>
//       <p>1. <strong>Oil-based cleanser:</strong> Removes makeup and sunscreen</p>
//       <p>2. <strong>Water-based cleanser:</strong> Deep cleans pores</p>
//       <p>3. <strong>Exfoliator:</strong> Removes dead skin cells (2-3 times weekly)</p>
//       <p>4. <strong>Toner:</strong> Balances pH and preps skin</p>
//       <p>5. <strong>Essence:</strong> Hydrates and boosts cell turnover</p>
//       <p>6. <strong>Serum:</strong> Targets specific concerns</p>
//       <p>7. <strong>Sheet mask:</strong> Intensive treatment (2-3 times weekly)</p>
//       <p>8. <strong>Eye cream:</strong> Addresses delicate under-eye area</p>
//       <p>9. <strong>Moisturizer:</strong> Locks in all previous layers</p>
//       <p>10. <strong>Sunscreen:</strong> Daily protection (morning only)</p>
      
//       <h2>Getting Started</h2>
//       <p>Don't feel overwhelmed! Start with the basics: double cleanse, toner, moisturizer, and sunscreen. Gradually add steps as your skin adjusts.</p>
//     `,
//     author: "Sarah Kim",
//     date: "2024-10-15",
//     category: "Skincare",
//     tags: ["Korean Beauty", "Skincare Routine", "K-Beauty"],
//     image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
//     readTime: "5 min read"
//   },
//   {
//     id: 2,
//     title: "Top 5 Natural Makeup Looks for Spring",
//     excerpt: "Embrace the season with fresh, dewy makeup looks that enhance your natural beauty.",
//     content: `
//       <h2>Spring Makeup Trends</h2>
//       <p>Spring is all about celebrating natural beauty with a fresh, luminous glow. Here are five stunning looks to try this season.</p>
      
//       <h2>1. Dewy Fresh Face</h2>
//       <p>Focus on glowing skin with minimal coverage. Use a luminous primer, tinted moisturizer, and cream blush for a healthy flush.</p>
      
//       <h2>2. Soft Pink Everything</h2>
//       <p>Monochromatic pink tones on eyes, cheeks, and lips create a cohesive, romantic look perfect for spring.</p>
      
//       <h2>3. Sun-Kissed Glow</h2>
//       <p>Warm bronzer and peachy tones give you that just-back-from-vacation radiance without the sun damage.</p>
      
//       <h2>4. Fresh-Faced with a Pop</h2>
//       <p>Keep skin natural but add a bright coral or pink lip for a fun, youthful vibe.</p>
      
//       <h2>5. Glossy Lids</h2>
//       <p>Skip heavy eyeshadow and opt for glossy lids with just a coat of mascara for an effortlessly chic look.</p>
//     `,
//     author: "Emma Rodriguez",
//     date: "2024-10-12",
//     category: "Makeup",
//     tags: ["Makeup Tutorial", "Spring Beauty", "Natural Makeup"],
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
//     readTime: "4 min read"
//   },
//   {
//     id: 3,
//     title: "Understanding Your Skin Type: A Complete Guide",
//     excerpt: "Learn how to identify your skin type and choose the right products for your unique needs.",
//     content: `
//       <h2>Why Skin Type Matters</h2>
//       <p>Understanding your skin type is the foundation of an effective skincare routine. Using products suited to your skin prevents issues and maximizes results.</p>
      
//       <h2>The Five Main Skin Types</h2>
      
//       <h3>Normal Skin</h3>
//       <p>Balanced, not too oily or dry. Pores are barely visible, and texture is smooth. Lucky you!</p>
      
//       <h3>Dry Skin</h3>
//       <p>Feels tight, especially after cleansing. May have flaky patches and fine lines are more visible.</p>
      
//       <h3>Oily Skin</h3>
//       <p>Produces excess sebum, leading to shine and enlarged pores. More prone to breakouts.</p>
      
//       <h3>Combination Skin</h3>
//       <p>Oily T-zone (forehead, nose, chin) with normal to dry cheeks. The most common skin type.</p>
      
//       <h3>Sensitive Skin</h3>
//       <p>Easily irritated, prone to redness and reactions. Requires gentle, fragrance-free products.</p>
      
//       <h2>Simple Test at Home</h2>
//       <p>Cleanse your face and wait 30 minutes without applying any products. Observe how your skin feels and looks to determine your type.</p>
//     `,
//     author: "Dr. Jennifer Lee",
//     date: "2024-10-10",
//     category: "Skincare",
//     tags: ["Skin Type", "Skincare Basics", "Beauty Education"],
//     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
//     readTime: "6 min read"
//   },
//   {
//     id: 4,
//     title: "Best Cruelty-Free Makeup Brands of 2024",
//     excerpt: "Discover ethical beauty brands that never test on animals and create amazing products.",
//     content: `
//       <h2>The Rise of Cruelty-Free Beauty</h2>
//       <p>More consumers are demanding ethical practices from beauty brands. Cruelty-free makeup means no animal testing at any stage of production.</p>
      
//       <h2>Top Cruelty-Free Brands</h2>
      
//       <h3>1. Rare Beauty</h3>
//       <p>Selena Gomez's brand offers inclusive shades and innovative formulas. Their liquid blush is a cult favorite.</p>
      
//       <h3>2. Milk Makeup</h3>
//       <p>Clean, vegan, and cruelty-free. Known for their stick formulas that make application effortless.</p>
      
//       <h3>3. Elf Cosmetics</h3>
//       <p>Budget-friendly without compromising quality. 100% vegan and cruelty-free across all products.</p>
      
//       <h3>4. Tower 28</h3>
//       <p>Clean beauty brand specifically formulated for sensitive skin. All products are non-toxic and safe.</p>
      
//       <h3>5. Fenty Beauty</h3>
//       <p>Revolutionary inclusive shade ranges and high-performance formulas. Rihanna's brand set new industry standards.</p>
      
//       <h2>What to Look For</h2>
//       <p>Check for Leaping Bunny or PETA certification. Remember: cruelty-free doesn't always mean vegan, so read labels carefully.</p>
//     `,
//     author: "Maya Patel",
//     date: "2024-10-08",
//     category: "Product Reviews",
//     tags: ["Cruelty-Free", "Ethical Beauty", "Makeup Brands"],
//     image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=600&fit=crop",
//     readTime: "5 min read"
//   },
//   {
//     id: 5,
//     title: "Night Skincare Routine: What You Need to Know",
//     excerpt: "Optimize your evening routine to wake up with glowing, refreshed skin every morning.",
//     content: `
//       <h2>Why Night Routines Matter</h2>
//       <p>Your skin repairs and regenerates while you sleep. A proper night routine supports this natural process and addresses specific concerns.</p>
      
//       <h2>Essential Night Routine Steps</h2>
      
//       <h3>1. Remove Makeup Thoroughly</h3>
//       <p>Use an oil-based cleanser or micellar water to dissolve makeup, including waterproof mascara.</p>
      
//       <h3>2. Double Cleanse</h3>
//       <p>Follow with a gentle water-based cleanser to remove remaining impurities and oil.</p>
      
//       <h3>3. Apply Treatment Products</h3>
//       <p>This is the time for active ingredients like retinol, AHAs, or BHAs. Start slowly if you're new to actives.</p>
      
//       <h3>4. Eye Cream</h3>
//       <p>Gently pat around the orbital bone to address dark circles, puffiness, or fine lines.</p>
      
//       <h3>5. Moisturize</h3>
//       <p>Use a richer night cream than your day moisturizer. Your skin loses more water at night, so extra hydration is key.</p>
      
//       <h3>6. Optional: Facial Oil or Sleep Mask</h3>
//       <p>Lock everything in with a few drops of facial oil or apply a sleeping mask for intensive treatment.</p>
      
//       <h2>Pro Tips</h2>
//       <p>Change your pillowcase regularly, keep room temperature cool, and consider using a humidifier in dry climates.</p>
//     `,
//     author: "Lisa Chen",
//     date: "2024-10-05",
//     category: "Skincare",
//     tags: ["Night Routine", "Skincare Tips", "Anti-Aging"],
//     image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
//     readTime: "4 min read"
//   },
//   {
//     id: 6,
//     title: "Mastering the No-Makeup Makeup Look",
//     excerpt: "Learn the art of looking naturally flawless with minimal products and maximum impact.",
//     content: `
//       <h2>The Philosophy Behind It</h2>
//       <p>The no-makeup makeup look celebrates your natural features while subtly enhancing them. It's about looking like the best version of yourself.</p>
      
//       <h2>Essential Products</h2>
      
//       <h3>Skin Preparation</h3>
//       <p>Start with a hydrating primer or moisturizer. Dewy, healthy skin is the foundation of this look.</p>
      
//       <h3>Minimal Coverage</h3>
//       <p>Use tinted moisturizer or light foundation only where needed. Spot conceal instead of full coverage.</p>
      
//       <h3>Natural Flush</h3>
//       <p>Cream blush blended with fingertips looks most natural. Choose shades that mimic your natural flush.</p>
      
//       <h3>Subtle Eyes</h3>
//       <p>Skip liner and shadow. Curl lashes and apply brown mascara to just the tips for definition.</p>
      
//       <h3>Groomed Brows</h3>
//       <p>Fill sparse areas with light, hair-like strokes. Brush through with clear gel for a feathery finish.</p>
      
//       <h3>Perfected Lips</h3>
//       <p>Use a tinted lip balm or your natural lip shade. Add a touch of gloss to the center for dimension.</p>
      
//       <h2>The Key</h2>
//       <p>Less is more. Blend everything seamlessly and use cream products for the most natural finish.</p>
//     `,
//     author: "Sophie Williams",
//     date: "2024-10-02",
//     category: "Makeup",
//     tags: ["Natural Makeup", "Minimal Beauty", "Makeup Tutorial"],
//     image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
//     readTime: "5 min read"
//   }
// ];

// export const categories = ["All", "Skincare", "Makeup", "Product Reviews"];

// export const getPostById = (id: number): BlogPost | undefined => {
//   return blogPosts.find(post => post.id === id);
// };

// export const getRelatedPosts = (currentPostId: number, category: string, limit: number = 3): BlogPost[] => {
//   return blogPosts
//     .filter(post => post.id !== currentPostId && post.category === category)
//     .slice(0, limit);
// };

// export const filterPostsByCategory = (category: string): BlogPost[] => {
//   if (category === "All") return blogPosts;
//   return blogPosts.filter(post => post.category === category);
// };

// export const searchPosts = (query: string): BlogPost[] => {
//   const lowercaseQuery = query.toLowerCase();
//   return blogPosts.filter(post => 
//     post.title.toLowerCase().includes(lowercaseQuery) ||
//     post.excerpt.toLowerCase().includes(lowercaseQuery) ||
//     post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
//   );
// };

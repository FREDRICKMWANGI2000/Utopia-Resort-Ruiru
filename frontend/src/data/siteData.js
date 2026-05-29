import jetskiImg from "../components/images/jetski.jpg";
import swimmingImg from "../components/images/swimming.png";
import swingsImg from "../components/images/swings.webp";
import bouncingImg from "../components/images/bouncingcastle.jpg";
import boatImg from "../components/images/boatriding.png";
// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Meetings & Events', id: 'events' },
  { label: 'Games & Activities', id: 'activities' },
  { label: 'Accommodation', id: 'accommodation' },
  { label: 'Restaurant & Bar', id: 'restaurant' },
  { label: 'Offers', id: 'offers' },
  { label: 'Virtual Tour', id: 'virtual-tour' },
  { label: 'Contact Us', id: 'contact' },
];
export const MENU_CATEGORIES = {
  starters: {
    label: "Starters",
    items: [
      {
        name: "Chicken Wings",
        desc: "Crispy spicy wings served with signature garlic dip.",
        price: 850,
        image: "https://plus.unsplash.com/premium_photo-1672498193267-4f0e8c819bc8?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Samosa Platter",
        desc: "Crunchy beef and vegetable samosas with chili sauce.",
        price: 600,
        image: "https://images.unsplash.com/photo-1772457677598-2dc68bb6f4c8?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Loaded Fries",
        desc: "Golden fries topped with cheese, beef, and herbs.",
        price: 950,
        image: "https://images.unsplash.com/photo-1684815495679-f6e6bc0634ec?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mini Pizza Bites",
        desc: "Freshly baked mini pizzas with mozzarella and vegetables.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  mains: {
    label: "Main Meals",
    items: [
      {
        name: "Nyama Choma Platter",
        desc: "Traditional Kenyan grilled meat served with kachumbari and ugali.",
        price: 2800,
        image: "https://cdn.kusinicollection.com/wp-content/uploads/2017/11/Nyama-choma-main.jpg",
      },
      {
        name: "Chicken Pilau",
        desc: "Spiced Swahili rice served with tender grilled chicken pieces.",
        price: 1800,
        image: "https://images.unsplash.com/photo-1603496987674-79600a000f55?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Beef Burger Deluxe",
        desc: "Juicy grilled beef burger with fries and house sauce.",
        price: 1600,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Seafood Pizza",
        desc: "Luxury pizza topped with prawns, cheese, and fresh herbs.",
        price: 2400,
        image: "https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  drinks: {
    label: "Drinks",
    items: [
      {
        name: "Tropical Cocktail",
        desc: "Refreshing tropical fruit cocktail with fresh citrus flavors.",
        price: 950,
        image: "https://images.unsplash.com/photo-1625321643320-5321f48312b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Fresh Passion Juice",
        desc: "Freshly blended passion juice served chilled with mint.",
        price: 450,
        image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mojito Special",
        desc: "Classic mojito with lime, mint, and sparkling soda.",
        price: 1100,
        image: "https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Iced Coffee",
        desc: "Premium chilled coffee topped with whipped cream.",
        price: 700,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  desserts: {
    label: "Desserts",
    items: [
      {
        name: "Chocolate Cake",
        desc: "Rich chocolate layered cake with creamy frosting.",
        price: 850,
        image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1324&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Ice Cream Delight",
        desc: "Vanilla and strawberry ice cream topped with syrup.",
        price: 650,
        image: "https://images.unsplash.com/photo-1598268121084-c8f7126e0cef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Fruit Platter",
        desc: "Fresh seasonal fruits beautifully prepared and chilled.",
        price: 900,
        image: "https://images.unsplash.com/photo-1665589048355-579bc80169d1?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Cheesecake",
        desc: "Smooth creamy cheesecake with caramel drizzle topping.",
        price: 950,
        image: "https://images.unsplash.com/photo-1676300185983-d5f242babe34?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
};

// ===== FEATURED EVENT =====
export const FEATURED_EVENT = {
  title: 'THE UTOPIA POOL PARTY "Season 5"',
  subtitle: 'Bonfire Nights & Live Entertainment',
  date: new Date('2026-06-19T14:00:00'),
  location: 'Utopia Resort Garden, Ruiru',
  description: 'Best Kenya Show is here! Step into an epic celebration under the stars featuring all Kenyan music styles — Afro-pop, gengetone, gospel, benga, and more. Enjoy live performances, gourmet dining, a silent auction, and a magical garden light show. This is the ultimate Kenyan entertainment experience!!.',
 ticketUrl: '#contact',
  image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80',
};

// ===== EVENTS & MEETINGS =====
export const EVENT_TYPES = [
  { id: 'wedding', name: 'Weddings', capacity: '20–500 guests', desc: 'Magical ceremonies and receptions in our enchanting garden and grand ballroom.' },
  { id: 'corporate', name: 'Corporate Events',  capacity: '10–300 guests', desc: 'State-of-the-art conference facilities with A/V tech and dedicated event staff.' },
  { id: 'private', name: 'Private Parties',  capacity: '10–200 guests', desc: 'Bespoke celebrations for birthdays, anniversaries, and milestone moments.' },
  { id: 'garden', name: 'Garden Hire', capacity: '50–1000 guests', desc: 'Exclusive hire of our sprawling garden grounds for outdoor events and festivals.' },
];

export const EVENT_ADDONS = [
  { id: 'tent', name: 'Marquee Tent', price: 6000, currency: 'KES' },
  { id: 'decor', name: 'Floral Decorations', price: 4500, currency: 'KES' },
  { id: 'sound', name: 'Sound System', price: 3500, currency: 'KES' },
  { id: 'dj', name: 'Professional DJ', price: 4000, currency: 'KES' },
  { id: 'lighting', name: 'Ambient Lighting', price: 3000, currency: 'KES' },
  { id: 'catering', name: 'Full Catering', price: 8000, currency: 'KES' },
];
// ===== ACTIVITIES =====
export const ACTIVITIES = [
  {
    name: 'Jet Ski Adventure',
    image: jetskiImg,
    desc: 'Experience thrilling high-speed jet ski rides across beautiful waters with breathtaking scenic lake views.',
    duration: '30–45 min',
    ageMin: 8,
  },
  {
    name: 'Swimming Experience',
    image: swimmingImg,
    desc: 'Enjoy refreshing swimming sessions in our vibrant pool perfect for relaxation, fun, and family bonding.',
    duration: '1 hour',
    ageMin: 4,
  },
  {
    name: 'Garden Swings',
    image: swingsImg,
    desc: 'Relax peacefully on scenic garden swings surrounded by lush greenery and refreshing natural atmosphere.',
    duration: 'Open access',
    ageMin: 3,
  },
  {
    name: 'Bouncing Castles',
    image: bouncingImg,
    desc: 'Exciting bouncing castles offering endless entertainment, laughter, and unforgettable adventures for energetic children.',
    duration: '1 hour',
    ageMin: 2,
    price: 15,
  },
  {
    name: 'Boat Riding',
    image: boatImg,
    desc: 'Enjoy calm and scenic boat rides across peaceful waters with stunning relaxing resort surroundings.',
    duration: '30–60 min',
    ageMin: 6,
    price: 25,
  },
];
// ===== ACCOMMODATIONS =====
export const ACCOMMODATIONS = [
  {
    id: 'standard',
    name: 'Garden View Room',
    type: 'Standard Room',
    price: 3500,
    currency: 'KES',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    description: 'Serene garden-view rooms with natural light, premium bedding, and all modern amenities for a comfortable stay.',
    features: ['Free WiFi','Smart TV', 'En-suite bathroom'],
    capacity: 2,
    badges: null,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    type: 'Deluxe Room',
    price: 4500,
    currency: 'KES',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description: ' A private lounge area, soaking tub, and exclusive butler service.',
    features: ['King bed', 'Free WiFi','Smart TV', 'En-suite bathroom'],
    capacity: 2,
    badges: 'Most Popular',
  },
  {
    id: 'family',
    name: 'Family Paradise Suite',
    type: 'Family Room',
    price: 10000,
    currency: 'KES',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    description: 'Spacious multi-room suites designed for families with separate living areas, bunk beds, and a kids\' play corner.',
    features: ['2 bedrooms', 'Living area', 'Kids\' play corner', 'Kitchenette', '2 bathrooms', 'Family pool access'],
    capacity: 6,
    badges: 'Family Choice',
  },
  {
    id: 'event-stay',
    name: 'Event Stay Package',
    type: 'Event Package',
    price: 15000,
    currency: 'KES',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    description: 'All-inclusive event packages combining luxury accommodation with event access, private dining, and exclusive activities.',
    features: ['Premium suite', 'Event entry x2', 'Breakfast & dinner', 'Spa access', 'Family pool access', 'Concierge'],
    capacity: 4,
    badges: 'All-Inclusive',
  },
];


// ===== OFFERS =====
export const OFFERS = [
  {
    tag: 'Weekend Escape',
    title: 'Garden Retreat Package',
    desc: '2 nights in our Deluxe Forest Suite with breakfast daily, a couples\' spa treatment, and a private garden dinner.',
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/477482833_486622164493099_6713316598582347660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4SXngOeVq2YQ7kNvwHGPFMk&_nc_oc=AdoFB6pJKZvsTGwuqqHJOodlB_oKHS-bJ0NkxKx-qyPIFR66VG6q_-5eZvygYjggykY&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=B11Ht7AXQ3TFWHEXYNH42g&_nc_ss=7b289&oh=00_Af62bRGIapi2BrXp7TjH2VKkwMHqX3eMArq9rTXJLwPMSw&oe=6A183160",
    originalPrice: 860,
    salePrice: 649,
    validity: 'Valid through September 2025',
    includes: ['2 nights Deluxe Suite', 'Daily breakfast', 'Couples spa', 'Private dinner', 'Late checkout'],
    badge: 'Save 25%',
  },
  {
    tag: 'Corporate Deal',
    title: 'Business & Leisure Bundle',
    desc: 'Full-day meeting room with AV tech, lunch for up to 20 guests, 1 night accommodation, and evening cocktail reception.',
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/474194349_470409896114326_3060550575681666031_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KHbpdBLPBGYQ7kNvwE-AlLD&_nc_oc=AdoF2KwxfXlCOxOeSmw0OwTeaosm00jfLgAR7BOi-pV_Ov595IGPsEEcRDu56k02DNY&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=9E2qjOd--vOXdgeYwiWBlA&_nc_ss=7b289&oh=00_Af7cu1pV_db5ZSbQhrBJt40jSERMo0aWfA6_ykNtGVwLTg&oe=6A182FA8",
    originalPrice: 1200,
    salePrice: 899,
    validity: 'Weekdays only',
    includes: ['Full-day venue', 'AV equipment', 'Lunch buffet', '1 night stay', 'Cocktail hour'],
    badge: 'Save 25%',
  },
  {
    tag: 'Family Fun',
    title: 'Family Adventure Package',
    desc: '3 nights in Family Paradise Suite, daily breakfast, unlimited activities access for kids, and a sunset boat ride.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80',
    originalPrice: 1540,
    salePrice: 1099,
    validity: 'School holidays only',
    includes: ['3 nights Family Suite', 'Daily breakfast', 'Kids activities pass', 'Boat ride', 'Pool access'],
    badge: 'Save 29%',
  },
  {
    tag: 'Celebration',
    title: 'Wedding Dream Package',
    desc: 'Complete wedding day with venue hire, floral decor, catering for 100 guests, overnight suite, and honeymoon breakfast.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    originalPrice: 8500,
    salePrice: 6999,
    validity: 'Limited dates available',
    includes: ['Garden venue', 'Floral decor', 'Catering x100', 'Sound & lighting', 'Bridal suite', 'Honeymoon breakfast'],
    badge: 'Save 18%',
  },
];

// ===== VIRTUAL TOUR SPACES =====
import backgroundimg1 from '../components/images/backgroundimg1.png';
import lakeview from '../components/images/lakeview.png';
import LuxurySuites from "../components/images/boatriding.png";
import componentGardenDining from "../components/images/GardenDining.png";
import Swimming from "../components/images/swimming.png";
import componentTerraceBar from "../components/images/outsideBar.png";

export const TOUR_SPACES = [
  {
    id: 'garden',
    name: 'Garden & Grounds',
    desc: 'Beautiful landscaped gardens featuring relaxing walkways, family spaces, jet skiing, boat riding, and scenic outdoor experiences.',
    image: backgroundimg1,
    thumb: backgroundimg1,
  },

  {
    id: 'rooms',
    name: 'Luxury Suites',
    desc: 'Elegant luxury suites offering calm and scenic boat rides across peaceful waters with stunning relaxing resort surroundings..',
    image: LuxurySuites,
    thumb: LuxurySuites,
  },

  {
    id: 'restaurant',
    name: 'Restaurant & Terrace',
    desc: 'Luxury dining experience serving nyama choma, pizzas, cocktails, burgers, refreshing drinks, and family meals.',
    image: componentGardenDining,
    thumb: componentGardenDining,
  },

  {
    id: 'bar',
    name: 'Garden Bar & Lounge',
    desc: 'Open-air lounge featuring scenic views, handcrafted cocktails, relaxing bonfire nights, music, and unforgettable evening experiences.',
    image: componentTerraceBar,
    thumb: componentTerraceBar,
  },

  {
    id: 'pool',
    name: 'Swimming Pool',
    desc: 'Luxury outdoor swimming pool offering family fun, relaxing atmosphere, cocktails, scenic surroundings, and sunset experiences.',
    image: Swimming,
    thumb: Swimming,
  },

  {
    id: 'lakeview',
    name: 'Dam View',
    desc: 'Peaceful dam views surrounded by natural beauty, relaxing breeze, boat experiences, and breathtaking sunset scenery.',
    image: lakeview,
    thumb: lakeview,
  },
];

// ===== TESTIMONIALS =====
export const TESTIMONIALS = [
  {
    name: 'Alex ',
    occasion: 'Wedding, March 2025',
    avatar: 'https://images.icon-icons.com/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
    text: 'Our wedding at AdvaBliss was nothing short of magical. Every detail was flawless, the garden was breathtaking, and the team made us feel like royalty. We\'ll cherish it forever.',
    rating: 5,
  },
  {
    name: 'Joan Mwangi',
    occasion: 'Corporate Retreat, January 2025',
    avatar: 'https://images.icon-icons.com/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png',
    text: 'Exceptional facilities, impeccable service, and stunning surroundings. Our annual leadership retreat has found its permanent home at Utopia Resort.',
    rating: 4,
  },
  {
    name: 'Janet Akoth',
    occasion: 'Family Vacation, December 2024',
    avatar: 'https://images.icon-icons.com/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181665.png',
    text: 'The kids had an absolute blast with the activities, and my husband and I could actually relax! The family suite was incredible — spacious, elegant, and wonderfully child-friendly.',
    rating: 5,
  },
];

export const CONTACT_INFO = {
  phone: '+254 790155111',
  email: 'utopiaresortruiru@gmail.com',
  address: 'Utopia Resort, Ruiru, Kenya',
  mapUrl: 'https://maps.app.goo.gl/3BkpmjCEH5qj5aJf6',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.061527834267!2d36.976389974421764!3d-1.1159798354625545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f475ec4ce3067%3A0xc8b18fe31602df20!2sUTOPIA%20RESORT%20RUIRU!5e0!3m2!1sen!2ske!4v1779817343051!5m2!1sen!2ske',
  socials: {
    instagram: 'https://www.instagram.com/utopiaresortruiru/?hl=en',
    facebook: 'https://www.facebook.com/p/Utopia-Resort-100094359596629/',
    tiktok: 'https://www.tiktok.com/@utopiaresortruiru',
    whatsapp: 'https://wa.me/2547990155111',
  },
};

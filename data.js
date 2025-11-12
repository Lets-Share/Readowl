/**
 * ==============================================================================
 * BOOK AND SHELF DATA CONFIGURATION
 * ------------------------------------------------------------------------------
 * This is the easiest file for you to edit.
 * * 1. To add a new book:
 * - Add a new object {...} to the 'books' array.
 * * 2. To add a new shelf:
 * - Create a new category object in the 'shelfDefinitions' object.
 * - Use the 'category' key in your book object to link it to the shelf.
 * * ==============================================================================
 */

// Define the structure for each shelf/section
export const shelfDefinitions = {
    // Key is used in the 'category' field of the book object
    'math': {
        title: "9th Class Books",
        actionText: "View all math books"
    },
    'programming': {
        title: "Programming & Tech",
        actionText: "View all tech books"
    },
    'fiction': {
        title: "Fiction & Classics",
        actionText: "View all fiction"
    },
    'history': {
        title: "History & Science",
        actionText: "View all history"
    },
    'science': {
        title: "Advanced Science Textbooks",
        actionText: "View all science titles"
    }
};


// Define all the books
export const books = [
    // --- NEW MATH SHELF ---
    { id: 14, title: "ENGLISH", author: "Parho.pk", coverUrl: "images/9th/English 9.png", downloadLink: "https://drive.google.com/file/d/1HXuFBp3LIUyWaJ39Z6HPH1U5DrbeQ7xB/view?usp=sharing", category: 'math' },
    { id: 15, title: "MATH ENGLISH", author: "Parho.pk", coverUrl: "images/9th/math EM.png", downloadLink: "https://drive.google.com/file/d/16Y7EOgmjxwJU6MWGtf6_5--SgeHRU0Vn/view?usp=sharing", category: 'math' },
    { id: 16, title: "MATH URDU", author: "Parho.pk", coverUrl: "images/9th/Math UM.png", downloadLink: "https://drive.google.com/file/d/12i6tUF5AeEbxR5sVFpkexPiim3Z0xKDV/view?usp=sharing", category: 'math' },
    { id: 18, title: "ISLAMIYAT LAZMI", author: "Parho.pk", coverUrl: "images/9th/islamiyat lazmi 9.png", downloadLink: "https://drive.google.com/file/d/1x2VClQFrdC8jB0y8wspfDNju-DlO84a8/view?usp=sharing", category: 'math' },
    { id: 19, title: "URDU", author: "Parho.pk", coverUrl: "images/9th/Urdu 9.png", downloadLink: "https://drive.google.com/file/d/1VUM77NgqlwrQWfil5h28UpxqjtFZdZnS/view?usp=sharing", category: 'math' },
    { id: 20, title: "PHYSICS", author: "Parho.pk", coverUrl: "images/9th/Physics 9.png", downloadLink: "https://drive.google.com/file/d/1B2cO6kQKepCyVaVkzuSqv2hbItTVRYn6/view?usp=sharing", category: 'math' },
    { id: 21, title: "BIOLOGY", author: "Parho.pk", coverUrl: "images/9th/Biology 9.png", downloadLink: "https://drive.google.com/file/d/1A3GRSijZ24wPoimt0-rIibEeX8H9AJu4/view?usp=sharing", category: 'math' },
    { id: 22, title: "CHEMISTRY", author: "Parho.pk", coverUrl: "images/9th/Chemistry 9.png", downloadLink: "https://drive.google.com/file/d/1eUw_66z6UXF-5vXS9d2Hvc_O5jNJEqTD/view?usp=sharing", category: 'math' },
    { id: 23, title: "COMPUTER SCIENCE", author: "Parho.pk", coverUrl: "images/9th/CS 9.png", downloadLink: "https://drive.google.com/file/d/1-MFUR7mjHmz4UVwi57X07pMFqy-qunXs/view?usp=sharing", category: 'math' },
    { id: 24, title: "TARJUMATUL QURAN", author: "Parho.pk", coverUrl: "images/9th/TQ 9.png", downloadLink: "https://drive.google.com/file/d/1g-XpnrTmORXwmg8WY9NOjo9sJ8h5AQoe/view?usp=sharing", category: 'math' },
    
    
    // --- PROGRAMMING SHELF ---
    { id: 2, title: "The Art of Clear JavaScript", author: "Jane Doe", coverUrl: "https://placehold.co/400x600/facc15/1f2937?text=JavaScript", downloadLink: "#", category: 'programming' },
    { id: 3, title: "Deep Learning with Python", author: "Cal Newport", coverUrl: "https://placehold.co/400x600/06b6d4/ffffff?text=Python+DL", downloadLink: "#", category: 'programming' },
    { id: 4, title: "UX Strategy Fundamentals", author: "R. A. Smith", coverUrl: "https://placehold.co/400x600/3d3d3d/ffffff?text=UX+Design", downloadLink: "#", category: 'programming' },
    { id: 5, title: "C# Design Patterns", author: "M. K. Patel", coverUrl: "https://placehold.co/400x600/ef4444/ffffff?text=C%23+Patterns", downloadLink: "#", category: 'programming' },
    
    // --- FICTION SHELF ---
    { id: 6, title: "Lord of the Rings: Fellowship", author: "J.R.R. Tolkien", coverUrl: "https://placehold.co/400x600/6b7280/ffffff?text=Fantasy", downloadLink: "#", category: 'fiction' },
    { id: 7, title: "1984 by George Orwell", author: "George Orwell", coverUrl: "https://placehold.co/400x600/ef4444/ffffff?text=Dystopian", downloadLink: "#", category: 'fiction' },
    { id: 8, title: "Dune", author: "Frank Herbert", coverUrl: "https://placehold.co/400x600/22c55e/ffffff?text=Sci-Fi", downloadLink: "#", category: 'fiction' },
    { id: 9, title: "The Martian", author: "Andy Weir", coverUrl: "https://placehold.co/400x600/f97316/ffffff?text=Sci-Fi", downloadLink: "#", category: 'fiction' },
    { id: 10, title: "Pride and Prejudice", author: "Jane Austen", coverUrl: "https://placehold.co/400x600/0284c7/ffffff?text=Classic", downloadLink: "#", category: 'fiction' },

    // --- HISTORY SHELF ---
    { id: 11, title: "Brief History of Time", author: "S. Hawking", coverUrl: "https://placehold.co/400x600/1f2937/ffffff?text=History", downloadLink: "#", category: 'history' },
    { id: 12, title: "Sapiens: A Brief History", author: "Yuval Noah Harari", coverUrl: "https://placehold.co/400x600/0284c7/ffffff?text=History", downloadLink: "#", category: 'history' },
    { id: 13, title: "World War II Atlas", author: "D. Airey", coverUrl: "https://placehold.co/400x600/94a3b8/ffffff?text=War+History", downloadLink: "#", category: 'history' },
    { id: 14, title: "The Age of Exploration", author: "M. Manson", coverUrl: "https://placehold.co/400x600/1f2937/ffffff?text=Exploration", downloadLink: "#", category: 'history' },
    { id: 15, title: "The Ottoman Empire", author: "W. McKinney", coverUrl: "https://placehold.co/400x600/0284c7/ffffff?text=Ottoman", downloadLink: "#", category: 'history' },

    // ---Science Shelf ---
    { id: 19, title: "New Amazing Book Title", author: "A New Author", coverUrl: "images/book_cover.jpg", downloadLink: "https://your-server.com/link-to-file.pdf", category: 'science' },
    { id: 20, title: " Book Title", author: "A New Author", coverUrl: "images/book_cover.jpg", downloadLink: "https://your-server.com/link-to-file.pdf", category: 'science' }
];
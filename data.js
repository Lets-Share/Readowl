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
        title: "All Class Math Books (Parho.pk)",
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
    { id: 16, title: "10th Class New Math Book", author: "Parho.pk", coverUrl: "images/imgi_6_img.png", downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", category: 'math' },
    { id: 1, title: "9th New Math Book", author: "Parho.pk", coverUrl: "images/imgi_6_img.png", downloadLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", category: 'math' },
    { id: 17, title: "8th Class Math Workbook", author: "Parho.pk", coverUrl: "https://placehold.co/400x600/f0e0c9/1f2937?text=Math+8", downloadLink: "#", category: 'math' },
    { id: 18, title: "7th Class Geometry", author: "Parho.pk", coverUrl: "https://placehold.co/400x600/f0e0c9/1f2937?text=Math+7", downloadLink: "#", category: 'math' },
    
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
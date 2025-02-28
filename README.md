Frontend Mentor - REST Countries API with Color Theme Switcher Solution

This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor. Frontend Mentor challenges help improve coding skills by building realistic projects.

Table of contents

Overview

The Challenge

Screenshot

Links

My Process

Built With

What I Learned

Continued Development

Useful Resources

Author

Acknowledgments

Overview

The Challenge

Users should be able to:

See all countries from the API on the homepage

Search for a country using an input field

Filter countries by region

Click on a country to see more detailed information on a separate page

Click through to the border countries on the detail page

Toggle the color scheme between light and dark mode

Screenshot



Links

Solution URL: Add solution URL here

Live Site URL: Add live site URL here

My Process

Built With

Semantic HTML5 markup

Tailwind CSS for styling

Flexbox & Grid for layout

Mobile-first workflow

React - JavaScript library

React Router - For navigation

REST Countries API - API for fetching country data

React Icons - For dark mode toggle and navigation icons

What I Learned

While working on this project, I learned how to:

Implement dark mode using React state and Tailwind CSS

Manage dynamic routes with react-router-dom

Fetch and display data from an external API

Use useParams to get dynamic URL segments

Optimize UI components using reusable components like CountryCard

Example Code for Dark Mode Toggle:

const [darkMode, setDarkMode] = useState<boolean>(false);

return (
  <div className={`${darkMode ? 'dark' : ''}`}>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
  </div>
);

Continued Development

Implement a loading state while fetching data

Add animations for better user experience

Improve accessibility (ARIA roles, keyboard navigation)

Optimize performance by caching API responses

Useful Resources

Tailwind CSS Docs - Helped with styling efficiently.

React Router Docs - Helped in setting up navigation and dynamic routes.

REST Countries API - Official API documentation.

Author

Website - feliciaudosen.com

Frontend Mentor - @Liciacodes

GitHub - @Liciacodes

Twitter - @liciacodes_

Acknowledgments

Special thanks to Frontend Mentor for providing great challenges and helping developers improve their skills. Also, thanks to the Tailwind and React communities for their extensive documentation and resources.


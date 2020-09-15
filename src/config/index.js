module.exports = {

    author: "@akhatua2",
    siteTitle: "Arpandeep Khatua Portfolio",
    siteShortTitle: "", // Used as logo text in header, footer, and splash screen
    siteDescription: "Arpandeep's Website",
    siteUrl: "https://github.com/akhatua2",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/arpandeepkhatua/"
        },
        {
            name: "Github",
            url: "https://github.com/akhatua2"
        },
        {
            name: "Resume",
            url: "https://github.com/akhatua2"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}
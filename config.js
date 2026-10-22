// Settings for the postcode map. Edit this file, commit, and GitHub Pages picks it up.
//
// Corrections from the public are sent to ONE of these, checked in this order:
//   1. googleForm  (free, unlimited, answers land in a Google Sheet)  <- recommended
//   2. formspree   (paste your Formspree form URL)
//   3. email       (opens the visitor's email app, pre-filled)
// Leave all three empty and the correction form is shown but switched off.
// See README.md, "Turn on corrections", for how to fill these in.
window.MAP_CONFIG = {
  corrections: {
    googleForm: {
      action: "",            // e.g. "https://docs.google.com/forms/d/e/1FAIpQL.../formResponse"
      fields: {              // each question's "entry.NNNNNNN" id from the form's pre-filled link
        postcode: "",
        office:   "",
        issue:    "",
        lat:      "",
        lon:      "",
        details:  "",
        email:    ""
      }
    },
    formspree: "https://formspree.io/f/xqpevwnl",           // e.g. "https://formspree.io/f/abcdwxyz"
    email: ""                // e.g. "postcodes@example.com"
  }
};

# Cryptox - Crypto Currency Theme

### Table of Contents
1. HTML Structure
2. CSS Files and Structure
3. JavaScript
4. Sources and Credits

### Any additional unique features that need an overview

## HTML Structure - top

#### description
This theme is a fixed grid layout with main seven sections, each section has its own sematic naming. Header section divides into logo and navigation sections, Main section divides into content and illustration sections, Why-Crappo section divides into numbers and content section, Trade-Securely section has three sections, first text content section followed by the calculator section then the last three-crypto currencies cards section, Features section has two main sections heading including text content then the content section including three features sections each one has a text container and ilustration besides each other, Start-Mining Section has only one card section including all the details, Footer section has two sections, main navigation section including four columns and bottom social media bar. Here is the general structure prespectively.

#### modifications

If you would like to edit text of any elements in one of these columns, you would do just search for the word you see in the page and replace it with the word of your choice

If you would like to edit the color, font, or style of any elements in one of these columns, I recommend you would add inline style in the element tag like so


`code` style="background-color:black; color:white; padding:20px;"


and so on for the rest of the style properties

## CSS Files and Structure
I'm using seven CSS files in this theme one for each section written in BEM Method. Many browser interpret the default behavior of html elements differently. By using a general stying CSS file, we can work round this. This file also contains all the styling, such as anchor tag colors, font-sizes, etc. Keep in mind, that these values might be overridden somewhere else in the file.

If you would like to edit a specific section of the site, simply find the appropriate file name of the CSS file, and then scroll down until you find the appropriate style that needs to be edited.

	.header__logo img {
		change styles here:
	}
## JavaScript
This theme imports two Javascript files. Main.js includes all the custom scripting and anime.min.js is the Libraray I am using here

1. AnimeJS
My custom scripts
AnimeJS is the library used in the whole animation of the website
Most of the animation in this site is carried out from the AnimeJS scripts. There are a few functions worth looking over.

#### modifications
if you wanna edit any animation in the website you can simply opne the main.js file and look for the element you wanna change and copy its class name from the section in html then search for the prespective name or parent and change the from the target property in anime callback function in the lower function section

## Sources and Credits
I've used the following images, icons or other files as listed all included in the imgs file and svgs are included in the html file.

Once again, thank you so much for viweing this theme. As I said at the beginning, I'd be glad to help you if you have any questions relating to this theme. No guarantees, but I'll do my best to assist. If you have a more general question relating to the themes consider report it or make a pull request.

Mohammed Elgammal


Hello, here you find my patch notes for each version of my 
Web-page Portfolio I develop. Nothing crazy but this will
help me remember and stay on track of any changes 
made, HOW much change made and WHY these changes were made.

---------------------------------------------------------------------------

Version 1.00 - First Deployment - 14/11/2024

https://673655ff65254e524358f155--laraibsunny.netlify.app/

---------------------------------------------------------------------------

Version 1.01 - UI/UX changes - 15/11/2024

Media Query Changes>

Simple marginal changes to the threshold of devices with the capability
of 1400px > device >= 800px. These changes were made because the 
colorModeIcon / night and dark mode icons, as well as the skills
in my skill list were too close to the border of many phone screens.
Which I only discovered upon deploying the website ;(.

- margin: 20px added to .container of SkillsStyles 
-- @media (width >= 800px) from 0 --
- 20px added to .container of HeroStyles 
-- @media (width >= 800px) from 0 --
- 20px added to .colorMode of HeroStyles
-- right: from 0 --

Project/SkillsList Changes>

One added project which is this Webpage Portfolio and changed Skills
in my Skills List to be more serious as I want to post it on my LinkedIn
and show it to people and I don't think professionals would take me 
very seriously XD. Small changes to underlining section titles aswell as 
grouping skills by work-based or self-taught. Side note, resizing images
is horrible, I need to learn a better way lol.

- text-decoration: underline added to .sectionTitle
- silly skills destroyed
- webpage portfolio skill component added to Skills.jsx
- max-width: 25ch added to ProjectStyles
-- .container p {} from 0 --
- gap: 60px added to ProjectStyles
--  .projectsContainer from 30px --

Miscellaneous Changes>

Some miscellaneous changes include the title of the webpage being changed from
Laraib Sunny to Laraib Sunny's Portfolio, the Icon of the webpage being altered
to the smiley Sun. More modifications involve, accepting I am an apprentice
so presenting that as my title XD, added extra coolness to my info/mission 
statement, both submit and CV buttons amended to be compact/better presented 
in my humble opinion and a reference to Icons8 in the footer for some of 
the Icons I used for licensing reasons. In my next patch I want to focus on 
transitions and possibly animations when scrolling through the page. 
But who knows what will come...

---------------------------------------------------------------------------


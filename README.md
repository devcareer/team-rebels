# Team-rebels


# Looper

Static build of https://team-rebel.netlify.com/ with SASS as CSS pre-processsor,
Static build of https://team-rebel.netlify.com with SASS as CSS pre-processsor,
Bootstrap as CSS framework and Jquery as Javascript framework. 


# How to Setup Project Locally

1. Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

2. 0pen Git Bash.

3. Change the current working directory to your local project.

4. Initialize the local directory as a Git repository.

5. Add the files in your new local repository. This stages them for the first commit.
e.g  $git add . = Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.

6. Commit the files that you've staged in your local repository.
e.g $ git commit -m "First commit" = Commits the tracked changes and prepares them to be pushed to a remote repository. . To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

7. At the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.

8. In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
e.g $ git remote add origin remote repository URL=Sets the new remote
$ git remote -v=Verifies the new remote URL

9. Push the changes in your local repository to GitHub.
e.g $ git push origin develop=Pushes the changes in your local repository up to the remote repository you specified as the origin.

# To run and watch your scss
1. Open your terminal or CMD on windows
2. cd to the project directory
3. run `npm run scss`
4. Then your scss will be automatically watched and rendered to the css/main.css
5. Kepp watching your terminal/CMD for any error message.

# Styleguides

A coding styleguide (note, not a visual styleguide) is a valuable tool for teams who:

* Build and maintain products for a reasonable length of time;
* Have developers of differing abilities and specialties;
* Have a number of different developers working on a product at any given time;
* On-board new staff regularly;
* Have a number of codebases that developers dip in and out of.

# Syntax and formatting

1. Two (2) space indents, no tabs.
2. 80 character wide columns.
            Reason
 * The ability to have multiple files open side by side.
 * Viewing CSS on sites like GitHub, or in terminal windows.
 * Providing a comfortable line length for comments.
3. Multi-line CSS.
4. Meaningful use of whitespace.
5. Dont use !important in your coding.

# STRINGS

* Unless applied as CSS identifiers, Strings should be quoted using single quotes. URLs should also be quoted. 

# NUMBERS

* Sass makes no distinction between numbers, integers, floats so trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added. 
* A zero (0) length should not have a unit. 
* Units manipulation should be thought as arithmetic operations, not string operations. 
* In order to improve readability, top-level calculations should be wrapped in parentheses. Also, complex math operations might be splitted into smaller chunks. 
* Magic numbers dramatically hurt code maintainability and should be avoided at all time. When in doubt, extensively explain the questionable value. 

# COLORS

* Colors should be expressed in HSL when possible, then RGB, then hexadecimal (in a lowercase and shortened form). Color keywords should be avoided. 
* Prefer mix(..) instead of darken(..) and lighten(..) when lightening or darkening a color. 

# LISTS
* Unless used as a direct mapping to space-separated CSS values, lists should be separated with commas. 
* Wrapping parentheses should also be considered to improve readability. 
* Inlined lists should not have a trailing comma, multi-line lists should have it. 

# MAPS

* Maps containing more than a single pair are written on several lines. 
* To help maintainability, the last pair of a map should have a trailing comma. 
* Map keys that happen to be strings should be quoted as any other string. 

# DECLARATION SORTING

*The system used for declaration sorting (alphabetical, by type, etc.) doesn’t matter as long as it is consistent. ↩

# SELECTOR NESTING

* Avoid selector nesting when it is not needed (which represents most of the cases). 
* Use selector nesting for pseudo-classes and pseudo-elements. 
* Media queries can also be nested inside their relevant selector. 

# BEM Naming Conventions

Naming conventions in CSS are hugely useful in making your code more strict, more transparent, and more informative.

This project is making use of BEM-like naming convention.

BEM, meaning Block, Element, Modifier, is a front-end methodology coined by developers working at Yandex. Whilst BEM is a complete methodology, here we are only concerned with its naming convention. Further, the naming convention here only is BEM-like; the principles are exactly the same, but the actual syntax differs slightly.

BEM splits components classes into three groups:

* Block: The sole root of the component.
* Element: A component part of the Block.
* Modifier: A variant or extension of the Block.

A BLOCK is a top-level abstraction of a new component, for example a button: .btn { }. This block should be thought of as a parent. Child items or ELEMENTS, can be placed inside and these are denoted by two underscores following the name of the block like .btn__price { }. Finally, MODIFIERS can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--orange.

# Commenting

CSS is a tricky language; do not hesitate to write very extensive comments about things that look (or are) fishy. 
For variables, functions, mixins and placeholders establishing a public API, use SassDoc comments. 

# Variables

* Do use the !default flag for any variable part of a public API that can be safely changed. 
* Do not use the !global flag at root level as it might constitue a violation of Sass syntax in the future. 

# Extend

* Stick to extending placeholders, not existing CSS selectors. 
* Extend a placeholder as few times as possible in order to avoid side effects. 


# Table of contents.

#SASS 7-1 Pattern

-sass/
|
|- abstracts/(or utilities/)
|  |-_variables.scss     // Sass Variables
|  |-_functions.scss     //Sass Functions
|  |-_mixins.scss        //Sass Mixins
|
|-base/
|  |-_reset.scss         //Reset styling
|  |-_typography.scss     //Typography rules
| 
|-components/(or modules/)
|  |-_buttons.scss
|  |-_carousels.scss
|  |-_slider.scss
|
|-layout/
|  |-_navigation.scss     //Navigation styling
|  |-_grid.scss           //Grid styling
|  |-_header.scss         //Header styling
|  |-_footer.scss          //Footer styling
|  |-_sidebar.scss         //Sidebar styling
|  |-_forms.scss            //Forms styling
|
|-pages/folder
|  |-_home.scss           //Home styling
|  |-_about.scss           //About styling
|  |-_contact.scss          //Contact styling
| 
|-themes/
|  |-_theme.scss          //Default theme
|  |-_admin.scss           //Admin theme
|  
|-vendors/
|  |-_bootstrap.scss         //Bootstrap
|  |-_jquery_ui.scss           //Jquery ui
|  
|
|
|_main.scss          //Main sass file


# Exercise
## Overview
This exercise will take 3½ hours overall. During the first two hours you will solve a few tasks. In the remaining time we will go over the solutions together and discuss them.

* Going over the exercise and setting up the work environment: 15 minutes
* Planning and coding: 135 minutes, work is offline. If at any time while working offline you have any questions/issues, call Lior at (669) 227-2742
* Solution review: 60 minutes. Everyone re-joins WebEx, and we go over the solutions together.

## Background
 The organization is using a web app (SequencePlayer) that plays short sequences of images (up to 5 images), with transitions between them. The player does not get any user interactions - it simply switches automatically from one image to another.

   The purpose of the web app is to illustrate a sequence of actions on an Apple device. Like in a stop-motion animation, each image is a frame, with a given time length, and the frames can transition from one to another in different ways (like fading in and out, sliding from left to right, etc.).

In addition to an image, each frame can have a red rectangle over the image, to highlight where the user clicks on the actual device to perform the action.
      
   [This video](interview_docs/prototype_examples/sequence_player_prototype.mp4) illustrates what the SequencePlayer output looks like, with 5 sample images and 2 seconds between each frame. It is embedded as a web app in pages across the organization.
      
## Your task:
 Build an authoring web app for the SequencePlayer. We'll call the authoring app *SPEditor*. The SPEditor would be used by designers across the organization to create sequences. It will have a basic functionality: each designer will be able to create a new project (a 5-image sequence) and to save it.

The team’s designer provided [the following video](interview_docs/prototype_examples/speditor_prototype.mp4) to illustrate the SPEditor functionality that you are asked to build.
  
#### Deliverables
Implement the main SPEditor page following the video prototype (in the above paragraph), and using React JS.
 
  Listed below are the functionality items that should be implemented. They are listed in order of importance, so work in that order.
   1. When the page loads it shows a new empty project, with all frames empty; no data retrieval from a backend is necessary
   2. Allow user to add 5 images (frames) to the project from their computer
        (you can use [our sample images](interview_docs/graphic_assets) for your tests)
   3. Allow user to preview the sequence
      * Use a one frame per 2 secs rate
      * Use a slide-to-left transition between frames  
   4. Allow user to switch between two frames by dragging a frame thumbnail over another (you can use React-DnD or another drag&drop library; using the library's default drag & drop functionality and animation is okay)
   * __Bonus items, time permitting__   
     1. Allow user to save the project: upon clicking Save, a POST request will be made (use *localhost* as a placeholder for the server's URL). The request will have just the project's JSON in its body. (JSON only - images are not necessary.)
     2. Allow user to place a red (highlight) circle somewhere on a frame, as shown in prototype

__Notes__: 
      
   * For the purpose of this exercise, you can just mimic the layout, widths, heights and colors of elements, and not spend a lot of time making them accurate.
   * For the arrows between the thumbnails in the design you can use [this SVG](src/assets/svg/arrow.svg)
   * For sliding and for fade-in/out effects use only what React, Vanilla JS or CSS provide
   * For anything else you can use any library/framework that you find suitable
   * An [example modal component](src/components/ExampleModal/ExampleModal.js) for the preview feature has been provided. It utilizes react-modal so feel free to modify or create a new component to implement the preview feature.
   * An [example image loading component](src/components/ExampleImageLoader/ExampleImageLoader.js) has been provided. It utitlizes javascript's FileReader to extract the necessary image data from the selected files. Feel free to modify or create a new component to implement the image loading feature.

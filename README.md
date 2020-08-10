# Exercise
## Overview
This exercise will take 3½ hours overall. During the first two hours you will solve a few tasks. In the remaining time we will go over the solutions together and discuss them.

* Going over the exercise and setting up the work environment: 15 minutes
* Planning and coding: 135 minutes, work is offline. If at any time while working offline you have any questions/issues, call Lior at (669) 227-2742 (do not text)
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
Implement the main SPEditor page following the video prototype (in the above paragraph). The implementation should be JS-based.

__Note__: your team members (who will maintain the tool) work in vanilla JS, React and Redux. These libraries are not a constraint, but consider it when you choose the JS solution.
 
  Listed below are the functionality items that should be implemented. They are listed in order of importance, so work in that order.
   1. When the page loads it shows a new empty project, with all frames empty; no data retrieval from a backend is necessary
   2. Allow user to add 5 images (frames) to the project from their computer
        (you can use [our sample images](interview_docs/graphic_assets) for your tests)
        
        __Note__: the long-term plan is to be able to use the tool for more than 5 images/frames.
        
   3. Allow user to preview the sequence
      * Use a one frame per 2 secs rate
      * Use a slide-to-left transition between frames
      
      __Note__: ideally we would like the preview part in the SPEditor to work also independently outside the context of this application.

   4. Allow user to save the project: upon clicking Save, a POST request will be made (use *localhost* as a placeholder for the server's URL). The request will have the project data in a JSON format in its body. (include image paths only, the images themselves are not necessary.) The JSON structure is open, for you to plan.
   
   * __Bonus item, time permitting__
     1. Allow user to place a red (highlight) circle somewhere on a frame, as shown in prototype

__Notes__: 
      
   * For the purpose of this exercise, you can just mimic the layout, widths, heights and colors of elements, and not spend a lot of time making them accurate.
   * For the arrows between the thumbnails in the design you can use [this SVG](src/assets/svg/arrow.svg)
   * An [example modal component](src/components/ExampleModal/ExampleModal.js) for the preview feature has been provided. It utilizes react-modal so feel free to modify or create a new component to implement the preview feature.
   * An [example image loading component](src/components/ExampleImageLoader/ExampleImageLoader.js) has been provided. It utilizes javascript's FileReader to extract the necessary image data from the selected files. Feel free to modify or create a new component to implement the image loading feature.

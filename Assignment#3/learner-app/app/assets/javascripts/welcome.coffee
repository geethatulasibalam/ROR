# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

 @paintIt=(element,backgroundcolor,textcolor)->
 	element.style.backgroundColor=backgroundcolor
 if textColor?
 	element.style.color=textcolor

